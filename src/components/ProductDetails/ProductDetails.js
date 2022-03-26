import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ProductDetails.css"
const ProductDetails = ({product}) => {
    const { name, brandName, price, description, img } = product;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className='btn-2' onClick={handleShow}>Details</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton className='pb-0 border-0'>
                    {/* <Modal.Title>{title}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-7 mx-auto col-md-6 col-lg-4 mb-3 mb-md-0 p-3">
                            <img className='w-100' src={img} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-8">
                            <h3 className='mb-0'>{name}</h3>
                            <small className='text-muted'>By {brandName}</small>
                            <h4 className="h4 mb-0">Price: ${price}</h4>
                            <p className="mt-2">{description}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProductDetails;