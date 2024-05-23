import  { useState } from 'react';
import './Adminheader.css'; 
import Ah1 from '../../assets/Adminheader/Ah1.jpg'
import Ah2 from '../../assets/Adminheader/Ah2.png'

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
      <span><img className='Admin-img05' src={Ah2} alt="" /></span>
        <span><img className='Admin-img05' src={Ah1} alt="" /></span>
      </div>
    </div>
  );
};

export default Adminheader;