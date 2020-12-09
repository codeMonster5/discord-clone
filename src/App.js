import React,{useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar.js";
import './Sidebar.css';
import Chat from "./Chat";
import { useSelector,useDispatch } from 'react-redux';
import {login,logout, selectUser} from './features/userSlice'
import Login from './Login';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
       if(authUser){
           dispatch(login({
             uid:authUser.uid,
             photo:authUser.photoURL,
             email : authUser.email,
             displayName :authUser.displayName
           }))

          
       }
       else{
          dispatch(logout());
       }
     
      authUser.getIdToken(true).then(function(idToken) {
        console.log(idToken ,"token");
        // send token to backend for verification
      }).catch(function(error) {
        // Handle error
      });
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authUser)
    };
      fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    });
    
  }, [dispatch])

  return (
    <div className="app">
      {user?(
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
       <Login/>
      )}
    
    </div>
  );
}

export default App;
