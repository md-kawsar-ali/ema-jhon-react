import React, { useState, useEffect } from 'react';
import './Products.css';
import Product from './../Product/Product';

const Products = (props) => {
    const { products, addToCart } = props;

    const [displayProduct, setDisplayProduct] = useState([]);
    const [count, setCount] = useState(6);

    useEffect(() => {
        setDisplayProduct(products.slice(0, count));
    }, [products, count])

    // Load More Function
    const loadMore = () => {
        const newCount = count + 6;
        if (newCount < products.length) {
            setCount(newCount);
        } else {
            setCount(products.length);
        }
        setDisplayProduct(products.slice(0, count));
    }

    return (
        <div className='text-center'>
            <div className="products">
                {
                    displayProduct.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>

            {
                products.length > count && < button className='load-more' onClick={loadMore}>Load More</button>
            }
        </div>
    );
};

export default Products;