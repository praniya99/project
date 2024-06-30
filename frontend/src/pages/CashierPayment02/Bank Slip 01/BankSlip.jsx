import React from 'react'
import './bankslip.css'

export default function BankSlip() {
  return (
    <div>
      <div className='topicBox'>
        <p>Bank Slip</p>
     </div>
     <div>

        <table className='sliptable'>
          <thead>
             <tr className='sliprow'>
                <th>Order ID</th>
                <th>Buyer Name</th>
                <th>Income(Rs:)</th>
                <th>Status</th>
                <th></th>

            </tr>
            </thead>
            <tbody>
               <tr className='sliprow'>
                <td>001</td>
                <td>Nimali</td>
                <td>1500.00</td>
                <td>Pending</td>
                <td>
                    <a href=" ">View slip</a>
                </td>
            </tr>
            <tr className='sliprow'>
                <td>002</td>
                <td>Amali</td>
                <td>1580.00</td>
                <td>Pending</td>
                <td>
                    <a href=" ">View slip</a>
                </td>
            </tr></tbody>
           
           
        </table>
     </div>
      

    </div>
  )
}
