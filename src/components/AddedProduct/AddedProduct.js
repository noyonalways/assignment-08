import React from 'react';
import "./AddedProduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const AddedProduct = ({ product, handleRamoveProduct }) => {
    const { img, name, price } = product;

    const shortName = name.slice(0, 15) + '..';
    return (
        <div className='d-flex align-items-center py-2 justify-content-between added-product'>
            <img className='product-img' src={img} alt="" />
            <p className='m-0'>{shortName}</p>
            <p className='m-0'>${price}</p>
            <button onClick={() => handleRamoveProduct(product)} className='delete-btn'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default AddedProduct;