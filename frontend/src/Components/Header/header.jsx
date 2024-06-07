import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div className="navbarBack">
            <Navbar bg="light" expand="lg" className="px-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="img_chania.jpg" className="logo" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav>
                        <Nav.Link href="#" className="home">Home</Nav.Link>
                            <Nav.Link href="#" className="beu">Beauticians</Nav.Link>
                            <Nav.Link href="#" className="shop">Shop</Nav.Link>
                            <Nav.Link href="#" className="ser">Services</Nav.Link>
                            <Nav.Link href="#" className="btBook">Book Now</Nav.Link>
                            <Nav.Link href="#" className="icon1"><LocalMallIcon /></Nav.Link>
                            <Nav.Link href="#" className="icon2"><SearchIcon /></Nav.Link>
                            <Nav.Link href="#" className="icon3"><AccountCircleIcon /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
