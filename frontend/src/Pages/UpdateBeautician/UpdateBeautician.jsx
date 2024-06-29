import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeauticianUpdate from "../../Components/BeauticianUpdate/BeauticianUpdate"
import "./UpdateBeautician.css";

function UpdateBeautician() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [beautician, setBeautician] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputErrors, setInputErrors] = useState({
    firstname: "",
    lastname: "",
    mobileno: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/beauticians/${id}`)
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data && response.data.beauticians) {
          setBeautician(response.data.beauticians);
        } else {
          setError("Invalid data structure");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching beautician data:", error);
        setError(error.message || "Unknown error");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "firstname" || name === "lastname") && /[^a-zA-Z]/.test(value)) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} can only contain letters.`,
      }));
    } else if (name === "mobileno") {
      if (/[^0-9]/.test(value)) {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Mobile number can only contain digits.",
        }));
      } else if (value.length > 9) {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Mobile number can only be up to 9 digits long.",
        }));
      } else {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    } else if (name === "email") {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Invalid email format.",
        }));
      } else {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    } else {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }

    setBeautician((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/beauticians/${id}`, beautician)
      .then(() => {
        navigate("/list");
      })
      .catch((error) => console.error("Error updating beautician:", error));
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <p>Unable to fetch beautician data: {error}</p>
      </Container>
    );
  }

  return (
  
   
     
    
   <div>
    <BeauticianUpdate/>
   


      <Form onSubmit={handleSubmit} className="Form1">
        <Form.Group controlId="firstname">
          <Form.Label className="Form-label1">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={beautician.firstname}
            onChange={handleChange}
          />
          {inputErrors.firstname && (
            <Alert variant="danger" className="mt-2">
              {inputErrors.firstname}
            </Alert>
          )}
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={beautician.lastname}
            onChange={handleChange}
          />
          {inputErrors.lastname && (
            <Alert variant="danger" className="mt-2">
              {inputErrors.lastname}
            </Alert>
          )}
        </Form.Group>

        <Form.Group controlId="dateofbirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateofbirth"
            value={beautician.dateofbirth}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            name="gender"
            value={beautician.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="mobileno">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            name="mobileno"
            value={beautician.mobileno}
            onChange={handleChange}
          />
          {inputErrors.mobileno && (
            <Alert variant="danger" className="mt-2">
              {inputErrors.mobileno}
            </Alert>
          )}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={beautician.email}
            onChange={handleChange}
          />
          {inputErrors.email && (
            <Alert variant="danger" className="mt-2">
              {inputErrors.email}
            </Alert>
          )}
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={beautician.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-update">
          Update
        </Button>
      </Form>
      </div>
  
    
   
    
   
  );
}

export default UpdateBeautician;
