import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddBeauticians.css";
import AddBeautician from "../../Components/AddBeautician/AddBeautician";

function App() {
  const [beauticians, setBeauticians] = useState([]);
  const [formData, setFormData] = useState({
    title: "Mrs",
    firstname: "",
    lastname: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
    email: "",
    address: "",
  });
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/beauticians")
      .then((response) => setBeauticians(response.data.beauticians))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("profilePhoto", profilePhoto);
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:3000/beauticians", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setBeauticians([...beauticians, response.data.beautician]);
      setFormData({
        title: "Mrs",
        firstname: "",
        lastname: "",
        dateofbirth: "",
        gender: "",
        mobileno: "",
        email: "",
        address: "",
      });
      setProfilePhoto(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AddBeautician />
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="formProfilePhoto">
          <Form.Label>Profile Photo</Form.Label>
          <Form.Control
            type="file"
            name="profilePhoto"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="select"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              >
                <option>Mrs</option>
                <option>Miss</option>
              </Form.Control>
            </Form.Group>
          </Col>
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
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
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
              />
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
              />
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
          />
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
          />
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
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="submit" className="button-register">
            Register
          </Button>
        </div>
      </Form>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/Beauticianlist">
          <Button className="beautician-button-add">Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
