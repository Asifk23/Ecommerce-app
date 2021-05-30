import React from 'react'
import GoogleLogin from 'react-google-login'
import './google-signup.css'


const GoogleOauth = () => {

    const onSuccess = (res) => {
        // console.log('[Login Success] CurrentUser :', res.profileObj);
        if (typeof (window) !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(res.profileObj))
            window.location.replace(window.location.origin+"/")
        }
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res :', res);
    }

    return (
        <div>
            <GoogleLogin
                clientId="610876321489-6kv5r7a4pjdsceu9tc89ndshrn4cd6fu.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                className="google-signup-btn"
                isSignedIn={true}
            />
        </div>
    )
}

export default GoogleOauth
