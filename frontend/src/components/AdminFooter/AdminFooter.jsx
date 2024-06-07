
import './adminfooter.css'
import facebook from '../../assets/images/footer/facebook.png'
import whatsapp from '../../assets/images/footer/whatsapp.png'
import twitter from '../../assets/images/footer/twitter.png'
import instagram from '../../assets/images/footer/instagram.png'
import email from '../../assets/images/footer/email.png'
import call from '../../assets/images/footer/call.png'
import location from '../../assets/images/footer/location.png'

export default function Footer() {
  return (
    <div className='fulfooter' >
    <div className='footer'><div>
       <a href=''>      <img className='img02' src={facebook} alt="" /></a>
        <a href=''><img className='img02' src={whatsapp} alt="" /></a>
        <a href=''><img className='img02' src={twitter} alt="" /></a>
        <a href=''><img className='img02' src={instagram} alt="" /></a>
        </div>
    </div>
          <hr className='line' />
          <div className='footer01'>
          <p className='p1'><img className='img03' src={email} alt="" />salonkumudika@gmail.com</p>
          <p className='p2'><img className='img03' src={call} alt="" />+94 75 789 7893</p>
         <p className='p3'><img className='img04' src={location} alt="" />Address line</p> 

          </div>
    </div>
  )
}
