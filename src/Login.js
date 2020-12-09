import { Button } from '@material-ui/core';
import React from 'react';
import {auth,provider} from "./firebase";
import './Login.css';
import profile from './profile.jpg';

function Login() {
    const signIn = (e) =>{
         // google login
         auth.signInWithPopup(provider)
         .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__img" >
             {/* <img src={profile}></img> */}
            </div>
            <h2>Chat Application</h2>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
