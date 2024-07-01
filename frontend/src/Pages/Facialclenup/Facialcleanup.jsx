import './Facialcleanup.css'
import Subheader from "../../Components/Subheader/Subheader"
import T5 from '../../assets/Facialcleanup/T5.jpg'
import  { useEffect, useState } from 'react';
import axios from 'axios';


const Facialcleanup = () => {

    const [facialCleanupServices, setFacialCleanupServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchFacialCleanupServices = async () => {
        try {
          const response = await axios.get('http://localhost:3000/services/category/Facial%20Cleanup');
          setFacialCleanupServices(response.data);
        } catch (error) {
          setError('Failed to fetch Facial Cleanup services');
        } finally {
          setLoading(false);
        }
      };
  
      fetchFacialCleanupServices();
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
            <div className="big-rect12">
                    <div> <h2 className='heading-facialcleanup'><b>Facialcleanup</b></h2></div>
                        <div className="small-rect12">
                            <div >
                                <img src={T5}
                                    alt="Description 1" 
                                    className="rect-image-facialcleanup"/>
                                
                            </div>
                            <div className="rect-heading-facialcleanup">
                                    <h3 className='paragraph-facialcleanup'><b>s make the most beautiful day of your life even more beautiful.</b></h3>
                                    <h5 className="rect-head-Facialcleanup">A facial is a family of skin care treatments for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage. They are normally performed in beauty salons, but are also a common spa treatment. They are used for general skin health as well as for specific skin conditions.</h5>
                            </div>
                        </div>

                        <div className="cleanup-table-container">
                        <table className="cleanup-table">
        <thead className="cleanuphead">
          <tr>
            <th>Service Name</th>
            <th>Price (Rs.)</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody className="cleanupbody">
          {facialCleanupServices.map((service) => (
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

export default Facialcleanup
