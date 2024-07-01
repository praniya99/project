import './Nails.css'
import Subheader from '../../Components/Subheader/Subheader'
import T6 from '../../assets/Nails/T6.jpg'
import  { useEffect, useState } from 'react';
import axios from 'axios';

const Nails = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services/all');
        const nailsServices = response.data.filter(service => service.category === 'Nails');
        setServices(nailsServices);
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
      <Subheader/>
      <div className="big-rect16">
            <div> <h2 className='heading-Nails'><b>Nails</b></h2></div>
                <div className="small-rect16">
                     <div >
                        <img src={T6}
                             alt="Description 1" 
                             className="rect-image-Nails"/>
                        
                    </div>
                    <div className="rect-heading-Nails">
                    <h3 className="paragraph-nails"><b>s make the most beautiful day of your life even more beautiful.</b></h3>
                    <h5 className="rect-head-Nails">A facial is a family of skin care treatments for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage. They are normally performed in beauty salons, but are also a common spa treatment. They are used for general skin health as well as for specific skin conditions.</h5>
                    </div>
                </div>


                <div className="nails-table-container">
                <table className="nails-table">
        <thead className="nailshead">
          <tr>
            <th>Service Name</th>
            <th>Price (Rs.)</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody className="nailsbody">
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.name}</td>
              <td>Rs. {service.price}</td>
              <td>{service.duration.hours}h {service.duration.minutes}m</td>
            </tr>
          ))}
        </tbody>
      </table>
                </div>
        </div>
        
    </div>
  )
}

export default Nails
