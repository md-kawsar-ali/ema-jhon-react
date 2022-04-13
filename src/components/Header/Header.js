import React, { useState } from 'react';
import './Header.css';
import logo from './../../images/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

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
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li>
                        {
                            user
                                ?
                                <button className='login-btn' onClick={logout}>Log Out</button>
                                :
                                <button className='login-btn' onClick={() => navigate('/login')}>Login</button>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;