import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ReviewOrders from './components/ReviewOrders/ReviewOrders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/review-orders' element={<ReviewOrders></ReviewOrders>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
