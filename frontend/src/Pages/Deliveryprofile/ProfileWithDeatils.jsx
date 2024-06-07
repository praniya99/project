
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button, ListGroup } from 'react-bootstrap';

const ProfileWithDetails = () => {
  
  return (
    <div>
      <subheaderD/>
      
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-75">
        <Col xs={12} md={4} lg={3} className="bg-light p-3">
          <div className="d-flex flex-column align-items-center">
            <Image src="https://via.placeholder.com/150" roundedCircle className="mb-3" style={{ width: '60%', height: '60%' }} />
            <ListGroup variant="flush" className="w-100">
              <ListGroup.Item className="text-center p-0 mb-2">
                <Button variant="primary" className="w-100" style={{ backgroundColor: 'pink', borderColor: 'pink' }}>Account</Button>
              </ListGroup.Item>
              <ListGroup.Item className="text-center p-0 mb-2">
                <Button variant="primary" className="w-100" style={{ backgroundColor: 'pink', borderColor: 'pink' }}>Leave</Button>
              </ListGroup.Item>
              <ListGroup.Item className="text-center p-0 mb-2">
                <Button variant="primary" className="w-100" style={{ backgroundColor: 'pink', borderColor: 'pink' }}>Salary</Button>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col xs={12} md={8} lg={9} className="bg-white p-4">
          <h1 style={{marginBottom:'25px'}}>Profile Details</h1>
          <p style={{marginBottom:'15px'}}><strong style={{marginRight:'65px'}}>Name:</strong> W. Nimal Kumara</p>
          <p style={{marginBottom:'15px'}}><strong style={{marginRight:'15px'}}>Date of birth:</strong> 21/03/1990</p>
          <p style={{marginBottom:'15px'}}><strong style={{marginRight:'55px'}}>Gender:</strong> Male</p>
          <p style={{marginBottom:'15px'}}><strong style={{marginRight:'34px'}}>Mobile No:</strong> 0785263419</p>
          <p style={{marginBottom:'15px'}}><strong style={{marginRight:'67px'}}>Email:</strong> nimal@gmail.com</p>
          <p style={{marginBottom:'15px'}}><strong style={{marginRight:'45px'}}>Address:</strong> 22/5, Nugegoda</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ProfileWithDetails;
