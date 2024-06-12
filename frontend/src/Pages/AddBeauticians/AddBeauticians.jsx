import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddBeauticians.css";

function App() {
  const [beauticians, setBeauticians] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
    email: "",
    address: "",
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/beauticians")
      .then((response) => setBeauticians(response.data.beauticians))
      .catch((error) => console.error(error));
  }, []);

  const isAgeValid = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age >= 18 && age <= 100;
  };

  const isPhoneNumberValid = (number) => /^\d{10}$/.test(number);
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isNameValid = (name) => /^[a-zA-Z]+$/.test(name);
  const isDobValid = (dob) => dob && isAgeValid(dob);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (
      form.checkValidity() === false ||
      !isDobValid(formData.dateofbirth) ||
      !isPhoneNumberValid(formData.mobileno) ||
      !isEmailValid(formData.email) ||
      !isNameValid(formData.firstname) ||
      !isNameValid(formData.lastname)
    ) {
      e.stopPropagation();
      setValidated(true);
    } else {
      try {
        const response = await axios.post("http://localhost:3001/beauticians", formData);
        setBeauticians([...beauticians, response.data.beautician]);
        setFormData({
          firstname: "",
          lastname: "",
          dateofbirth: "",
          gender: "",
          mobileno: "",
          email: "",
          address: "",
        });
        setValidated(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="heading7">Registration Form for Beauticians</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="First name"
                value={formData.firstname}
                onChange={handleChange}
                required
                isInvalid={!isNameValid(formData.firstname)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid first name (only letters).
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                placeholder="Last name"
                value={formData.lastname}
                onChange={handleChange}
                required
                isInvalid={!isNameValid(formData.lastname)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid last name (only letters).
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                required
                isInvalid={!isDobValid(formData.dateofbirth)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid date of birth (18-100 years old).
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  name="gender"
                  label="Male"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  name="gender"
                  label="Female"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  required
                />
              </div>
              <Form.Control.Feedback type="invalid">
                Please select a gender.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMobileNo">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            name="mobileno"
            placeholder="07X XXXX XXX"
            value={formData.mobileno}
            onChange={handleChange}
            required
            isInvalid={!isPhoneNumberValid(formData.mobileno)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid mobile number (10 digits).
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            isInvalid={!isEmailValid(formData.email)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label className="form-label">Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your address.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit" className="btn-register">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
