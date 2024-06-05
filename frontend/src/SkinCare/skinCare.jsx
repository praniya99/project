import Sidebar from "../component/sidebar";
import './allProduct.css' 
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
                src="../src/assets/18.png"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Gold facial serum</h5>
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
                src="../src/assets/17.png"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Anti acne toner</h5>
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
                src="../src/assets/27.png"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Lip Barm</h5>
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
                src="../src/assets/29.jpg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Day Cream</h5>
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
                src="../src/assets/30.jpg"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Night Cream</h5>
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
                src="../src/assets/12.png"
                alt="Description 1"
                className="rectImage"
              />
              </a>
              <div className="rectHeading">
              <h5 className="rect-head-head">Gold cleanser</h5>
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