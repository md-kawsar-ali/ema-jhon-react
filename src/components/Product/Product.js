import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, img, name, price, ratings, seller } = props.product;
    const { addToCart } = props;

    return (
        <div className="product">
            <img src={img} alt={name} />
            <div className="product-info">
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings} start</p>
                <p>Seller: {seller}</p>
            </div>
            <button className="add-btn" onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Product;