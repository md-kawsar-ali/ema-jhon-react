import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ReviewOrders from './components/ReviewOrders/ReviewOrders';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/cart' element={<ReviewOrders></ReviewOrders>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<h1 style={{ textAlign: 'center', padding: '220px 0' }}>Not Found!</h1>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
