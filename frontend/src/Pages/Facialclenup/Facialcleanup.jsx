import './Facialcleanup.css'
import Subheader from "../../components/Subheader/Subheader"
import T5 from '../../assets/Facialcleanup/T5.jpg'


const Facialcleanup = () => {
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


                        <div className="small-rect12">
                            <div>
                                <ul>
                                    <b><h3 className="main-heading-facialcleanup">Service</h3></b>
                                    <li className="li-facialcleanup">Basic Manicure </li>
                                    <li className="li-facialcleanup">Basic Pedicure</li>
                                    <li className="li-facialcleanup">Basic Manicure </li>
                                    <li className="li-facialcleanup">Basic Pedicure</li>
                                    <li className="li-facialcleanup">Basic Manicure </li>
                                    <li className="li-facialcleanup">Basic Pedicure</li>
                            
                                 </ul>
                            </div>

                            <div className='list-facialcleanup'>
                                 <ul type='none'>
                                    <b><h3 className="main-heading-facialcleanup1">Time Duration</h3></b>
                                    <li className="li-facialcleanup">30 min </li>
                                    <li className="li-facialcleanup">30 min </li>
                                    <li className="li-facialcleanup">30 min </li>
                                    <li className="li-facialcleanup">30 min </li>
                                    <li className="li-facialcleanup">30 min </li>
                                    <li className="li-facialcleanup">30 min </li>
                                </ul>
                            </div>

                            <div className='list-facialcleanup1'>
                                <ul type='none'>
                                    <b><h3 className="main-heading-facialcleanup">Price</h3></b>
                                     <li className="li-facialcleanup">Rs.2900.00 </li>
                                     <li className="li-facialcleanup">Rs.600.00 </li>
                                     <li className="li-facialcleanup">Rs.6500.00 </li>
                                    <li className="li-facialcleanup">Rs.4500.00 </li>
                                     <li className="li-facialcleanup">Rs.1700.00 </li>
                                
                                
                                </ul>
                            </div>
                        </div>
                </div>
       
    </div>
  )
}

export default Facialcleanup
