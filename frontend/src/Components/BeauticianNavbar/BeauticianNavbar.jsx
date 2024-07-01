import  { useState } from 'react';
import './BeauticianNavBar.css';
import pic01 from '../../assets/images/navbar/pic01.jpg'
import se from '../../assets/images/navbar/se.png'

const BeauticianNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  return (
    <div className="beautician-navbar">
               <div className="beautician-logo">Kumudika</div>
                <div className="beautician-nav-links-container">
                    <div className="beautician-nav-links">
                      <a href="#">Home</a>
                            <div >           
                              <a href="#">Schedule</a>
                              <a href="#">Salary</a>
                            </div>
                      </div>
                </div>

                
                <div className="beautician-icons">
            
                           
                            <span> <img className='beautician-img05' src={se} alt="" /></span>
                            <div className="beautician-dropdown" onClick={handleDropdownToggle}>
                            <span><img className='beautician-img05' src={pic01} alt="" /></span>
                            {isDropdownOpen && (
                            <div className="beautician-dropdown-menu">
                              <a href="#">History</a>
                              <a href="#">Leaves</a>
                              <a href="#">Log out</a>
                            </div>
                          )}
                </div>
                </div>              
                           
                 
    </div>
  );
};

export default BeauticianNavbar;
