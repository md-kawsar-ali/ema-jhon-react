import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    // Fetch Products Data and Display
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Cart Operation
    const [cart, setCart] = useState({});

    const addToCart = (id) => {
        const currentCart = cart;
        if (id in currentCart) {
            currentCart[id] = currentCart[id] + 1;
            const product = products.find(item => item.id === id);
            product.quantity = product.quantity + 1;
        } else {
            currentCart[id] = 1;
            const product = products.find(item => item.id === id);
            product.quantity = 1;
        }

        setCart(currentCart);
        getTotalAdded();
        getPrice();
        getShipping();
        taxCalculation();
        getGrandTotal();
    }

    // Selected Items
    const [selected, setSelected] = useState(0);

    const getTotalAdded = () => {
        let total = 0;
        for (const item in cart) {
            total = total + cart[item];
        }
        setSelected(total);
    }

    // Total Price
    const [price, setPrice] = useState(0);

    const getPrice = () => {
        const addedProduct = products.filter(item => item.id in cart);

        let total = 0;
        for (const item of addedProduct) {
            total = total + (item.price * item.quantity);
        }
        setPrice(total);
    }

    // Shipping Cost
    const [shipping, setShipping] = useState(0);

    const getShipping = () => {
        const addedProduct = products.filter(item => item.id in cart);

        let total = 0;
        for (const item of addedProduct) {
            total = total + (item.shipping * item.quantity);
        }

        setShipping(total);
    }

    // Tax Calculation
    const [tax, setTax] = useState(0);

    const taxCalculation = () => {
        const total = (price + shipping) * 0.15;
        const taxInt = parseFloat(total.toFixed(2));
        setTax(taxInt);
    }

    useEffect(taxCalculation, [price, shipping]);

    // Grand Total
    const [grandTotal, setGrandTotal] = useState(0);

    const getGrandTotal = () => {
        const total = parseFloat((price + shipping + tax).toFixed(2));
        setGrandTotal(total);
    }

    useEffect(getGrandTotal, [price, shipping, tax]);

    return (
        <div className="shop">
            <div className="wrapper">
                <Products products={products} addToCart={addToCart}></Products>
                <Cart items={selected} price={price} shipping={shipping} tax={tax} grandTotal={grandTotal}></Cart>
            </div>
        </div>
    );
};

export default Shop;