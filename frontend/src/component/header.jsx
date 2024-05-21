import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header.css';

function Header() {
    return (
        <div className="navbarBack">
            <Navbar bg="light" expand="md">
                <Container fluid>
                    <Navbar.Brand href="#" className="navbarL">
                        <img src="img_chania.jpg" className="logo" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="home">Home</Nav.Link>
                            <Nav.Link href="#" className="beu">Beauticians</Nav.Link>
                            <Nav.Link href="#" className="shop">Shop</Nav.Link>
                            <Nav.Link href="#" className="ser">Services</Nav.Link>
                        </Nav>
                       
                        <Nav className="navbarR">
                            <Nav.Link href="#" className="icon1"><LocalMallIcon /></Nav.Link>
                            <Nav.Link href="#" className="icon2"><SearchIcon /></Nav.Link>
                            <Nav.Link href="#" className="icon3"><AccountCircleIcon /></Nav.Link>
                            <Nav.Link href="#" className="btBook">Book Now</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
