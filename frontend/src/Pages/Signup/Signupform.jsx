import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import bgimg2 from '../assets/img/bgimg2.jpg';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const isAgeValid = (age) => age >= 18 && age <= 100;
  const isPhoneNumberValid = (number) => /^\d{10}$/.test(number);
  const isPasswordValid = (password) => password.length >= 8;
  const isNameValid = (name) => /^[a-zA-Z]*$/.test(name);

  const handleFirstNameChange = (e) => {
    if (isNameValid(e.target.value)) {
      setFirstName(e.target.value);
    }
  };

  const handleLastNameChange = (e) => {
    if (isNameValid(e.target.value)) {
      setLastName(e.target.value);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      backgroundImage: `url(${bgimg2})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-4 bg-white rounded" style={{ 
              maxWidth: '400px', 
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)' 
            }}>
              <h1 className="text-center mb-4">Signup</h1>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please enter your first name(only letters).</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please enter your last name(only letters).</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Control
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  isInvalid={!isAgeValid(age)}
                />
                <Form.Control.Feedback type="invalid">Please enter a valid age (18-100).</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  isInvalid={!isPhoneNumberValid(phoneNumber)}
                />
                <Form.Control.Feedback type="invalid">Please enter a valid phone number (10 digits).</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  isInvalid={!isPasswordValid(password)}
                />
                <Form.Control.Feedback type="invalid">Please enter a password (minimum 8 characters).</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3" style={{backgroundColor:'pink',borderColor:'pink',color:'black'}}>
                Signup
              </Button>

              <p className="text-center mb-0">Already have an account? <a href="/login">Log in here</a>.</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupForm;
