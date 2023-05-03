import React from 'react';
import './shoppingCard.css';
import imagen_producto1 from './imagen_producto1.png';

const ShoppingCart = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={imagen_producto1} alt="Producto" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;