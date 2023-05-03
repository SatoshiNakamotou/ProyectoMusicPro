import React from 'react';
import './StoreLogo.css';
import logo from './StoreLogo.png';

const StoreLogo = () => {
  return (
    <div className="store-logo">
      <img src={logo} alt="Store Logo" />
    </div>
  );
};

export default StoreLogo;