import React from 'react';
import './Products.css';
import Product from './../Product/Product';

const Products = (props) => {
    const { products, addToCart } = props;
    return (
        <div className="products">
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

export default Products;