import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeLoginForm = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
        return null;
    }

    return (
        <div className='login-wrapper'>
            <form onSubmit={hanldeLoginForm} className='login-form'>
                <h3>Login</h3>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="login" placeholder='Email Address' autoComplete='username' required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" placeholder='Password' autoComplete='current-password' required />
                <input type="submit" value={loading ? 'loading...' : 'Login'} />
                {error && <p className="error-msg">{error.message}</p>}
                <p>Don't have any account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;