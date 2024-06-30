import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./regform.css";

export default function Regform() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
    email: "",
    address: "",
    educationQualifications: "",
    experience: "",
    additionalDetails: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/cashier",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error("There was an error registering the cashier!", error);
      }
    }

    setValidated(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="fulform">
      <div className="form">
        <p className="topic">Registration Form for Cashier Assistant</p>

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
                  name="dateofbirth"
                  value={formData.dateofbirth}
                  onChange={handleChange}
                  required
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
                      value="Male"
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      required
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
                  type="text"
                  placeholder=" "
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
                  type="text"
                  placeholder=" "
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
                
                  type="text"
                  placeholder=" "
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button className="btnreg" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
