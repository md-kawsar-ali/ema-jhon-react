import React, { useState } from 'react';
import './Header.css';
import logo from './../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/">
                    <img src={logo} alt='Ema Jhon' />
                </Link>

                <button onClick={() => setOpen(!open)} className='toggle'>{open ? 'Close' : 'Menu'}</button>

                <ul style={open ? { transform: 'scaleY(1)' } : {}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div >
    );
};

export default Header;