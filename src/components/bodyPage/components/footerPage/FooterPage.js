import React from 'react';
import './FooterPage.css';
import MediosPago from './MediosPago.png';

function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>SERVICIO AL CLIENTE</h4>
        <ul>
          <li>Términos y Condiciones</li>
          <li>Orden de Servicio</li>
          <li>Representante Legal</li>
          <li>Bases y Promociones</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>MusicPro EMPRESA</h4>
        <ul>
          <li>Regístrate</li>
          <li>Recuperar Clave</li>
          <li>Cómo Comprar</li>
          <li>Boletas Electrónicas</li>
          <li>Pago Online</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>MusicPro EMPRESA</h4>
        <ul>
          <li>Nuestra Empresa</li>
          <li>Servicio Postventa</li>
          <li>Mapa Pr</li>
        </ul>
      </div>
      <div className="footer-section">
        <img src={MediosPago} alt="Medios de Pago" />
      </div>
    </footer>
  );
}

export default FooterPage;