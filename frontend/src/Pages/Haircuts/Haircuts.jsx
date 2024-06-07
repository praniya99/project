import './Haircuts.css'
import Subheader from "../../components/Subheader/Subheader"
import H1 from '../../assets/Haircuts/H1.jpg'


const Haircuts = () => {
  return (
    <div>
      <Subheader/>
           <div className="big-rect14">
                      <div> 
                        <h2 className='heading-Haircuts'><b>Hair Cuts</b></h2>
                      </div>
                      
                      <div className="small-rect14">
                          <div >
                                <img src={H1}
                                alt="Description 1" 
                                className="rect-image-Haircuts"/>
                          </div>

                          <div className="rect-heading-Haircuts">
                              <h3 className='paragraph-Haircuts'><b>s make the most beautiful day of your life even more beautiful.</b></h3>
                              <h5 className="rect-head-Haircuts">A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.</h5>
                          </div>
                      </div>


                      <div className="small-rect14">
                          <div>
                              <ul>
                                  <b><h3 className="main-heading-Haircuts">Service</h3></b>
                                  <li className="li-Haircuts">Eyebrows </li>
                                  <li className="li-Haircuts">Upper Lip</li>
                                  <li className="li-Haircuts">Chin</li>
                                  <li className="li-Haircuts">Neck</li>
                                  <li className="li-Haircuts">Sides</li>
                                  <li className="li-Haircuts">Forhead</li>
                                  <li className="li-Haircuts">Full Face </li>
                                  <li className="li-Haircuts">Full Face and Neck</li>
                            </ul>
                          </div>

                          <div className='list-Haircuts'>
                              <ul type='none'>
                                  <b><h3 className="main-heading-Haircuts1">Time Duration</h3></b>
                                  <li className="li-Haircuts">30 min </li>
                                  <li className="li-Haircuts">30 min </li>
                                  <li className="li-Haircuts">30 min </li>
                                  <li className="li-Haircuts">30 min </li>
                                  <li className="li-Haircuts">30 min </li>
                                  <li className="li-Haircuts">30 min </li>
                               </ul>
                          </div>



                          <div className='list-Haircuts'>
                              <ul type='none'>
                                    <b><h3 className="main-heading-Haircuts">Price</h3></b>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                                    <li className="li-Haircuts">Rs.100.00 </li>
                            </ul>
                          </div>
                     </div>
           </div>
       
    </div>
  )
}

export default Haircuts
