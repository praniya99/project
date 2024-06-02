import React from 'react'
import Table from 'react-bootstrap/Table'
import '../MyLeaves/myleaves.css'

export default function MyLeaves() {
  return (
    <div>
      <div>
      <div className='topicBox'>
        <p>My Leaves</p>
     </div>
     <div >
     <Table striped bordered hover className="rounded-table">
  <thead>
    <tr className='tr'>
      <th> Date</th>
      <th>Reason</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th>status</th>
    </tr>
  </thead>
  <tbody>
    <tr className='tr'>
      <td>2024/05/20</td>
      <td>reason01</td>
      <td></td>
      <td></td>
      
      <td></td>
      <td></td>
      <td></td>
      <td>pending</td>


    </tr>
    <tr className='tr'>
    
      <td>2024/05/02</td>
      <td>reason02</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>confirmed</td>

    </tr>
  </tbody>
</Table>

     </div>
    </div>
    </div>
  )
}
