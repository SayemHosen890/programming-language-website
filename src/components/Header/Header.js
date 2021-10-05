import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import image from '../../logo_website-removebg-preview.png'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "DarkOrange"
    }

    return (
        <nav className='p-3 d-flex justify-content-between nav-content'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='d-flex align-items-center'>
                <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                <NavLink to="/service" activeStyle={activeStyle}>Services</NavLink>
                <NavLink to="/about" activeStyle={activeStyle}>About Us</NavLink>
                <NavLink to="/contact" activeStyle={activeStyle}>Contact Us</NavLink>
            </div>
        </nav>
    );
};

export default Header;