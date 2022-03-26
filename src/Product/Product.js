import React from 'react';
import "./Product.css"

const Product = ({ productData, addToCart }) => {
    const { name, img, price } = productData;
    let shortName;
    if (name.length >= 25) {
        shortName = name.slice(0, 25) +"...";
    } else {
        shortName = name;
    }


    return (
        <div className='col-md-12 col-lg-4'>
            <div className="product">
                <div className="product-image">
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className="product-details">
                    <h5 className='mb-2'>{shortName}</h5>
                    <p className="text-muted price mb-2">Price: ${price}</p>
                    <div className="d-flex justify-content-between">
                        <button onClick={() => addToCart(productData)} className='btn-1'>Add to cart</button>
                        <button className='btn-2'>See Details</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;