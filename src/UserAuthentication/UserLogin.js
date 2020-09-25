import React from 'react'
import {Button, Input} from '@material-ui/core'

function UserLogin(props) {
    return (
    <form className = "appsignup">
        <center>
            <img
                className = "headerImage" 
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                alt = "InstagramLogo"
            /> 
        </center>
        <Input type = 'text'
            placeholder = 'email'
            value = {props.email}
            onChange = {(e) => props.setEmail(e.target.value)}
        />
        <Input type = 'password'
            placeholder = 'password'
            value = {props.password}
            onChange = {(e) => props.setPassword(e.target.value)}
        />
        <Button type='submit' onClick={props.signin}>Sign In</Button>
    </form>
    )
}

export default UserLogin
