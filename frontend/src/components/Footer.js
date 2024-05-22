import React from 'react'
import './footer.css'
import facebook from './images/facebook.png'
import whatsapp from './images/whatsapp.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import email from './images/email.png'
import call from './images/call.png'
import location from './images/location.png'

export default function Footer() {
  return (
    <div className='fulfooter' >
    <div className='footer'><div>
       <a href=''>      <img className='img02' src={facebook} alt="" /></a>
        <a href=''><img className='img02' src={whatsapp} alt="" /></a>
        <a href=''> <img className='img02' src={twitter} alt="" /></a>
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
