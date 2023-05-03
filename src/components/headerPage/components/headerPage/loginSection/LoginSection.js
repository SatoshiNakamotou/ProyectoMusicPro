import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSection.css';

const LoginSection = () => {
  return (
    <div className="login-section">
      <button className="button-style">Iniciar Sesión</button>
      <Link to="/registro" className="button-style">Registrarse</Link>
    </div>
  );
};

export default LoginSection;