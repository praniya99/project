import './Threading.css'
import Subheader from "../../components/Subheader/Subheader"
import S1 from '../../assets/Threading/S1.jpg'

const Threading = () => {
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
                        <h3><b> make the most beautiful day of your life even more beautiful.</b></h3>
                        <h5 className="rect-head-Thread">A facial is a family of skin care treatments for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage. They are normally performed in beauty salons, but are also a common spa treatment. They are used for general skin health as well as for specific skin conditions.</h5>
                    </div>
                </div>


                <div className="small-rect17">
                    <div>
                        <ul>
                            <b><h3 className="main-heading-Thread">Service</h3></b>
                            <li className="li-Thread">Eyebrows </li>
                            <li className="li-Thread">Upper Lip</li>
                            <li className="li-Thread">Chin</li>
                            <li className="li-Thread">Neck</li>
                            <li className="li-Thread">Sides</li>
                            <li className="li-Thread">Forhead</li>
                            <li className="li-Thread">Full Face </li>
                            <li className="li-Thread">Full Face and Neck</li>
                         </ul>
                    </div>

                    <div className='list-Nails'>
                        <ul type='none'>
                            <b><h3 className="main-heading-Nails1">Time Duration</h3></b>
                            <li className="li-Thread">30 min </li>
                            <li className="li-Thread">30 min </li>
                            <li className="li-Thread">30 min </li>
                            <li className="li-Thread">30 min </li>
                            <li className="li-Thread">30 min </li>
                            <li className="li-Thread">30 min </li>
                        </ul>
                    </div>

                    <div className='list-Thread'>
                        <ul type='none'>
                            <b><h3 className="main-heading-Thread">Price</h3></b>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                            <li className="li-Thread">Rs.100.00 </li>
                     </ul>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Threading
