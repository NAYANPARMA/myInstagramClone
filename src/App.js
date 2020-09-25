import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Posts from './Posts/Posts';
import MyModal from './Modal/MyModal'
import { auth } from './firebase'
//import { Button } from '@material-ui/core';
import UserAuthentication from './UserAuthentication/UserAuthentication';
import UserLogin from './UserAuthentication/UserLogin';
import Imageupload from './ImageUpload/Imageupload';

function App() {
  const [open , setOpen] = useState(false)
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user , setUser] = useState(null)
  const [signIn, setOpenSignin] = useState(false)
  
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser){  
              //user logged in 
              console.log(authUser);
              setUser(authUser)
          } else {
              //user logged out
              setUser(null);
          }
      })
      return () => {
          //perform some clean up work
          unsubscribe();
      }
  }, [user, username])

  const signup = (event) => {
    event.preventDefault()
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
        return authUser.user.updateProfile({
            displayName: username
        })
    })
    .catch((error) => alert(error.message));
     setOpen(false)
  }

  const signin = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .catch((error) => alert(error.message))
    setOpenSignin(false)
  }

  return (
    <div className="app">
      <MyModal open={open} onClose = {() => setOpen(false)}>
        <UserAuthentication username={username}
          password={password}
          email={email}
          signup={signup}
          setUserName={setUserName}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </MyModal>
      <MyModal open={signIn} onClose={() => setOpenSignin(false)}>
        <UserLogin
          password={password}
          email={email}
          signin={signin}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </MyModal>
      <Header user={user} setOpenSignin={()=> setOpenSignin(true)} setOpen={()=>setOpen(true)}/>
      <Posts/>
      {user?.displayName ?  (
        <Imageupload username={user.displayName}/>
      ):( <h3>Sorry you need to login to upload</h3>
      )}
    </div>
  );
}

export default App;
 