import React from 'react';
import './Cart.css';

const Cart = ({ cart, children }) => {

    // Total Items
    let totalItem = 0;
    cart?.map(item => totalItem += item.quantity);

    // Total Price
    let totalPrice = 0;
    cart?.map(item => totalPrice = totalPrice + (item.price * item.quantity));

    // Shipping Cost
    let shippingCost = 0;
    cart?.map(item => shippingCost = shippingCost + (item.shipping * item.quantity));

    // Tax
    const subTotal = totalPrice + shippingCost;
    const tax = parseFloat((subTotal * 0.15).toFixed(2));

    // Grand Total
    const grandTotal = subTotal + tax;

    return (
        <div className="cart">
            <div className="cart-wrapper">
                <h2>Order Summary</h2>
                <h4>Selected Items: {totalItem}</h4>
                <h4>Total Price: ${totalPrice}</h4>
                <h4>Shipping Cost: ${shippingCost}</h4>
                <h4>Tax: ${tax}</h4>
                <hr />
                <h3>Grand Total: ${grandTotal ? grandTotal : '00.00'}</h3>
                {children}
            </div>
        </div>
    );
};

export default Cart;