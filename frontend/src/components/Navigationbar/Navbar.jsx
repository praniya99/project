import React, { useState } from 'react';
import './navbar.css'; 
import pic01 from '../../assets/images/navbar/pic01.jpg'
import se from '../assets/images/navbar/se.png'

const NavBar = () => {
  const [EmployeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);
  const [salonDropdownOpen, setSalonDropdownOpen] = useState(false);

  const handleEmployeeMouseEnter = () => {
    setEmployeeDropdownOpen(true);
  };

  const handleEmployeeMouseLeave = () => {
    setEmployeeDropdownOpen(false);
  };

  const handleSalonMouseEnter = () => {
    setSalonDropdownOpen(true);
  };

  const handleSalonMouseLeave = () => {
    setSalonDropdownOpen(false);
  };
  return (
    <div className="navbar">
      <div className="logo">Kumudika</div>
      <div className="nav-links-container">
        <div className="nav-links">
          <a href="#">Customers</a>
          <div 
            className="dropdown" 
            onMouseEnter={handleSalonMouseEnter} 
            onMouseLeave={handleSalonMouseLeave}
          >            <span className='salon'>Salon</span>
            {salonDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#">Hair</a>
                <a href="#">Nails</a>
                <a href="#">Spa</a>
              </div>
            )}
          </div>
          <div 
            className="dropdown" 
            onMouseEnter={handleEmployeeMouseEnter} 
            onMouseLeave={handleEmployeeMouseLeave}
          >
            <span className='emp'>Employee</span>
            {EmployeeDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#">Delivery Agents</a>
                <a href="#">Beauticians</a>
                <a href="#">Cashier</a>
              </div>
            )}
          </div></div>
      </div>
      <div className="icons">
      <span><img className='img05' src={se} alt="" /></span>
        <span><img className='img05' src={pic01} alt="" /></span>
      </div>
    </div>
  );
};

export default NavBar;
