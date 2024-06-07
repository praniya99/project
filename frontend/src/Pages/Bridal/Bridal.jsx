import Subheader from "../../components/Subheader/Subheader"
import './Bridal.css'
import T3 from '../../assets/Bridal/T3.jpg'

const bridal = () => {
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
                                 <div>
                                      <ul>
                                          <b><h3 className="main-heading-Bride">Service</h3></b>
                                          <li className="li-Bride">saree Draping </li>
                                          <li className="li-Bride">Hair style</li>
                                          <li className="li-Bride">Bridal Makeup</li>
                                          <li className="li-Bride">Complete Bridal dressing Package<br/>(hair,makeup and saree draping)</li>
                                          
                                      </ul>
                                 </div>
                                           
                                   <div className='list-Bride'>
                                       <ul type='none'>
                                            <b><h3 className="main-heading-Bride">Price</h3></b>
                                            <li className="li-Bride">Rs.100.00 </li>
                                            <li className="li-Bride">Rs.100.00 </li>
                                            <li className="li-Bride">Rs.100.00 </li>
                                           <li className="li-Bride">Rs.100.00 </li>
                                                
                                        </ul>
                                   </div>

                                    <div className='list-Bride'>
                                        <ul type='none'>
                                             <b><h3 className="main-heading-Bride1">Time Duration</h3></b>
                                             <li className="li-Bride">15 min </li>
                                             <li className="li-Bride">15 min </li>
                                             <li className="li-Bride">15 min </li>
                                             <li className="li-Bride">15 min </li>
                                         </ul>
                                    </div>

                                  
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
