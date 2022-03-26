import React, { useState } from 'react';
import AddedProduct from '../AddedProduct/AddedProduct';
import FinalProduct from '../FinalProduct/FinalProduct';
import "./Cart.css";

const Cart = ({ cartData, chooseAgain }) => {

    const [randomProducts, setRandomProducts] = useState([]);

    const randomChoose = (productArray) => {
        const randomOne = productArray[Math.floor(Math.random() * productArray.length)];
        setRandomProducts(randomOne);
    }
    // console.log(randomProducts)
     
    return (
        <div className="cart-parent">
            <div className="cart-section">
                <h5 className='text-center mb-0 pb-2'>Selected items</h5>
                {
                    cartData.map(product => <AddedProduct
                        product={product}
                        key={product.id}
                    ></AddedProduct>)
                }
                <div className="d-flex justify-content-around mt-3">
                    <button onClick={()=> randomChoose(cartData)} className='btn-1'>Random one</button>
                    <button onClick={chooseAgain} className='btn-2'>Choose again</button>
                </div>
                
            </div>
            {
                <FinalProduct
                    product={randomProducts}
                >
                </FinalProduct>
            }
        </div>
    );
};

export default Cart;