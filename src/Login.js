import { Button } from '@material-ui/core';
import React from 'react';
import {auth,provider, uiConfig} from "./firebase";
import './Login.css';
import profile from './profile.jpg';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from "firebaseui";

function Login() {
    const signIn = (e) =>{
         // google login
        // var phoneNumber = getPhoneNumberFromUserInput();
        
         
        //  auth.signInWithPopup(provider)
        //  .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__img" >
            <div id="recaptcha-container" />
             {/* <img src={profile}></img> */}
            </div>
            <h2>Chat Application</h2>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
