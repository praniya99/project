import React from 'react'
import '../BookingDetails/bookingDetails.css'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'

  


export default function BookingDetail() {

  
  return (
    <div>
      <div className='topicBox'>
        <p>Booking Details</p>
     </div>
     
     <div className='content'>
      <div className='table01'>
<table>
<tr className='tr' >
      <th> ID</th>
      <th>Name</th>
      <th>Services</th>
      <th>Total Price(Rs:)</th>
    </tr>
    <tr className='tr'>
    <td>001</td>
      <td>Nimali</td>
      <td>Facial cleanup</td>
      <td>1200</td>
    </tr>
    <tr className='tr'>
    <td>002</td>
      <td>Sanduni</td>
      <td>Facial cleanup</td>
      <td>1200</td>
    </tr>



</table>

      </div>
      <div>
        <div>
          <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='dropdown'>
      sort by
      </Dropdown.Toggle>

      <Dropdown.Menu className='Menu'>
        <Dropdown.Item href="#/action-1" className='Item'>Service 01</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='Item'>Service 02</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='Item'>Service 03</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div className='table02'>
    <table>
<p>Billing Details</p>
      <tr>
        <td>service 01</td>
        <td>1200.00</td>
      </tr>
      <tr>
      <td> Discount</td>
      <td>0.00</td>
      </tr>
      <tr>
        <td><hr/></td>
        <td><hr /></td>
      </tr>
      
      <tr>
      <td> Total</td>
      <td>1200.00</td>
      </tr>


    </table>
    </div>
      
      
      </div>
     </div>

     
    </div>
  )
}
