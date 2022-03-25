import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <Navbar  expand="lg" variant="dark" fixed="top" className="custom-navbar py-3">
            <Container>
                <Navbar.Brand href="#home" className="fs-4 fw-bold">Watch Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-link-item" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link-item" href="#link">Collections</Nav.Link>
                        <Nav.Link className="nav-link-item" href="#link">About</Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;