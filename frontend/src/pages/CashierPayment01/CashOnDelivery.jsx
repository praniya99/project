import React from 'react'
import './cashondelivery.css'

export default function CashOnDelivery() {
  return (
    <div>
         <div className='topicBox'>
        <p>Cash On Delivery</p>
     </div>
     <div>
        <table className='cashtable'>
            <tr>
                <th>Order ID</th>
                <th>Buyer Name</th>
                <th>Income(Rs:)</th>
            </tr>
            <tr>
                <td>001</td>
                <td>Nimali</td>
                <td>1500.00</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Amali</td>
                <td>1580.00</td>
            </tr>
        </table>
     </div>
      
    </div>
  )
}
