import  { useEffect, useState } from 'react';
import axios from 'axios';
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Organize services by category
  const organizedServices = {};
  services.forEach((service) => {
    if (!organizedServices[service.category]) {
      organizedServices[service.category] = [];
    }
    organizedServices[service.category].push(service);
  });

  return (
    <div >
     
      {Object.keys(organizedServices).map((category) => (
        <div key={category} >
          <h2>{category}</h2>
          <table >
            <thead >
              <tr>
                <th >Service Name</th>
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
                        <input
                          type="text"
                          name="name"
                          value={updatedService.name}
                          onChange={handleUpdateChange}
                        />
                        {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
                      </td>
                      <td>
                        <input
                          type="text"
                          name="price"
                          value={updatedService.price}
                          onChange={handleUpdateChange}
                        />
                        {validationErrors.price && <p className="error-message">{validationErrors.price}</p>}
                      </td>
                      <td>
                        <input
                          type="number"
                          name="hours"
                          value={updatedService.duration.hours}
                          onChange={handleUpdateChange}
                        />
                        h
                        <input
                          type="number"
                          name="minutes"
                          value={updatedService.duration.minutes}
                          onChange={handleUpdateChange}
                        />
                        m
                        {validationErrors.hours && <p className="error-message">{validationErrors.hours}</p>}
                        {validationErrors.minutes && <p className="error-message">{validationErrors.minutes}</p>}
                      </td>
                      <td>
                        <button onClick={() => handleUpdateSubmit(service._id)} className="update-button">Save</button>
                        <button onClick={() => setEditingService(null)} className="cancel-button">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{service.name}</td>
                      <td>Rs. {service.price}</td>
                      <td>{service.duration.hours}h {service.duration.minutes}m</td>
                      <td>
                        <button onClick={() => handleEdit(service)} className="edit-button">Edit</button>
                        <button onClick={() => handleDelete(service._id)} className="delete-button">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default ServicesTable;
