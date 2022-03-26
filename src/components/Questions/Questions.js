import React from 'react';
import { Accordion } from 'react-bootstrap';
import "./Questions.css";

const Questions = () => {
    return (
        <div className='question-section my-5'>
            <div className="container">
                <div className="row px-2 px-md-0">
                    <div className="col-md-8 order-md-first order-last">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><p className='m-0 fs-5'>How React works?</p></Accordion.Header>
                            <Accordion.Body>
                                    <p className="text-muted">
                                    React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                                    </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='title'><p className='m-0 fs-5'>Props vs State difference</p></Accordion.Header>
                            <Accordion.Body>
                                <p className="text-muted">
                                    React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><p className='m-0 fs-5'>How useState works?</p></Accordion.Header>
                            <Accordion.Body>
                                <p className="text-muted">
                                    React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </div>
                    <div className="col-md-4">
                        <img src="https://t3.ftcdn.net/jpg/04/04/07/38/360_F_404073813_slryEnskuItVKcpObQwsgUFtCqn5CFsu.jpg" alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;