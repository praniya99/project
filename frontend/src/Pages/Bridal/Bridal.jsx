import Subheader from "../../Components/Subheader/Subheader"
import './Bridal.css'
import T3 from '../../assets/Bridal/T3.jpg'
import  { useEffect, useState } from 'react';
import axios from 'axios';

const bridal = () => {
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
      <Subheader/>
        <div className="big-rect1">
                  <div> <h2 className='heading-Bride'><b>Bridal</b></h2></div>
                        <div className="small-rect1">
                                <div >
                                         <img src={T3}
                                              alt="Description 1" 
                                              className="rect-image-Bride"/>
                                        
                                </div>
                                <div className="rect-heading-Bride">
                                    <h3 className='paragraph-Bride'><b>s make the most beautiful day of your life even more beautiful.</b></h3>
                                    <h5 className="rect-head-Bride">Bridal services encompass a range of offerings to prepare a bride for her wedding day. 
                                    This includes traditional hair and makeup styling, intricate henna designs, 
                                    dressing in traditional attire, and sometimes jewelry rental or styling. 
                                    Bridal makeup blends traditional and modern techniques, enhancing natural features while adhering to cultural norms. 
                                    Hairstyles often feature elaborate designs with flowers or traditional ornaments. Henna application is significant, 
                                    symbolizing beauty and auspiciousness. Overall, these services celebrate Sri Lankan cultural heritage while catering to individual preferences.</h5>
                                </div>
                        </div>

                        <div className="small-rect1">
                        <table className="services-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Price (Rs.)</th>
            <th>Duration</th>
            
          </tr>
        </thead>
        <tbody>
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
                          <div className="small-rect1">
                                <ul>
                                <li className="li-Bride1">Early Morning Dressing Charges
                                    For services between 06.00 am and 9.00 am, 
                                    an additional charge of <b>Rs.4130.00 </b>applies.</li>
                                </ul>
                           </div>
         </div>
      
      </div>
     
    
  )
}

export default bridal
