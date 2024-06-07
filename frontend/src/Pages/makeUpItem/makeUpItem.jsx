
import Sidebar from "./../../Components/Sidebar/sidebar";
import './makeUpItem.css' 
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
    image: "../src/assets/MakeUpPhoto/33.jpg",
    description: "Description 1",
    title: "Eye Shadow"
  },
  {
    image: "../src/assets/MakeUpPhoto/32.jpg",
    description: "Description 1",
    title: "Lip Stick"
  },
  {
    image: "../src/assets/MakeUpPhoto/11.jpeg",
    description: "Description 1",
    title: "Eye Shadow"
  },
  {
    image: "../src/assets/MakeUpPhoto/34.jpg",
    description: "Description 1",
    title: "Foundations Cream"
  },
  {
    image: "../src/assets/MakeUpPhoto/19.jpeg",
    description: "Description 1",
    title: "Lip Stick"
  },
  {
    image: "../src/assets/MakeUpPhoto/21.jpeg",
    description: "Description 1",
    title: "Mascara"
  }
];

export default Allproduct;
