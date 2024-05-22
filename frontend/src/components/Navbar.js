import React, { useState } from 'react';
import './navbar.css'; 
import pic01 from './images/pic01.jpg'
import se from './images/se.png'

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="logo">Kumudika</div>
      <div className="nav-links-container">
        <div className="nav-links">
          <a href="#">Customers</a>
          <a href="#">Salon</a>
          <div className="dropdown" onClick={toggleDropdown}>
            <span >Employee</span>
            {dropdownOpen && (
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
