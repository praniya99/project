import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeauticianUpdate from "../../Components/BeauticianUpdate/BeauticianUpdate";
import "./UpdateBeautician.css";

function UpdateBeautician() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [beautician, setBeautician] = useState({
    title: "Mrs",
    firstname: "",
    lastname: "",
    dateofbirth: "",
    gender: "",
    mobileno: "",
    email: "",
    address: "",
    profilePhotoUrl: "" // Add profilePhotoUrl to store the URL of the current profile photo
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

    if ((name === "firstname" || name === "lastname") && /[^a-zA-Z\s]/.test(value)) {
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
      } else if (value.length > 10) {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Mobile number can only be up to 10 digits long.",
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setBeautician((prevState) => ({
        ...prevState,
        profilePhotoUrl: URL.createObjectURL(file), // Set the preview image URL
        profilePhotoFile: file // Set the actual file object to be uploaded
      }));
    } else {
      window.alert("Please upload a valid image file (JPEG, PNG, etc.)");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    if (beautician.profilePhotoFile instanceof File) {
      formDataToSubmit.append("profilePhoto", beautician.profilePhotoFile);
    }
    for (const key in beautician) {
      formDataToSubmit.append(key, beautician[key]);
    }

    axios
      .put(`http://localhost:3000/beauticians/${id}`, formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
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
      <BeauticianUpdate />
      <Form onSubmit={handleSubmit} className="Form1">
        <Form.Group controlId="formProfilePhoto">
          <Form.Label>Profile Photo</Form.Label>
          <div className="mb-3">
            {/* Display the current profile photo */}
            {beautician.profilePhotoUrl && (
              <img
                src={beautician.profilePhotoUrl}
                alt="Current profile"
                className="img-thumbnail"
                style={{ maxHeight: '150px' }}
              />
            )}
          </div>
          <Form.Control
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            as="select"
            name="title"
            value={beautician.title}
            onChange={handleChange}
            required
          >
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
          </Form.Control>
        </Form.Group>
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
          <Form.Check
            inline
            type="radio"
            name="gender"
            label="Male"
            value="Male"
            checked={beautician.gender === "Male"}
            onChange={handleChange}
            required
          />
          <Form.Check
            inline
            type="radio"
            name="gender"
            label="Female"
            value="Female"
            checked={beautician.gender === "Female"}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="mobileno">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            name="mobileno"
            value={beautician.mobileno}
            onChange={handleChange}
            maxLength={10}
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
        <Button variant="primary" type="submit" className="mt-3">
          Update Beautician
        </Button>
      </Form>
    </div>
  );
}

export default UpdateBeautician;
