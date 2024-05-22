import  { useState } from 'react';
import './Adminheader.css'; 
import pic01 from './Adminheader/pic01.jpg'
import se from './Adminheader/se.png'

const Adminheader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="Admin-navbar">
      <div className="Admin-logo">Kumudika</div>
      <div className="Admin-nav-links-container">
        <div className="Admin-nav-links">
          <a href="#">Customers</a>
          <a href="#">Salon</a>
          <div className="Admin-dropdown" onClick={toggleDropdown}>
            <span >Employee</span>
            {dropdownOpen && (
              <div className="Admin-dropdown-menu">
                <a href="#">Delivery Agents</a>
                <a href="#">Beauticians</a>
                <a href="#">Cashier</a>
              </div>
            )}
          </div></div>
      </div>
      <div className="Admin-icons">
      <span><img className='Admin-img05' src={se} alt="" /></span>
        <span><img className='Admin-img05' src={pic01} alt="" /></span>
      </div>
    </div>
  );
};

export default Adminheader;