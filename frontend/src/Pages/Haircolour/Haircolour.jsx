import './Haircolour.css'
import Subheader from "../../Components/Subheader/Subheader"
import Footer from  '../../Components/Footer/Footer'
const Haircolour = () => {
  return (
    <div>
      <Subheader/>
      <div className="big-rect13">
            <div> <h2 className='heading-Haircolour'><b>Hair Colour</b></h2></div>
                <div className="small-rect13">
                     <div >
                        <img src="../src/assets/Haircolour/T8.jpg"
                             alt="Description 1" 
                             className="rect-image-Haircolour"/>
                        
                    </div>

                    <div className="rect-heading-Haircolour">
                       <h3><b>Let's make the most beautiful day of your life even more beautiful.</b></h3>
                        <h5 className="rect-head-Haircolour">A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.</h5>
                    </div>
                </div>


                <div className="small-rect13">
                    <div>
                    <ul>
                        <b><h3 className="main-heading-Haircolour">Service</h3></b>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                        <li className="li-Haircolour">Eyebrows </li>
                    </ul>
                    </div>

                    <div className='list-Haircolour'>
                        <ul type='none'>
                        <b><h3 className="main-heading-Haircolour1">Time Duration</h3></b>
                            <li className="li-Haircolour">30 min </li>
                            <li className="li-Haircolour">30 min </li>
                            <li className="li-Haircolour">30 min </li>
                            <li className="li-Haircolour">30 min </li>
                            <li className="li-Haircolour">30 min </li>
                            <li className="li-Haircolour">30 min </li>
                        </ul>
                    </div>

                    <div className='list-Haircolour1'>
                        <ul type='none'>
                        <b><h3 className="main-heading-Haircolour">Price</h3></b>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                            <li className="li-Haircolour">Rs.100.00 </li>
                         </ul>
                      </div>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Haircolour
