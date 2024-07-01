import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/beauticians")
      .then((response) => setBeauticians(response.data.beauticians))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let errorMessage = "";

    if (name === "firstname" || name === "lastname") {
      const regex = /^[A-Za-z\s]*$/; // Allow only letters and spaces
      if (!regex.test(value)) {
        errorMessage = "Only letters are allowed";
      }
    }

    if (name === "mobileno") {
      const regex = /^[0-9]{0,10}$/; // Allows only numbers and up to 10 digits
      if (!regex.test(value)) {
        errorMessage = "Only 10 digits allowed";
      } else if (value.length > 10) {
        errorMessage = "Mobile number cannot exceed 10 digits";
      } else {
        errorMessage = ""; // Clear the error if the value is within limits
      }
    }

    if (name === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        errorMessage = "Invalid email format";
      }
    }

    setFormData({ ...formData, [name]: value });
    if (errorMessage) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    // Block numeric keys in firstname and lastname
    if ((e.target.name === "firstname" || e.target.name === "lastname") && key >= '0' && key <= '9') {
      e.preventDefault();
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: "Only letters are allowed",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfilePhoto(file);
    } else {
      window.alert("Please upload a valid image file (JPEG, PNG, etc.)");
      setProfilePhoto(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (Object.values(errors).some(error => error)) {
      window.alert("Please fix the errors before submitting.");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("profilePhoto", profilePhoto);
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    // Log the formData to see what is being sent
    for (const pair of formDataToSubmit.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
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
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Clear success message after 3 seconds
      window.alert("Beautician added successfully!"); // Show pop-up alert
    } catch (error) {
      console.error("There was an error!", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <AddBeautician />
      {showSuccess && <Alert variant="success">Beautician added successfully!</Alert>} {/* Render success alert */}

      <Form onSubmit={handleSubmit} className="form">
        <Form.Group controlId="formProfilePhoto">
          <Form.Label>Profile Photo</Form.Label>
          <Form.Control
            type="file"
            name="profilePhoto"
            accept="image/*"
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
                <option>Mr</option>
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
                onKeyPress={handleKeyPress}
                required
              />
              {errors.firstname && <Alert variant="danger">{errors.firstname}</Alert>}
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
                onKeyPress={handleKeyPress}
                required
              />
              {errors.lastname && <Alert variant="danger">{errors.lastname}</Alert>}
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
            onInput={(e) => {
              const { value } = e.target;
              if (value.length > 10) {
                e.target.value = value.slice(0, 10); // Limit input length to 10
              }
            }}
            maxLength={10}
            required
          />
          {errors.mobileno && <Alert variant="danger">{errors.mobileno}</Alert>}
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
          {errors.email && <Alert variant="danger">{errors.email}</Alert>}
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
