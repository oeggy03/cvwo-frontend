import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <ul>
            <Link to="/" className='title'>FoRoom</Link>
            <CustomLink to = '/communities'>Browse</CustomLink>
            <CustomLink to = '/about'>About</CustomLink>
            <CustomLink to = '/profile'>Profile</CustomLink>
            </ul>
            <a href='https://github.com/oeggy03' target="_blank" rel="noreferrer noopener">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='github' alt="CVWO"/>
            </a>
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