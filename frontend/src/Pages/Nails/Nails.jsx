import './Nails.css'
import Subheader from '../../components/Subheader/Subheader'
import T6 from '../../assets/Nails/T6.jpg'

const Nails = () => {
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
                    <h3><b>s make the most beautiful day of your life even more beautiful.</b></h3>
                    <h5 className="rect-head-Nails">A facial is a family of skin care treatments for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage. They are normally performed in beauty salons, but are also a common spa treatment. They are used for general skin health as well as for specific skin conditions.</h5>
                    </div>
                </div>


                <div className="small-rect16">
                    <div>
                    <ul>
                        <b><h3 className="main-heading-Nails">Service</h3></b>
                        <li className="li-Nails">Basic Manicure </li>
                        <li className="li-Nails">Basic Pedicure</li>
                        <li className="li-Nails">Fullset without colour</li>
                        <li className="li-Nails">Fullset French</li>
                        <li className="li-Nails">Refill</li>
                        <li className="li-Nails">Buff & Remove Gel Extentions</li>
                       
                    </ul>
                    </div>
                    <div className='list-Nails'>

                   

                    <ul type='none'>
                    <b><h3 className="main-heading-Nails1">Time Duration</h3></b>
                    <li className="li-Nails">30 min </li>
                        <li className="li-Nails">30 min </li>
                        <li className="li-Nails">30 min </li>
                        <li className="li-Nails">30 min </li>
                        <li className="li-Nails">30 min </li>
                        <li className="li-Nails">30 min </li>
                        
                        
                    </ul>
                    </div>

                    <div className='list-Nails'>

                   

                    <ul type='none'>
                    <b><h3 className="main-heading-Nails">Price</h3></b>
                        
                        <li className="li-Nails">Rs.2300.00 </li>
                        <li className="li-Nails">Rs.2900.00 </li>
                        <li className="li-Nails">Rs.600.00 </li>
                        <li className="li-Nails">Rs.6500.00 </li>
                        <li className="li-Nails">Rs.4500.00 </li>
                        <li className="li-Nails">Rs.1700.00 </li>
                        
                        
                    </ul>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Nails
