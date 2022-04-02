import React from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
    const { img, name, price, ratings, seller } = product;

    return (
        <div className="product">
            <img src={img} alt={name} />
            <div className="product-info">
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings} start</p>
                <p>Seller: {seller}</p>
            </div>
            <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;