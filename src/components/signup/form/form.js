import React, { useState } from 'react'
import './form.css'
import { UseForm } from './useForm'

const Form = () => {
    const [value, handleChange] = UseForm({
        name: '',
        email: '',
        password: '',
    })
    const [Errors, setErrors] = useState({})


    const handleValidation = () => {
        let formIsValid = true
        let errors = {}


        // name
        if (!value.name) {
            formIsValid = false
            errors['name'] = 'Name cannot be empty'
        }

        if (value.name.length >= 1) {
            if (!value.name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false
                errors['name'] = 'Please enter only letters'
            }
        }

        // email
        if (!value.email) {
            formIsValid = false
            errors['email'] = 'Email cannot be empty'
        }

        if (value.namelength >= 1) {
            if (!value.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                formIsValid = false
                errors['email'] = 'Email is invalid'
            }
        }

        // password
        if (!value.password) {
            formIsValid = false
            errors['password'] = 'password cannot be empty'
        }

        if (value.password.length >= 1) {
            if (value.password.length <= 5) {
                formIsValid = false
                errors['password'] = 'Password must be 5 characters long!'
            }
        }


        setErrors({ errors })
        return formIsValid
    }


    const formSubmit = (event) => {
        event.preventDefault()

        if (handleValidation()) {
            const user = {
                givenName: value.name, email: value.email
            }
            alert('form submit success')

            if (typeof (window) !== undefined) {
                localStorage.setItem('user', JSON.stringify(user))
                window.location.replace(window.location.origin + "/")
            }

        } else {
            alert('form has error')
        }
    }




    return (
        <div>
            <form action="" className="form" onSubmit={formSubmit}>
                <div className="textfield-col">
                    <label htmlFor="name" className="label">name</label>
                    <input type="text" placeholder="enter your name" name="name" className="input-box" onChange={handleChange} value={value.name} />
                    <p className="error-msg">{Errors.errors === undefined ? '' : Errors.errors.name}</p>
                </div>
                <div className="textfield-col">
                    <label htmlFor="email" className="label">email</label>
                    <input type="email" placeholder="enter your email" name="email" className="input-box" onChange={handleChange} value={value.email} />
                    <p className="error-msg">{Errors.errors === undefined ? '' : Errors.errors.email}</p>
                </div>
                <div className="textfield-col">
                    <label htmlFor="password" className="label">password</label>
                    <input type="password" placeholder="enter your password" name="password" className="input-box" onChange={handleChange} value={value.password} />
                    <p className="error-msg">{Errors.errors === undefined ? null : Errors.errors.password}</p>
                </div>

                <button className="submit-btn">submit</button>
            </form>
        </div>
    )
}

export default Form
