
import Sidebar from "./../../Components/Sidebar/sidebar";
import './bodyCare.css' 
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
    image: "../src/assets/BodycarePhoto/9.jpeg",
    description: "Description 1",
    title: "Herbal Foot Cream"
  },
  {
    image: "../src/assets/BodycarePhoto/39.png",
    description: "Description 1",
    title: "Body Mist"
  },
  {
    image: "../src/assets/BodycarePhoto/36.jpeg",
    description: "Description 1",
    title: "Body Scrub"
  },
  {
    image: "../src/assets/BodycarePhoto/35.jpg",
    description: "Description 1",
    title: "Body lotion"
  },
  {
    image: "../src/assets/BodycarePhoto/38.jpg",
    description: "Description 1",
    title: "Body Sope"
  },
  {
    image: "../src/assets/BodycarePhoto/37.jpeg",
    description: "Description 1",
    title: "Body Wash"
  }
];

export default Allproduct;
