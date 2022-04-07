import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ReviewOrders from './components/ReviewOrders/ReviewOrders';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import app from './firebase-init';

const auth = getAuth(app);

function App() {
  const [loginInfo, setLoginInfo] = useState({});

  useEffect(() => {
    const savedLogin = localStorage.getItem('login');
    if (savedLogin) {
      setLoginInfo(JSON.parse(savedLogin));
    }
  }, []);

  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setLoginInfo(user);
        localStorage.setItem('login', JSON.stringify(user))
      })
    // .catch((error) => {
    //   console.log('Error:', error)
    // });
  }

  const LogOutHandle = () => {
    signOut(auth).then(() => {
      setLoginInfo({});
      localStorage.removeItem('login');
    }).catch((error) => {
      console.error(error);
    });
  }

  const githubProvider = new GithubAuthProvider();

  const loginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setLoginInfo(user);
        localStorage.setItem('login', JSON.stringify(user))
      })
    // .catch((error) => {
    //   console.log('Error:', error)
    // });
  }

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/cart' element={<ReviewOrders></ReviewOrders>}></Route>
        <Route path='/login' element={<Login
          loginWithGoogle={loginWithGoogle}
          loginWithGithub={loginWithGithub}
          loginInfo={loginInfo}
          LogOutHandle={LogOutHandle}></Login>}></Route>
        <Route path='*' element={<h1 style={{ textAlign: 'center', padding: '220px 0' }}>Not Found!</h1>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
