import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

function deliverynavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ marginRight:'600px'}} as={Link} to="/">K u m u d i k a</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ marginRight:'50px'}}  as={Link} to="http://localhost:3000/Dashboard">Home</Nav.Link>
          <Nav.Link style={{ marginRight:'50px'}}  as={Link} to="/schedule">Schedule</Nav.Link>
          <Nav.Link style={{ marginRight:'50px'}}     as={Link} to="/salary">Salary</Nav.Link>
        </Nav>
        <Form inline className="d-flex mr-3"  >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success"><FaSearch /></Button>
        </Form>
        <Nav >
          <Nav.Link      as={Link} to="http://localhost:3000/Notifications"><FaBell /></Nav.Link>
          <NavDropdown  alignRight title={<FaUser />} id="basic-nav-dropdown">
            <NavDropdown.Item  style={{textAlign:'center'}} as={Link} to="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item  style={{textAlign:'center'}} as={Link} to="/history">History</NavDropdown.Item>
            <NavDropdown.Item  style={{textAlign:'center'}} as={Link} to="/leave">Leave</NavDropdown.Item>
            <NavDropdown.Item  style={{textAlign:'center'}} as={Link} to="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>




        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
