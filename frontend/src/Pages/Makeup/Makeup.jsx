import './Makeup.css'
import Subheader from '../../components/Subheader/Subheader.jsx'
import S5 from '../../assets/Makeup/S5.jpg'
const Makeup = () => {
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
                    <div>
                        <ul>
                            <b><h3 className="main-heading-Makeup">Service</h3></b>
                            <li className="li-Makeup">Eyebrows </li>
                            <li className="li-Makeup">Upper Lip</li>
                            <li className="li-Makeup">Chin</li>
                            <li className="li-Makeup">Neck</li>
                            <li className="li-Makeup">Eyebrows </li>
                            <li className="li-Makeup">Upper Lip</li>
                            <li className="li-Makeup">Chin</li>
                            <li className="li-Makeup">Neck</li>
                     </ul>
                    </div>

                    <div className='list-Makeup'>
                        <ul type='none'>
                            <b><h3 className="main-heading-Makeup1">Time Duration</h3></b>
                            <li className="li-Makeup">30 min </li>
                            <li className="li-Makeup">30 min </li>
                            <li className="li-Makeup">30 min </li>
                            <li className="li-Makeup">30 min </li>
                            <li className="li-Makeup">30 min </li>
                            <li className="li-Makeup">30 min </li>
                        
                         </ul>
                    </div>

                    <div className='list-Makeup'>
                             <ul type='none'>
                                   <b><h3 className="main-heading-Makeup">Price</h3></b>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                                    <li className="li-Makeup">Rs.100.00 </li>
                            </ul>
                    </div>
                </div>
         </div>
       
    </div>
  )
}

export default Makeup
