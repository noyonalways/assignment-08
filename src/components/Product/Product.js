import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductDetails from '../ProductDetails/ProductDetails';

  
const Product = ({ productData, addToCart }) => {
    const { name, img, price } = productData;
    let shortName;
    if (name.length >= 25) {
        shortName = name.slice(0, 25) +"...";
    } else {
        shortName = name;
    }


    return (
        <div className='col-md-12 col-lg-4' data-aos="fade-up">
            <div className="product">
                <div className="product-image">
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className="product-details">
                    <h5 className='mb-2'>{shortName}</h5>
                    <p className="text-muted price mb-2">Price: ${price}</p>
                    <div className="d-flex justify-content-between">
                        <button onClick={() => addToCart(productData)} className='btn-1'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
                        <ProductDetails product={productData}></ProductDetails>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;