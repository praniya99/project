
import './Adminfooter.css'
import facebook from './Adminfooter/facebook.png'
import whatsapp from './Adminfooter/whatsapp.png'
import twitter from './Adminfooter/twitter.png'
import instagram from './Adminfooter/instagram.png'
import email from './Adminfooter/email.png'
import call from './Adminfooter/call.png'
import location from './Adminfooter/location.png'

export default function Footer() {
  return (
    <div className='Admin-fulfooter' >
    <div className='Admin-footer'><div>
       <a href=''>      <img className='Admin-img02' src={facebook} alt="" /></a>
        <a href=''><img className='Admin-img02' src={whatsapp} alt="" /></a>
        <a href=''> <img className='Admin-img02' src={twitter} alt="" /></a>
        <a href=''><img className='Admin-img02' src={instagram} alt="" /></a>
        </div>
    </div>
          <hr className='Admin-line' />
          <div className='Admin-footer01'>
          <p className='Admin-p1'><img className='Admin-img03' src={email} alt="" />salonkumudika@gmail.com</p>
          <p className='Admin-p2'><img className='Admin-img03' src={call} alt="" />+94 75 789 7893</p>
         <p className='Admin-p3'><img className='Admin-img04' src={location} alt="" />Address line</p> 

          </div>
    </div>
  )
}