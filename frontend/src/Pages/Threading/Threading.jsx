import './Threading.css'
import Subheader from "../../Components/Subheader/Subheader"
import S1 from '../../assets/Threading/S1.jpg'
import  { useEffect, useState } from 'react';
import axios from 'axios';

const Threading = () => {
    const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services/all');
        setServices(response.data.filter(service => service.category === 'Threading'));
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
      <div className="big-rect17">
            <div> <h2 className='heading-Thread'><b>Threading</b></h2></div>
                <div className="small-rect17">
                     <div >
                        <img src={S1}
                             alt="Description 1" 
                             className="rect-image-Thread"/>
                        
                    </div>
                    <div className="rect-heading-Thread">
                        <h3 className="paragraph-threading"><b> make the most beautiful day of your life even more beautiful.</b></h3>
                        <h5 className="rect-head-Thread">A facial is a family of skin care treatments for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage. They are normally performed in beauty salons, but are also a common spa treatment. They are used for general skin health as well as for specific skin conditions.</h5>
                    </div>
                </div>


                <div className="threading-table-container">
                <table className="threading-table">
        <thead className="threadinghead">
          <tr>
            <th>Service Name</th>
            <th>Price (Rs.)</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody className="threadingbody">
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

export default Threading
