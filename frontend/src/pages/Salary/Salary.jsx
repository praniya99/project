import React from 'react'
import './salary.css'

import Table from 'react-bootstrap/Table';


export default function Salary() {
  return (
    <div>
      <div className='topicBox'>
        <p>Salary</p>
     </div>
     <div >
     <Table striped bordered hover className="rounded-saltable">
  <thead>
    <tr className='saltr'>
      <th> Name</th>
      <th>Month</th>
      <th>Basic(Rs.)</th>
      <th>Bonas(Rs.)</th>
      <th>Leaves</th>
      <th>Reduction</th>
      <th></th>
      <th>Salary(Rs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr className='saltr'>
      <td>W.H.Nimali</td>
      <td>January</td>
      <td>60 000</td>
      <td>30 000</td>
      <td>-</td>
      <td>-</td>
      <td></td>
      <td>90 000</td>


    </tr>
    <tr className='saltr'>
    <td>W.H.Nimali</td>
      <td>February</td>
      <td>60 000</td>
      <td>20 000</td>
      <td>-</td>
      <td>-</td>
      <td></td>
      <td>80 000</td>

    </tr>
  </tbody>
</Table>

     </div>
    </div>
  )
}
