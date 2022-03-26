import React from 'react';
import "./AddedProduct.css";

const AddedProduct = ({ product }) => {
    const { img, name, price } = product;

    const shortName = name.slice(0, 15) + '..';
    return (
        <div className='d-flex align-items-center mb-3'>
            <img className='product-img' src={img} alt="" />
            <p className='m-0 me-3'>{shortName}</p>
            <p className="m-0">${price}</p>
            <button></button>
        </div>
    );
};

export default AddedProduct;