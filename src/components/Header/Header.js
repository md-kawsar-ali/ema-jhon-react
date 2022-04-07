import React, { useState } from 'react';
import './Header.css';
import logo from './../../images/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

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
                    <li><Link to="/cart">Cart</Link></li>
                    <li><button className='login-btn' onClick={() => navigate('/login')}>Login</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;