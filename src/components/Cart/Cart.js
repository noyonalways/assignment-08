import React from 'react';
import AddedProduct from '../AddedProduct/AddedProduct';
import "./Cart.css";

const Cart = ({ cartData, chooseAgain }) => {
     
    return (
        <div className="cart-section">
            <h5 className='text-center mb-0 pb-2'>Selected items</h5>
            {
                cartData.map(product => <AddedProduct
                    product={product}
                    key={product.id}
                ></AddedProduct>)
            }
            <div className="d-flex justify-content-around mt-3">
                <button className='btn-1'>Choose 1 for me</button>
                <button onClick={chooseAgain} className='btn-2'>Choose again</button>
            </div>
        </div>
    );
};

export default Cart;