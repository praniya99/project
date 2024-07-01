import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Topicbox from '../../components/CashierTopic/Topicbox'
import './Admin01Cashier.css'


export default function Admin01Cashier() {
    
  const [cashiers, setCashiers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cashier')
      .then(response => {
        setCashiers(response.data.cashier);
      })
      .catch(error => {
        console.error('Error fetching cashier data:', error);
      });
  }, []);
  const deleteCashier = (id) => {
    axios.delete(`http://localhost:3000/cashier/${id}`)
      .then(response => {
        setCashiers(cashiers.filter(cashier => cashier._id !== id));
      })
      .catch(error => {
        console.error('Error deleting cashier:', error);
      });
  };

  return (
    <div >
     <Topicbox/>
     <div className="list-container">
      <h1>Cashier List</h1>
      <table className='listtable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cashiers.map(cashier => (
            <tr key={cashier._id}>
              <td>{cashier.firstname} {cashier.lastname}</td>
              <td>{cashier.dateofbirth}</td>
              <td>{cashier.gender}</td>
              <td>{cashier.mobileno}</td>
              <td>{cashier.email}</td>
              <td>{cashier.address}</td>
              <td>
              <Link to={`/UpdateCashier/${cashier._id}`}>
                                        <button className='D_btn'>Edit</button>
                                    </Link>               
                <button className='D_btn' onClick={() => deleteCashier(cashier._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

     

    </div>
  )
}
