import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Hader.css'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/home" className='fs-4'>Online Ide  </Navbar.Brand>
                <Nav className="ms-auto">
                    <Link to='/home' className='text-white fw-bold'>Home</Link>
                    <Link to='/ide' className='text-white fw-bold'>IDE</Link>
                    <Link to='/reviews' className='text-white fw-bold'>Reviews</Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;