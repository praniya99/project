import './Haircolour.css'
import Subheader from "../../Components/Subheader/Subheader"
import T8 from '../../assets/Haircolour/T8.jpg'
import  { useEffect, useState } from 'react';
import axios from 'axios';

const Haircolour = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get('http://localhost:3000/services/all');
          const hairColouringServices = response.data.filter(service => service.category === 'Hair Colouring');
          setServices(hairColouringServices);
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
      <div className="big-rect13">
            <div> <h2 className='heading-Haircolour'><b>Hair Colour</b></h2></div>
                <div className="small-rect13">
                     <div >
                        <img src={T8}
                             alt="Description 1" 
                             className="rect-image-Haircolour"/>
                        
                    </div>

                    <div className="rect-heading-Haircolour">
                         <h3 className='paragraph-haircolour'><b>s make the most beautiful day of your life even more beautiful.</b></h3>
                        <h5 className="rect-head-Haircolour">A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.</h5>
                    </div>
                </div>


                <div className="haircolour-table-container">
                <table className="haircolourhead">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Price (Rs.)</th>
            <th>Duration</th>
            
          </tr>
        </thead>
        <tbody className="haircolourbody">
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

export default Haircolour
