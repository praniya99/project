import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Form, FormControl } from 'react-bootstrap';
import Adminsubheaderservice from '../../Components/Adminsubheaderservice/Adminsubheaderservice';
import './ServiceTable.css';

function ServicesTable() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingService, setEditingService] = useState(null);
  const [updatedService, setUpdatedService] = useState({
    name: '',
    price: '',
    duration: { hours: '', minutes: '' }
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services/all');
        setServices(response.data);
      } catch (error) {
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:3000/services/${serviceId}`);
      setServices(services.filter(service => service._id !== serviceId));
    } catch (error) {
      console.error('Failed to delete service:', error);
      setError('Failed to delete service');
    }
  };

  const handleEdit = (service) => {
    setEditingService(service._id);
    setUpdatedService({
      name: service.name,
      price: service.price,
      duration: {
        hours: service.duration.hours,
        minutes: service.duration.minutes
      }
    });
    setValidationErrors({});
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;

    let isValid = true;
    const errors = {};

    if (name === 'name') {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        errors.name = 'Service name should only contain letters and spaces.';
        isValid = false;
      }
    } else if (name === 'price') {
      if (!/^\d*\.?\d{0,2}$/.test(value)) {
        errors.price = 'Price should be a valid number.';
        isValid = false;
      }
    } else if (name === 'hours' || name === 'minutes') {
      if (isNaN(value) || value < 0 || (name === 'hours' && value > 23) || (name === 'minutes' && value > 59)) {
        errors[name] = name === 'hours' ? 'Hours should be between 0 and 23.' : 'Minutes should be between 0 and 59.';
        isValid = false;
      }
    }

    setUpdatedService((prevState) => ({
      ...prevState,
      duration: {
        ...prevState.duration,
        [name]: value
      },
      [name]: name !== 'hours' && name !== 'minutes' ? value : prevState[name]
    }));

    setValidationErrors((prevState) => ({
      ...prevState,
      [name]: errors[name] || '',
    }));

    return isValid;
  };

  const handleUpdateSubmit = async (serviceId) => {
    if (Object.values(validationErrors).some(error => error)) {
      return;
    }

    try {
      await axios.put(`http://localhost:3000/services/${serviceId}`, updatedService);
      setServices(services.map(service =>
        service._id === serviceId ? { ...service, ...updatedService, duration: { ...updatedService.duration } } : service
      ));
      setEditingService(null);
    } catch (error) {
      console.error('Failed to update service:', error);
      setError('Failed to update service');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const organizedServices = {};
  filteredServices.forEach((service) => {
    if (!organizedServices[service.category]) {
      organizedServices[service.category] = [];
    }
    organizedServices[service.category].push(service);
  });

  return (
    <div>
      <Adminsubheaderservice/>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/Addserviceform">
          <Button className="beautician-button-list">+ Add Service</Button>
        </Link>
      </div>


      <Form className="search-bar">
        <FormControl
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </Form>
      {Object.keys(organizedServices).map((category) => (
        <div key={category}>
          <h2 className="allservice">{category}</h2>
          <Table striped bordered hover className="beautician-table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price (Rs.)</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {organizedServices[category].map((service) => (
                <tr key={service._id}>
                  {editingService === service._id ? (
                    <>
                      <td>
                        <Form.Control
                          type="text"
                          name="name"
                          value={updatedService.name}
                          onChange={handleUpdateChange}
                          isInvalid={!!validationErrors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.name}
                        </Form.Control.Feedback>
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name="price"
                          value={updatedService.price}
                          onChange={handleUpdateChange}
                          isInvalid={!!validationErrors.price}
                        />
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.price}
                        </Form.Control.Feedback>
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          name="hours"
                          value={updatedService.duration.hours}
                          onChange={handleUpdateChange}
                          isInvalid={!!validationErrors.hours}
                          style={{ width: '70px', display: 'inline-block' }}
                        />
                        h
                        <Form.Control
                          type="number"
                          name="minutes"
                          value={updatedService.duration.minutes}
                          onChange={handleUpdateChange}
                          isInvalid={!!validationErrors.minutes}
                          style={{ width: '70px', display: 'inline-block' }}
                        />
                        m
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.hours || validationErrors.minutes}
                        </Form.Control.Feedback>
                      </td>
                      <td>
                        <Button onClick={() => handleUpdateSubmit(service._id)} className="beautician-button-save">Save</Button>
                        <Button onClick={() => setEditingService(null)} className="beautician-button-cancel">Cancel</Button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{service.name}</td>
                      <td>Rs. {service.price}</td>
                      <td>{service.duration.hours}h {service.duration.minutes}min</td>
                      <td>
                        <Button onClick={() => handleEdit(service)} className="beautician-button-update">Edit</Button>
                        <Button onClick={() => handleDelete(service._id)} className="beautician-button-delete">Delete</Button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
     
    </div>
  );
}

export default ServicesTable;
