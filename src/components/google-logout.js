import React from 'react'
import { GoogleLogout } from 'react-google-login'

const googleLogout = () => {

    const onSuccess = () => {
        alert('logout made successfully')
        if (typeof(window) !== 'undefined') {
            localStorage.clear('user')
            window.location.replace(window.location.origin+"/")
        }
    }
    return (
        <div>
            <GoogleLogout
                clientId="610876321489-6kv5r7a4pjdsceu9tc89ndshrn4cd6fu.apps.googleusercontent.com"
                buttonText="logout"
                style={{display:'flex',justifyContent:'center',marginTop:'50px'}}
                onLogoutSuccess={onSuccess}
                
            />
        </div>
    )
}

export default googleLogout
