import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Appointment03.css';

function Appointment03() {
  return (
    <Container fluid className="appointment-container">
      <Row className="justify-content-center align-items-center appointment-header">
        <Col>
          <h1 className="text-center"><b>Appointment Confirm</b></h1>
        </Col>
      </Row>

      <div className="appointment-contact-section">
        <Row>
          <Col xs={12} md={6}>
            <h5>Contact US</h5>
            <p>Address line</p>
            <p>Phone no</p>
            <p>Email Address</p>
            <p className="social-icons">
              <i className="fab fa-facebook-square"></i> 
              <i className="fab fa-whatsapp-square"></i>
              <i className="fab fa-youtube-square"></i> 
              <i className="fab fa-instagram"></i>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Leave a comment</h5>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button style={{ background: 'black', color: 'white', width: '100px' }}>Send Message</Button>
                <Button style={{ background: 'black', color: 'white', width: '100px' }}>Reviews</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Appointment03;
