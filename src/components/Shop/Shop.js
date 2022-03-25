import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <section className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row g-3">
                            {
                                products.map(product => <Product key={product.id} productData={product}></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-section">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;