import React from 'react'
import '../BookingDetails/bookingDetails.css'
import Dropdown from 'react-bootstrap/Dropdown';



export default function BookingDetail() {
  return (
    <div>
      <div className='topicBox'>
        <p>Booking Details</p>
     </div>
     
     <div className='content'>
      <div>
<table>
<tr className='tr' >
      <th> Date</th>
      <th>Reason</th>
      <th>status</th>
      <th>status</th>
      <th>status</th>
    </tr>
    <tr className='tr'>
     
    </tr>
    <tr className='tr'>
      
    </tr>


</table>

      </div>
      <div>
        <div>
          <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='sort'>
      sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">A-Z</Dropdown.Item>
        <Dropdown.Item href="#/action-2">latest</Dropdown.Item>
        <Dropdown.Item href="#/action-3">oldest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <table>


    </table>
      
      </div>
     </div>

     
    </div>
  )
}
