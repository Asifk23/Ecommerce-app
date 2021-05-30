import React, { useState } from 'react'
import './product.css'

const ProductSection = () => {
    const [Tabs, setTabs] = useState('all')
    const productDetails = [
        {
            tabs: ['all', 'egg', 'oil', 'rice',],
            products: [
                { category: 'egg', price: '7', mrp: '9.9', productname: 'chicken egg', quantityType: 'nos', image: 'https://solidstarts.com/wp-content/uploads/when-can-babies-eat-eggs.jpg', },
                { category: 'oil', price: '75', mrp: '120.0', productname: 'sunflower oil', quantityType: 'litre', image: 'https://5.imimg.com/data5/TU/SX/MY-40328909/sunflower-oil-500x500.jpg', },
                { category: 'rice', price: '38', mrp: '48.0', productname: 'rice', quantityType: 'Kg', image: 'https://www.onionz.in/uploads/items/9df44dcf94dd30eceb48613584740823.jpg', },

            ],
        }
    ]

    // const quntityTypes = ['litre', 'kilogram', 'nos']
    const quantity = [
        { category: 'litre', quantities: ['0.1', '0.25', '0.5', '1.0', '1.5', '2.0', '5.0'] },
        { category: 'Kg', quantities: ['0.1', '0.25', '0.5', '1.0', '1.5', '2.0', '5.0'] },
        { category: 'nos', quantities: ['1', '2', '3', '4', '5'] },
    ]

    const selectTab = (item) => {
        setTabs(item)
        // console.log(item);
    }



    return (
        <section className="product-section">
            <div className="tabs-col">
                {productDetails.map((data, index) => {
                    return (
                        <div key={index} className="tabs active">
                            {data.tabs.map((item, index) => {
                                // console.log(index);
                                return (
                                    <button
                                        key={index}
                                        onClick={() => selectTab(item)}
                                        className="tab-btn">{item}</button>
                                )
                            })}
                        </div>
                    )
                })}

            </div>
            <div className="tabs-data">
                {productDetails.map((items, index) => {
                    return (
                        <div key={index} className="grid-layout">
                            {items.products.map(product => {
                                if (product.category === Tabs) {
                                    return (
                                        <div className="product-box">
                                            <img src={product.image} alt={product.productname} className="image" />
                                            <p className="name">{product.productname}</p>

                                            {quantity.map((item, index) => {
                                                if (product.quantityType === item.category) {
                                                    return (
                                                        <div key={index} className="quantity-col">
                                                            <select name="quantity" id="" className="select-box">
                                                                {item.quantities.map((item, index) => {
                                                                    return (
                                                                        <option
                                                                            key={index}
                                                                            value={item}>{item}</option>
                                                                    )
                                                                })}




                                                            </select>
                                                            <p className="quantity-type">{item.category}</p>
                                                        </div>
                                                    )
                                                } return null

                                            })}

                                            <p className="mrp-price">{product.mrp}</p>
                                            <div className="add-to-cart-col">
                                                <p className="price">₹ {product.price}</p>
                                                <p className="m-0">X</p>
                                                <p className="m-0 selected-quantity">{ }</p>
                                                <button className="addToCart-btn">add to cart</button>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (Tabs === "all") {
                                    return (
                                        <div className="product-box">
                                            <img src={product.image} alt={product.productname} className="image" />
                                            <p className="name">{product.productname}</p>

                                            {quantity.map((item, index) => {
                                                if (product.quantityType === item.category) {
                                                    return (
                                                        <div key={index} className="quantity-col">
                                                            <select name="quantity" id="" className="select-box">
                                                                {item.quantities.map(item => {
                                                                    return (
                                                                        <option value={item}>{item}</option>
                                                                    )
                                                                })}




                                                            </select>
                                                            <p className="quantity-type">{item.category}</p>
                                                        </div>
                                                    )
                                                } return null

                                            })}

                                            <p className="mrp-price">{product.mrp}</p>
                                            <div className="add-to-cart-col">
                                                <p className="price">₹ {product.price}</p>
                                                <p className="m-0">X</p>
                                                <p className="m-0 selected-quantity">0</p>
                                                <button className="addToCart-btn">add to cart</button>
                                            </div>
                                        </div>
                                    )
                                } return null

                            })}

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProductSection
