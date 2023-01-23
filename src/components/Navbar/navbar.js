import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import SignIn from '../Auth/signIn';
import SignUp from '../Auth/signUp';

const Navbar = ({updateSI, statusSI}) => {
    const [showSignIn, setShowSI] = useState(false)
    const [showSignUp, setShowSU] = useState(false)

    function activateSignIn () {
        setShowSI(true)
    }

    function deactivateSignIn () {
        setShowSI(false)
    }

    function activateSignUp () {
        setShowSU(true)
    }

    function deactivateSignUp () {
        setShowSU(false)
    }
    
    return (
        <nav className = "navbar">
            <ul className='navRight'>
            <a href='https://github.com/oeggy03' target="_blank" rel="noreferrer noopener">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='github' alt="CVWO"/>
            </a>
            <Link to="/" className='title'>FoRoom</Link>
            <CustomLink to = '/communities'>Communities</CustomLink>
            <CustomLink to = '/about'>About</CustomLink>
            
            </ul>
            
            <ul className='navRight'>
                {statusSI ? null : <div className='navPath' onClick={activateSignIn}>Sign In</div>}
                {statusSI ? null : <div className='navPath' onClick={activateSignUp}>Sign Up</div>}
                {statusSI? <CustomLink to = '/profile'>Profile</CustomLink> : null}
                {statusSI? <div className='navPath' onClick={()=>{window.localStorage.removeItem("isSignedIn"); window.location.reload(false)}}>Sign Out</div> : null}
            </ul>
            {showSignIn?<SignIn toggle={deactivateSignIn} updater={updateSI}/>:null}
            {showSignUp?<SignUp toggle={deactivateSignUp}/>:null}
        </nav>
    )
}

export default Navbar;

function CustomLink ({ to, children, ...props}) {
    return (
        <li className='navPath'>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}