import React from 'react';
import './Login.css';

const Login = ({ loginWithGoogle, loginWithGithub, loginInfo, LogOutHandle }) => {
    return (
        <div className='login-wrapper'>
            {
                loginInfo.uid ? <button onClick={LogOutHandle} className='login-btn'>Log Out</button> :
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button onClick={loginWithGoogle} className='login-btn'>Google Sign In</button>
                        <button onClick={loginWithGithub} className='login-btn'>Github Sign In</button>
                    </div>
            }

            {
                loginInfo.uid ? <Profile loginInfo={loginInfo}></Profile> : ''
            }
        </div >
    );
};

const Profile = ({ loginInfo }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <img src={loginInfo?.photoURL} height={200} width={200} alt="" />
            <h1>{loginInfo?.displayName}</h1>
            <h2>{loginInfo?.email}</h2>
        </div>
    )
}

export default Login;