import { useState } from 'react';
import axios from 'axios';
import './Addserviceform.css';
import Adminsubheaderservice from '../../Components/Adminsubheaderservice/Adminsubheaderservice';

function Addserviceform() {
  const [formData, setFormData] = useState({
    servicename: '',
    serviceprice: '',
    category: 'Bridal',
    hours: '',
    minutes: '',
  });

  const [errors, setErrors] = useState({
    servicename: '',
    serviceprice: '',
    hours: '',
    minutes: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleServiceNameChange = (e) => {
    const { value } = e.target;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setFormData((prevState) => ({
        ...prevState,
        servicename: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        servicename: '',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        servicename: 'Service name should only contain letters and spaces.',
      }));
    }
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setFormData((prevState) => ({
        ...prevState,
        serviceprice: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        serviceprice: '',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        serviceprice: 'Price should be a valid number.',
      }));
    }
  };

  const handleTimeDurationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { hours, minutes } = formData;

    if (isNaN(hours) || hours < 0 || hours > 23 || isNaN(minutes) || minutes < 0 || minutes > 59) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        hours: 'Hours should be between 0 and 23.',
        minutes: 'Minutes should be between 0 and 59.',
      }));
      return;
    }

    try {
      const url = `http://localhost:3000/services/service`; // Ensure the port matches your backend server port

      const response = await axios.post(url, {
        servicename: formData.servicename,
        serviceprice: formData.serviceprice,
        category: formData.category,
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
      });
      console.log('Response:', response.data);
      setMessage('Service added successfully!');
      window.alert('Service added successfully!');
    } catch (error) {
      console.error('Error adding service:', error.response ? error.response.data : error.message);
      setMessage('Error adding service. Please try again.');
    }
  };

  return (
    <div>
      <Adminsubheaderservice />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label>Service Name :</label>
            <input
              type="text"
              name="servicename"
              placeholder="Name"
              className="field"
              value={formData.servicename}
              onChange={handleServiceNameChange}
              required
            />
            {errors.servicename && <p className="error-message">{errors.servicename}</p>}
          </div>
          <div className="form-group">
            <label>Service Price (Rs.) :</label>
            <input
              type="text"
              name="serviceprice"
              placeholder="Price"
              className="field"
              value={formData.serviceprice}
              onChange={handlePriceChange}
              required
            />
            {errors.serviceprice && <p className="error-message">{errors.serviceprice}</p>}
          </div>
          <div className="form-group">
            <label>Select Category :</label>
            <select
              name="category"
              className="field1"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Bridal">Bridal</option>
              <option value="Nails">Nails</option>
              <option value="Makeup">Makeup</option>
              <option value="Hair Cuts">Hair Cuts</option>
              <option value="Hair Colouring">Hair Colouring</option>
              <option value="Facial Cleanup">Facial Cleanup</option>
              <option value="Threading">Threading</option>
              <option value="Waxing">Waxing</option>
            </select>
          </div>
          <div className="form-group">
            <label>Duration (Hours:Minutes):</label>
            <input
              type="number"
              name="hours"
              placeholder="Hours"
              className="field1"
              value={formData.hours}
              onChange={handleTimeDurationChange}
              required
            />
            <input
              type="number"
              name="minutes"
              placeholder="Minutes"
              className="field1"
              value={formData.minutes}
              onChange={handleTimeDurationChange}
              required
            />
            {errors.hours && <p className="error-message">{errors.hours}</p>}
            {errors.minutes && <p className="error-message">{errors.minutes}</p>}
          </div>
          <center>
            <button type="submit" className="button">ADD SERVICE</button>
          </center>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Addserviceform;
