import React from 'react'
import Form from '../components/signup/form/form'
import GoogleSignin from '../components/signup/google-signin/google-signin'
import '../styles/signup.css'

const Login = () => {
    return (
        <div className="signup">
            <div className="wrapper">
                <Form />
                <GoogleSignin />
            </div>
        </div>
    )
}

export default Login
