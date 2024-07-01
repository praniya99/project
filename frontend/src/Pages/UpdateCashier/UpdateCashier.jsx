import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; // Make sure to import Form
import Row from 'react-bootstrap/Row';
import './updatecashier.css';

export default function UpdateCashier() {
  const { id } = useParams(); // Get the cashier ID from the URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    gender: '',
    mobileno: '',
    email: '',
    address: '',
    educationQualifications: '',
    experience: '',
    additionalDetails: ''
  });

  useEffect(() => {
    // Fetch cashier data by ID when component mounts
    axios.get(`http://localhost:3000/cashier/${id}`)
      .then(response => {
        setFormData(response.data.cashier);
      })
      .catch(error => {
        console.error('Error fetching cashier data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      axios.put(`http://localhost:3000/cashier/${id}`, formData)
        .then(response => {
          console.log('Success:', response.data);
          // Handle success - maybe clear the form or show a success message
          navigate('/Admin01Cashier'); // Redirect to the cashiers list page
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error - show error message
        });
    }

    setValidated(true);
  };

  return (
    <div className="fulform">
      <div className="form">
        <p className="topic">Update Cashier Information</p>

        <div className="formcont">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Label>Name :</Form.Label>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Date of birth :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="DD/MM/YYYY"
                  required
                  name="dateofbirth"
                  value={formData.dateofbirth}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid birthday.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Gender :</Form.Label>

                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      id="genderMale"
                      required
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      id="genderFemale"
                      required
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>

                <Form.Control.Feedback type="invalid">
                  Please select a gender.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Mobile No :</Form.Label>

                <Form.Control
                  required
                  type="text"
                  placeholder="07X XXXX XXX"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustomEmail">
                <Form.Label>E-mail :</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom01">
                <Form.Label>Address :</Form.Label>

                <Form.Control
                  required
                  type="text"
                  placeholder="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom01">
                <Form.Label>Education Qualifications :</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="educationQualifications"
                  value={formData.educationQualifications}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom01">
                <Form.Label>How experienced are you ?</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={2}
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-5">
              <Form.Group as={Col} md="8" controlId="validationCustom01">
                <Form.Label>Additional Details :</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button className="btnupdate" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
