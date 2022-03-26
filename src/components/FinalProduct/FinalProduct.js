import React from 'react';
import "./FinalProduct.css";

const FinalProduct = ({ product }) => {
    

    const { img, name, price } = product;
    console.log(img)

    return (
        <div className='mt-4 fn-product'>
            <h5 className='text-center '>Your Final chooise</h5>
            <div className='d-flex align-items-center py-2 justify-content-between '>
                <img className='fn-product-img' src={img} alt="" />
                <p className='m-0'>{name? name.slice(0,15) + "..." : ""}</p>
                <p className='m-0'>{price ? "$" + price : ""}</p>
            </div>
        </div>

    );
};

export default FinalProduct;