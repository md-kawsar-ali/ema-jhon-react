import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import './ReviewOrders.css';
import { getStoredCart } from '../../utilities/fakedb';

const ReviewOrders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    // Clear Cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('shopping-cart');
    }

    const removeItem = (id) => {
        // Remove From Cart
        let newCart = [];
        const restProducts = cart?.filter(product => product.id !== id);
        newCart = [...restProducts];
        setCart(newCart);

        // Remove From Local Storage
        const savedCart = getStoredCart();
        delete savedCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(savedCart));
    }

    return (
        <div className='review-orders'>
            <div className="wrapper">
                <div className="cart-items">
                    {
                        cart.length ? cart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}></CartItem>) : <h2 className='empty'>Cart is Empty!</h2>

                    }

                    {cart.length ? <button className='clear-cart' onClick={clearCart}>Clear Cart</button> : ''}
                </div>
            </div>
        </div>
    );
};

const CartItem = ({ item, removeItem }) => {
    const { id, img, name, price, quantity } = item;

    return (
        <div className="cart-item">
            <img src={img} alt="" />
            <h4>{name} {quantity > 1 ? <span>({quantity} Pcs)</span> : ''}</h4>
            <strong>${parseFloat((price * quantity).toFixed(2))}</strong>
            <button className='remove-item' onClick={() => removeItem(id)}>&times;</button>
        </div>
    )
}

export default ReviewOrders;