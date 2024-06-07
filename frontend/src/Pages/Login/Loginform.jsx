import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import bgimg2 from '../assets/img/bgimg2.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing password
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false || !validateForm()) {
      event.stopPropagation();
    } else {
      // Perform the login action here
    }

    setValidated(true);
  };

  const validateForm = () => {
    let valid = true;

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!isValidPassword(password)) {
      setPasswordError('Password must be at least 8 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${bgimg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row className="justify-content-start">
          <Col xs={12} md={8} lg={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ 
              
              padding: '30px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '10vh',
            
            }}>
              <h1 className="text-center mb-4">Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  isInvalid={!!emailError}
                />
                <Form.Control.Feedback type="invalid">{emailError}Please enter a valid email.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    isInvalid={!!passwordError}
                  />
                  <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                  <Form.Control.Feedback type="invalid">{passwordError}Please enter a password (minimum 8 characters).</Form.Control.Feedback>
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Forgot password?" />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 mb-3" 
                style={{ 
                  backgroundColor: 'pink', 
                  borderColor: 'pink', 
                  color: 'black'
                }}>
                Log in
              </Button>

              <p className="text-center mb-0">Don't have an account? <a href="/signup">Sign up here</a>.</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
