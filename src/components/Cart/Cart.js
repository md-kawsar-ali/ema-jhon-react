import React from 'react';
import './Cart.css';

const Cart = ({ items, price, shipping, tax, grandTotal }) => {

    return (
        <div className="cart">
            <div className="cart-wrapper">
                <h2>Order Summary</h2>
                <h4>Selected Items: {items}</h4>
                <h4>Total Price: ${price}</h4>
                <h4>Shipping Cost: ${shipping}</h4>
                <h4>Tax: ${tax}</h4>
                <hr />
                <h2>Grand Total: ${grandTotal}</h2>
            </div>
        </div>
    );
};

export default Cart;