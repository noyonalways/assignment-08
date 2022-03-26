import React from 'react';
import AddedProduct from '../AddedProduct/AddedProduct';
import "./Cart.css";

const Cart = ({ cartData }) => {
    
    return (
        <div className="cart-section">
            <h5 className='text-center mb-0 pb-2'>Selected items</h5>
            {
                cartData.map(product => <AddedProduct
                    product={product}
                    key={product.id}
                ></AddedProduct>)
            }
        </div>
    );
};

export default Cart;