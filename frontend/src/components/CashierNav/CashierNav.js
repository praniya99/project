import React, { useState } from 'react';
import './cashiernav.css'; 
import pic01 from '../assests/images/navbar/pic01.jpg'
import se from '../assests/images/navbar/se.png'

const NavBar = () => {
  const [salonDropdownOpen, setSalonDropdownOpen] = useState(false);

 
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
          <a href="#">Home</a>
          <div 
            className="dropdown" 
            onMouseEnter={handleSalonMouseEnter} 
            onMouseLeave={handleSalonMouseLeave}
          >            <span className='salon'>Payments</span>
            {salonDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#">Cash on delivery</a>
                <a href="#">By bank slip</a>
              </div>
            )}
          </div>
          <a href="#">Schedule</a>
          <a href="#">Salary</a>
          </div>
      </div>
      <div className="icons">
      <span><img className='img05' src={se} alt="" /></span>
        <span><img className='img05' src={pic01} alt="" /></span>
      </div>
    </div>
  );
};

export default NavBar;
