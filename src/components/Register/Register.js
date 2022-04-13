import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase-init';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);

    useEffect(() => {
        if (user) {
            updateProfile({ displayName: name })
                .then(() => navigate('/', { replace: true }))
        }
    }, [user, navigate, name, updateProfile]);

    const handleName = (e) => {
        if (e.target.value.length < 3) {
            setNameErr('Please, Enter Your Name!');
        } else {
            setName(e.target.value);
            setNameErr('');
        }
    }

    const handleEmail = (e) => {
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            setEmailErr('Please, Enter Valid Email Address!');
        } else {
            setEmail(e.target.value);
            setEmailErr('');
        }
    }

    const handlePassword = (e) => {
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(e.target.value)) {
            setPasswordErr('Password must have lowercase, uppercase, digit, special character and 8 character long!');
        } else {
            setPassword(e.target.value);
            setPasswordErr('');
        }
    }

    const hanldeRegisterForm = (e) => {
        e.preventDefault();

        if (!name || !email || !password) return;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-wrapper'>
            <form onSubmit={hanldeRegisterForm} style={{ gap: '8px' }} className='login-form'>
                <h3>Register</h3>
                <input type="text" onBlur={handleName} placeholder='Your Name' required />
                <p className='error-msg'>{nameErr && nameErr}</p>

                <input type="email" onBlur={handleEmail} placeholder='Email Address' autoComplete='username' required />
                <p className='error-msg'>{emailErr && emailErr}</p>

                <input type="password" onBlur={handlePassword} placeholder='Password' autoComplete='current-password' required />
                <p className='error-msg'>{passwordErr && passwordErr}</p>

                <input type="submit" value={loading ? 'Loading...' : 'Register'} />
                {error && <p className="error-msg">{error.message}</p>}

                <p>Have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;