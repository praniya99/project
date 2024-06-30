import React, { useState } from 'react';
import '../BookingDetails/bookingDetails.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookingDetail() {
  const [services, setServices] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const [isPaid, setIsPaid] = useState(false);  // New state to handle button disable

  const serviceOptions = [
    { name: 'Facial cleanup', price: 1200 },
    { name: 'Service 02', price: 1500 },
    { name: 'Service 03', price: 1800 }
  ];

  const handleSelectService = (service) => {
    const newServices = [...services, service];
    const newTotal = newServices.reduce((sum, s) => sum + s.price, 0);
    setServices(newServices);
    setTotal(newTotal);
  };

  const handleRemoveService = (index) => {
    const newServices = services.filter((_, i) => i !== index);
    const newTotal = newServices.reduce((sum, s) => sum + s.price, 0);
    setServices(newServices);
    setTotal(newTotal);
  };

  const handleDiscountChange = (e) => {
    const discountValue = parseFloat(e.target.value) || 0;
    setDiscount(discountValue);
  };

  const calculateTotalWithDiscount = () => {
    return total - (total * discount / 100);
  };

  const handlePayment = () => {
    setPaymentStatus('Payment Completed');
    setIsPaid(true);  // Disable the button after payment
  };

  return (
    <div>
      <div className='topicBox'>
        <p>Booking Details</p>
      </div>
     
      <div className='content'>
        <div className='table01'>
          <table>
            <tr className='Bookingtr'>
              <th>ID</th>
              <th>Name</th>
              <th>Services</th>
              <th>Total Price (Rs:)</th>
            </tr>
            <tr className='Bookingtr'>
              <td>001</td>
              <td>Nimali</td>
              <td>
                {services.map((service, index) => (
                  <div key={index}>{service.name}</div>
                ))}
              </td>
              <td>{total}</td>
            </tr>
          </table>
        </div>
        <div><div className='button-container'>
          <Dropdown className='drop' >
            <Dropdown.Toggle id="dropdown-basic" className='servicedropdown' disabled={isPaid} >
              Add Service
            </Dropdown.Toggle>
            <Dropdown.Menu className='Menu'>
              {serviceOptions.map((service, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelectService(service)}
                  className='Item'
                >
                  {service.name}
                  
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='table02'>
          <table>
            <p><b> Billing Details</b></p>
            {services.map((service, index) => (
              <tr className='t2tr' key={index}>
                <td>{service.name}</td>
                <td>{service.price.toFixed(2)}</td>
                <td>
                  <button className='remove' onClick={() => handleRemoveService(index)} disabled={isPaid}>-</button>
                </td>
              </tr>
            ))}
            <tr className='t2tr'>
              <td>Discount (%)</td>
              <td>
                <input 
                  type="number" 
                  value={discount} 
                  onChange={handleDiscountChange} 
                  className="discount-input"
                  disabled={isPaid} // Disable the discount input if payment is done
                />
              </td>
            </tr>
            <tr className='t2tr'>
              <td>Total</td>
              <td>{calculateTotalWithDiscount().toFixed(2)}</td>
            </tr>
            <tr className='t2tr'>
              <td>Payment Status</td>
              <td>{paymentStatus}</td>
            </tr>
          </table>
          
          <div className='Paybutton-container'>
            <button 
              onClick={handlePayment} 
              className='payment-button' 
              disabled={isPaid}  // Disable button if payment is done
            >Payed
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
