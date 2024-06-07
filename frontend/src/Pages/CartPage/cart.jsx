import React, { useState } from 'react';
import './cart.css';

const initialProducts = [
  { id: 1, name: 'Prevense Toner - 100ml', price: 600, quantity: 1, imageUrl: 'toner.jpg' },
  { id: 2, name: 'Matte Color Lipstick', price: 2100, quantity: 1, imageUrl: 'lipstick.jpg' },
  { id: 3, name: 'Prevense Anti-Acne- Balancing Toner 100ml', price: 1190, quantity: 1, imageUrl: 'anti_acne_toner.jpg' },
  { id: 4, name: 'Nail Polish', price: 850, quantity: 1, imageUrl: 'nail_polish.jpg' }
];

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);
  const shippingCost = 300;

  const handleIncrease = (id) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
  };

  const handleDecrease = (id) => {
    setProducts(products.map(product => product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product));
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="shopping-cart">
      <div className="cart-items">
        {products.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <span className="product-name">{product.name}</span>
            <div className="quantity-controls">
              <button onClick={() => handleDecrease(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleIncrease(product.id)}>+</button>
            </div>
            <span className="product-price">LKR {product.price * product.quantity}</span>
            <button className="delete-button" onClick={() => handleDelete(product.id)}>🗑️</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-item">
          <span>SUBTOTAL</span>
          <span>LKR {subtotal}</span>
        </div>
        <div className="summary-item">
          <span>SHIPPING</span>
          <span>LKR {shippingCost}</span>
        </div>
        <div className="summary-item total">
          <span>TOTAL</span>
          <span>LKR {total}</span>
        </div>
        <button className="checkout-button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Shop;
