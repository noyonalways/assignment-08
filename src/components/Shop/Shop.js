import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
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
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (cart.length < 4) {
            if (!exists) {
                const newCart = [...cart, selectedProduct];
                setCart(newCart);
            } else {
                alert("You can't choose duplicate.")
            }
        } else {
            alert("Yon can choose only 4 item at a time!!");
        }
    }

    const chooseAgain = () => {
        setCart([]);
    }

    const [randomProducts, setRandomProducts] = useState([]);
    const randomChoose = (productArray) => {
        if (productArray) {
            const randomOne = productArray[Math.floor(Math.random() * productArray.length)];
            setRandomProducts(randomOne);
            setCart([])
        }
    }
    // console.log(randomProducts)

    

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
                                    productData={product}></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4 mb-md-0 px-4">
                        <Cart cartData={cart}
                            randomChoose={randomChoose}
                            chooseAgain={chooseAgain}
                            randomProducts={randomProducts}
                        ></Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;