import React, { useState } from 'react';
import { Form as BootstrapForm, Button, Container, Row, Col } from 'react-bootstrap';
import subheaderD from '../../components/subheaderD/Deliveryagents'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || !isDobValid(dob)) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const isAgeValid = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age >= 18 && age <= 100;
  };

  const isPhoneNumberValid = (number) => /^\d{10}$/.test(number);
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isNameValid = (name) => /^[a-zA-Z]*$/.test(name);
  const isDobValid = (dob) => dob && isAgeValid(dob);

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
      setMobile(value);
    }
  };

  return (
    <div>
        <Deliveryagents/>
      <Container className="my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ textAlign: 'center' }}>Registration Form for Delivery Agents</h1>
        <BootstrapForm noValidate validated={validated} onSubmit={handleSubmit} style={{
           height: '100vh',
           width: '100vh',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundColor: 'rgba(204, 205, 206)',
           padding: '25px',
           margin: 'Auto'
        }}>
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <BootstrapForm.Group controlId="formFirstName">
                <BootstrapForm.Label>First Name</BootstrapForm.Label>
                <BootstrapForm.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
                <BootstrapForm.Control.Feedback type="invalid">Please enter a valid first name (only letters).</BootstrapForm.Control.Feedback>
              </BootstrapForm.Group>
            </Col>
            <Col xs={12} md={6}>
              <BootstrapForm.Group controlId="formLastName">
                <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                <BootstrapForm.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
                <BootstrapForm.Control.Feedback type="invalid">Please enter a valid last name (only letters).</BootstrapForm.Control.Feedback>
              </BootstrapForm.Group>
            </Col>
          </Row>
          <BootstrapForm.Group controlId="formDob" className="mb-3">
            <BootstrapForm.Label>Date of Birth</BootstrapForm.Label>
            <BootstrapForm.Control
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              isInvalid={!isDobValid(dob)}
            />
            <BootstrapForm.Control.Feedback type="invalid">Please enter a valid date of birth (18-100 years old).</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>
          <BootstrapForm.Group controlId="formGender" className="mb-3">
            <BootstrapForm.Label>Gender</BootstrapForm.Label>
            <div>
              <BootstrapForm.Check inline type="radio" label="Male" name="gender" id="genderMale" value="Male" onChange={(e) => setGender(e.target.value)} required />
              <BootstrapForm.Check inline type="radio" label="Female" name="gender" id="genderFemale" value="Female" onChange={(e) => setGender(e.target.value)} required />
              <BootstrapForm.Check inline type="radio" label="Other" name="gender" id="genderOther" value="Other" onChange={(e) => setGender(e.target.value)} required />
            </div>
          </BootstrapForm.Group>
          <BootstrapForm.Group controlId="formMobile" className="mb-3">
            <BootstrapForm.Label>Mobile Number</BootstrapForm.Label>
            <BootstrapForm.Control
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={handlePhoneNumberChange}
              required
              isInvalid={!isPhoneNumberValid(mobile)}
            />
            <BootstrapForm.Control.Feedback type="invalid">Please enter a valid mobile number (10 digits).</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>
          <BootstrapForm.Group controlId="formEmail" className="mb-3">
            <BootstrapForm.Label>Email</BootstrapForm.Label>
            <BootstrapForm.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              isInvalid={!isEmailValid(email)}
            />
            <BootstrapForm.Control.Feedback type="invalid">Please enter a valid email.</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>
          <BootstrapForm.Group controlId="formAddress" className="mb-3">
            <BootstrapForm.Label>Address</BootstrapForm.Label>
            <BootstrapForm.Control as="textarea" rows={3} placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <BootstrapForm.Control.Feedback type="invalid">Please enter your address.</BootstrapForm.Control.Feedback>
          </BootstrapForm.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" style={{backgroundColor:'pink',borderColor:'pink'}}>
              Register
            </Button>
          </div>
        </BootstrapForm>
      </Container>
    </div>
  );
};

export default RegistrationForm;
