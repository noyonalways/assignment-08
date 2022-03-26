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
                            <Accordion.Header><p className='m-0 fs-5'>How does React works?</p></Accordion.Header>
                            <Accordion.Body>
                                    <p className="text-muted">
                                    React is a free open source front-end JavaScript library for building user interfaces based on UI components. Components are independent, reusable code bits. They serve the same purpose as JavaScript functions, but work alone and return HTML. There are two types of components: class components and function components. React works with declarative code. To show the meaning of declarative code. React offers some great features that make it the most widely used library in front-end app development. JSX is a syntactic JavaScript  extension. This is a term used in React to describe what the user interface looks like. We can use JSX to write the HTML structure in the same file as our JavaScript code.
                                    </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='title'><p className='m-0 fs-5'>Props vs State difference</p></Accordion.Header>
                            <Accordion.Body>
                                <p className="text-muted">
                                Props and  State are both plain JavaScript objects. Props stand for Properties. 
                                Props are read-only. that's why it's called immutable, props can not be modified. Props can be pass child components, but It has better performance. 
                                <br/>
                                <br/>
                                The state can be changed by the parent component, the state can change inside the component.  that's why it's called mutable. The state may hold information that influences the output of a components
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>       
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><p className='m-0 fs-5'>How useState works?</p></Accordion.Header>
                            <Accordion.Body>
                                <p className="text-muted">
                                Hooks are the new feature introduced in React. If we write a function component, and then we want to add some state to it, previously we do this by converting it to a class. But, now we can do it by using a Hook inside the existing function component. we create a functional component and throw some React hook at it that tracks state, can also update it, and it just works. useState is a Hook (function) that allows us to have state variables in functional components.
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