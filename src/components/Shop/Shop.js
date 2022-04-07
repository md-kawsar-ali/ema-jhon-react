import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import useProducts from './../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import useCart from './../../hooks/useCart';
import { useNavigate } from 'react-router-dom';


const Shop = () => {
    // Fetch Products Data and Display
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    // Clear Cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('shopping-cart');
    }

    const goTo = useNavigate();

    return (
        <div className="shop">
            <div className="wrapper">
                <Products products={products} addToCart={addToCart}></Products>
                <Cart cart={cart}>
                    <button onClick={clearCart} className="clear-cart">Clear Cart</button>
                    <button onClick={() => goTo('/cart')} className="review-order">Review Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;