import React from 'react'
import {Button, Input} from '@material-ui/core'


function UserAuthentication(props) {

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
                placeholder = 'username'
                value = {props.username}
                onChange = {(e) => props.setUserName(e.target.value)}
            />
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
            <Button type='submit' onClick={props.signup}>Sign Up</Button>
        </form>
    )
}

export default UserAuthentication
