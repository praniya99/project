import Sidebar from "./../../Components/Sidebar/sidebar";
import './skinCare.css' 
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Allproduct = () => {
  return (
    <div>
      
      <Sidebar />
      <div className="bigRect1">
        <div className="smallRect1">
          {products.map((product, index) => (
            <div className="smallRect2" key={index}>
              <div className="mainPhoto">
                <a href="#"><img
                  src={product.image}
                  alt={product.description}
                  className="rectImage"
                />
                </a>
                <div className="rectHeading">
                  <h5 className="rect-head-head">{product.title}</h5>
                </div>
                <div className="buyNow">
                  <button className="buy-button">Buy now</button>
                  <button className="cart-button"><LocalMallIcon /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    image: "../src/assets/SkincarePhoto/18.png",
    description: "Description 1",
    title: "Gold facial serum"
  },
  {
    image: "../src/assets/SkincarePhoto/17.png",
    description: "Description 1",
    title: "Anti acne toner"
  },
  {
    image: "../src/assets/SkincarePhoto/27.png",
    description: "Description 1",
    title: "Lip Barm"
  },
  {
    image: "../src/assets/SkincarePhoto/12.png",
    description: "Description 1",
    title: "Gold Cleanser"
  },
  {
    image: "../src/assets/SkincarePhoto/29.jpg",
    description: "Description 1",
    title: "Day Cream"
  },
  {
    image: "../src/assets/SkincarePhoto/30.jpg",
    description: "Description 1",
    title: "Night Cream"
  }
];

export default Allproduct;
