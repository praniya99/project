import './Makeup.css'
import Subheader from '../../Components/Subheader/Subheader.jsx'
import S5 from '../../assets/Makeup/S5.jpg'
import  { useEffect, useState } from 'react';
import axios from 'axios';


const Makeup = () => {
  const [makeupServices, setMakeupServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMakeupServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/services/category/Makeup');
        setMakeupServices(response.data);
      } catch (error) {
        setError('Failed to fetch Makeup services');
      } finally {
        setLoading(false);
      }
    };

    fetchMakeupServices();
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
      <div className="big-rect15">
            <div> <h2 className='heading-Makeup'><b>Makeup</b></h2></div>
                <div className="small-rect15">
                     <div >
                        <img src={S5}
                             alt="Description 1" 
                             className="rect-image-Makeup"/>
                        
                    </div>

                    <div className="rect-heading-Makeup">
                        <h3><b> make the most beautiful day of your life even more beautiful.</b></h3>
                        <h5 className="rect-head-Makeup">Natural Makeup: Enhances features subtly for a fresh, flawless look.
                        Glam Makeup: Dramatic with bold colors and contouring for special events.
                        Bridal Makeup: Tailored for weddings, ranging from soft to glamorous.
                        Fashion/Editorial Makeup: Artistic and experimental, seen on runways and in magazines.
                        Theatrical/Stage Makeup: Exaggerates features for visibility under stage lighting.
                        Special Effects Makeup: Creates illusions like aging or wounds for film and theater.
                        Everyday Makeup: Simple, daily wear for a polished look.
                        Airbrush Makeup: Lightweight and long-lasting, applied with an airbrush gun</h5>
                    </div>
                </div>


                <div className="small-rect15">
                <table className="services-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Price (Rs.)</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {makeupServices.map((service) => (
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

export default Makeup
