
import Sidebar from "./../../Components/Sidebar/sidebar";
import './bodyCare.css' 
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Allproduct= () => {
  return (
    <div>
      
      <Sidebar/>
      <div className="bigRect1">
        <div className="smallRect1">
          <div className="smallRect2">
            <div className="mainPhoto">
              <a href="#"><img
                src="../src/assets/BodycarePhoto/9.jpeg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Herbal Foot Cream</h5>
            </div>
            <div className="buyNow">
            <button className="buy-button">Buy now</button>
            <button className="cart-button"><LocalMallIcon/></button>
            
            </div>
            </div>
            
          </div>

          <div className="smallRect2">
            <div className="mainPhoto">
            <a href="#">
              <img
                src="../src/assets/BodycarePhoto/39.png"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Body Mist</h5>
            </div>
            <div className="buyNow">
            <button className="buy-button">Buy now</button>
            <button className="cart-button"><LocalMallIcon/></button>
            </div>
            </div>
           
          </div>

          <div className="smallRect2">
            <div className="mainPhoto">
            <a href="#">
              <img
                src="../src/assets/BodycarePhoto/36.jpeg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Body Scrub</h5>
            </div>
            <div className="buyNow">
            <button className="buy-button">Buy now</button>
            <button className="cart-button"><LocalMallIcon/></button>
            </div>
            </div>
           
          </div>
        </div>

        <div className="smallRect1-1">
          <div className="smallRect2">
            <div className="mainPhoto">
            <a href="#">
              <img
                src="../src/assets/BodycarePhoto/35.jpg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Body lotion</h5>
            </div>
            <div className="buyNow">
            <button className="buy-button">Buy now</button>
            <button className="cart-button"><LocalMallIcon/></button>
            </div>
            </div>
           
          </div>

          <div className="smallRect2">
            <div className="mainPhoto">
            <a href="#">
              <img
                src="../src/assets/BodycarePhoto/38.jpg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Body Sope</h5>
            </div>
            <div className="buyNow">
            <button className="buy-button">Buy now</button>
            <button className="cart-button"><LocalMallIcon/></button>
            </div>
            </div>
            
          </div>

          <div className="smallRect2">
            <div className="mainPhoto">
            <a href="#">
              <img
                src="../src/assets/BodycarePhoto/37.jpeg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Body Wash</h5>
            </div>
            <div className="buyNow">
            <button className="buy-button">Buy now</button>
            <button className="cart-button"><LocalMallIcon/></button>
            </div>
            </div>
            
          </div>

         
            
          
        

        

          

         
        </div>
      </div>
    </div>
  );
};

export default Allproduct; 