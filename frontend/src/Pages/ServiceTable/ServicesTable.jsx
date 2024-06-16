import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminsubheaderservice from '../../Components/Adminsubheaderservice/Adminsubheaderservice';
import './ServiceTable.css';

const API_URL = 'http://localhost:3000/allservices/all'; // Replace with your actual API URL

const fetchAllServices = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

const ServiceList = () => {
    const [services, setServices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllServices = async () => {
            try {
                const data = await fetchAllServices();
                setServices(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getAllServices();
    }, []);

    const handleDelete = async (id, category) => {
        try {
            const response = await axios.delete(`http://localhost:3000/${category.toLowerCase()}services/${id}`);
            if (response.status === 200) {
                setServices((prevServices) => {
                    const updatedServices = { ...prevServices };
                    updatedServices[category] = updatedServices[category].filter(service => service._id !== id);
                    return updatedServices;
                });
            } else {
                console.error(`Failed to delete ${category} service. Status: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error deleting ${category} service:`, error);
            setError(error);
        }
    };

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error loading services: {error.message}</p>;

    return (
        <div className="service-list">
            <Adminsubheaderservice />
            {Object.keys(services).map((category) => (
                <div key={category} className="service-category">
                    <h2>{category}</h2>
                    <table className="service-table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Duration</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services[category].map((service) => (
                                <tr key={service._id}>
                                    <td>{service.servicename}</td>
                                    <td>{service.serviceprice}</td>
                                    <td>{service.hours} hours {service.minutes} minutes</td>
                                    <td>
                                        <button onClick={() => handleDelete(service._id, category)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default ServiceList;
