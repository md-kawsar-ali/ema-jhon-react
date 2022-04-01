import React from 'react';
import './Header.css';
import logo from './../../images/Logo.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <a href="/home">
                    <img src={logo} alt="" />
                </a>

                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;