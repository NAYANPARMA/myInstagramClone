import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase'
import './header.css'


function Header(props) {
    return (
    <div className="header">
        <img
          className = "headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt = "InstagramLogo"
          /> 
          { props.user ? 
            <Button onClick={() => auth.signOut()}>Logout</Button> :
            <div className='appLogin'>
                <Button onClick={props.setOpenSignin}>Sign In</Button>
                <Button onClick={props.setOpen}>Sign up</Button>
            </div>
      }
    </div>
    )
}

export default Header
