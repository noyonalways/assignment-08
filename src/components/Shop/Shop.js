import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    const addToCart = (selectedProduct) => {
        const newCart = [...cart, selectedProduct];
        setCart(newCart);
    }

    return (
        <section className="shop mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-8">
                        <div className="row g-3">
                            {
                                products.map(product => <Product
                                    key={product.id}
                                    addToCart={addToCart}
                                    productData={product}
                                ></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Cart cartData={cart}></Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;