import Subheader from "../../Components/Subheader/Subheader";
import './Bridal.css';
import T3 from '../../assets/Bridal/T3.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Bridal = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services/all');
        const bridalServices = response.data.filter(service => service.category === 'Bridal');
        setServices(bridalServices);
      } catch (error) {
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Subheader />
      <div className="big-rect1">
        <div>
          <h2 className='heading-Bride'><b>Bridal</b></h2>
        </div>
        <div className="small-rect1">
          <img src={T3} alt="Bridal" className="rect-image-Bride" />
          <div className="rect-heading-Bride">
            <h3 className="h31"><b>Bridal services encompass a range of offerings to prepare a bride for her wedding day.</b></h3>
            <p className="rect-head-Bride">
              This includes traditional hair and makeup styling, intricate henna designs, dressing in traditional attire,
              and sometimes jewelry rental or styling. Bridal makeup blends traditional and modern techniques, enhancing
              natural features while adhering to cultural norms. Hairstyles often feature elaborate designs with flowers
              or traditional ornaments. Henna application is significant, symbolizing beauty and auspiciousness. Overall,
              these services celebrate Sri Lankan cultural heritage while catering to individual preferences.
            </p>
          </div>
        </div>
        <div className="bridal-table-container">
          <table className="bridal-table">
            <thead className="bridalhead">
              <tr>
                <th>Service Name</th>
                <th>Price (Rs.)</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody className="bridalbody">
              {services.map((service) => (
                <tr key={service._id}>
                  <td>{service.name}</td>
                  <td>Rs. {service.price}</td>
                  <td>{service.duration.hours}h {service.duration.minutes}min</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default Bridal;
