import React from 'react'
import Table from 'react-bootstrap/Table'
import '../CashierSchedule/cashierschedule.css'


export default function CashierSchedule() {
  return (
    <div>
      <div>
      <div className='topicBox'>
        <p>Schedule</p>
     </div>
     <div >
     <Table striped bordered hover className="rounded-scheduletable">
  <thead>
    <tr className='schedule_tr'>
      <th> Date</th>
      <th>Time</th>
      <th>Name</th>
      <th>Appointment type</th>
    <th></th>
      
    </tr>
  </thead>
  <tbody>
    <tr className='schedule_tr'>
      <td>2024/05/13</td>
      <td>10.00 a.m.</td>
      <td>Shehani</td>
      <td>Facial cleanup</td>
      <td><a href="">view</a></td>


    </tr>
    <tr className='schedule_tr'>
    
      <td>2024/05/20</td>
      <td>11.00 a.m.</td>
      <td>W.H.Nimali</td>
      <td>Facial cleanup</td>
      <td><a href="">view</a></td>

    </tr>
  </tbody>
</Table>

     </div>
    </div>

    </div>
  )
}
