
import React, { useState } from 'react';
import './item.css';
import ItemHeder from './../../Components/ItemHeader/itemHeder';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
   
    <div>
        <ItemHeder/>
    <div className="product-container">
        
      <div className="product-images">
        <img src="../src/assets/ItemPhoto/16.png" alt="Glowy Lip Balm Peach" className="main-image" />
        <div className="small-images">
          <img src="../src/assets/ItemPhoto/27.png" alt="Glowy Lip Balm Peach" />
          <img src="../src/assets/ItemPhoto/28.png" alt="Glowy Lip Balm Peach Back" />
        </div>
      </div>
      <div className="product-details">
        <h1>Glowy Lip Balm Peach</h1>
        <p>15 ml</p>
        <p>Glow on the go with our Lip Balm Peach! A subtle pink shine to add a pop of colour and hydration to your lips.</p>
        <p className="price">LKR 790.00</p>
        <div className="quantityControl">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="action-buttons">
          <button className="buy-now">BUY NOW</button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
