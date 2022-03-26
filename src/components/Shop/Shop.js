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
        if (cart.length < 4) {
            const newCart = [...cart, selectedProduct];
            setCart(newCart);
        } else {
            alert("Yon can choose only 4 item at a time!!")
        }
    }

    const chooseAgain = () => {
        setCart([]);
    }

    return (
        <section className="shop mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-8 order-last order-md-first">
                        <div className="row g-3 px-3 px-md-0">
                            {
                                products.map(product => <Product
                                    key={product.id}
                                    addToCart={addToCart}
                                    productData={product}
                                ></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mb-md-0 px-4">
                        <Cart cartData={cart}
                              chooseAgain={chooseAgain}
                        ></Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;