import Sidebar from "./../../Components/Sidebar/sidebar";
import './hairCare.css' 
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
    image: "../src/assets/haircarePhoto/22.jpeg",
    description: "Description 1",
    title: "Herbal Conditioner"
  },
  {
    image: "../src/assets/haircarePhoto/10.jpeg",
    description: "Description 1",
    title: "Herbal Shampoo"
  },
  {
    image: "../src/assets/haircarePhoto/23.jpeg",
    description: "Description 1",
    title: "Herbal Hair Oil"
  },
  {
    image: "../src/assets/haircarePhoto/31.jpeg",
    description: "Description 1",
    title: "Hair Growth Oil"
  },
  {
    image: "../src/assets/haircarePhoto/26.jpeg",
    description: "Description 1",
    title: "Hair Moisturiser"
  },
  {
    image: "../src/assets/haircarePhoto/24.jpeg",
    description: "Description 1",
    title: "Herbal Shower Gel"
  }
];

export default Allproduct;
