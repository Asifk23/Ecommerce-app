import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {

    const [isLogged, setisLogged] = useState(undefined)
    const [CurrentUser, setCurrentUser] = useState(null)
    const [userData, setuserData] = useState('')
    const [dropdownShow, setdropdownShow] = useState(false)
    const [searchbarActive, setsearchbarActive] = useState(false)
    // const [displayStyle, setDisplayStyle] = useState('alert-box-show')

    // const alert = useRef(null)


    setTimeout(() => {

        if (typeof (window) != undefined) {
            setCurrentUser(localStorage.getItem('user'))

        }
        if (CurrentUser === null) {
            setisLogged(false)
        }
        else {
            setisLogged(true)
            const userDataConverted = JSON.parse(CurrentUser)
            setuserData(userDataConverted)
        }




    }, 100);


    const ShowDropdown = () => {
        if (dropdownShow === false) {
            setdropdownShow(true)
        } else {
            setdropdownShow(false)
        }

    }


    const search = () => {
       
            if (typeof (window) !== undefined) {

                if (window.innerWidth <= 600) {
                    if (searchbarActive === false) {
                        setsearchbarActive(true)
                    } else {
                        setsearchbarActive(false)
                        
                    }
                }

            }
        

    }



    // console.log(searchbarActive)
    // setInterval(() => {
    //     if (isLogged === true) {
    //         setDisplayStyle('alert-box-show')
    //     }
    // }, 100);

    // setTimeout(() => {
    //     if (isLogged === true) {
    //         setDisplayStyle('alert-box-hidden')
    //     }
    // }, 2000);


    return (
        <header className="header">
            <div className="navbar">
                {/* brand name & logo */}
                <Link to="/" className="brand">
                    <p>E-Commerce</p>
                </Link>

                <div className="container">

                    {/* search box */}
                    <div className="search-bar">
                        <input type="text" placeholder="search here" className="input-field" />
                        <SearchIcon onClick={search} />
                    </div>


                    {/* cart  */}
                    <div className="cart">
                        <CartIcon />
                        <p className="cart-text">cart</p>
                        <span className="cart-quantity">0</span>
                    </div>


                    {/* user */}
                    <div className="user" onClick={ShowDropdown}>
                        <img src={isLogged === false || userData.imageUrl === undefined ? 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' : userData.imageUrl} alt="" className="profile-image" />
                        <p className="user-name">{isLogged === true ? userData.givenName : ''}</p>
                    </div>

                    {/* dropdown */}
                    <div className={dropdownShow === true ? "dropdown" : "hidden"} >
                        <ul>

                            <li>account</li>
                            <li>order</li>
                            <li>wishlist</li>
                            <li>
                                <Link to={isLogged === false ? '/signup' : '/logout'}>
                                    {isLogged === true ? 'logout' : 'sign up'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/*search bar only on mobile devices */}

                <div className={searchbarActive === true ? "mobile-search-bar" : 'hidden'}>
                    <input type="text" placeholder="search here" className="input-field" />
                    <SearchIcon />
                </div>
            </div>


            {/* <div
                ref={alert}
                className={displayStyle} ></div> */}
        </header>
    )
}

export default Header
function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    )
}
function CartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg" className="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
}