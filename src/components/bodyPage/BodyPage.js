import React from 'react';
import MenuUp from './components/menuUp/MenuUp';
import BodyImage from './components/BodyImage/BodyImage';
import ShoppingCard from './components/shoppingCard/shoppingCard';
import FooterPage from './components/footerPage/FooterPage';
import './BodyPage.css';

function BodyPage() {
  const product = {
    name: 'Guitarra eléctrica',
    description: 'Guitarra eléctrica de alta calidad',
    price: 999.99,
  };

  return (
    <div className="container-body">
      <div className="container-MenuUp">
        <MenuUp />
      </div>
      <div className="container-BodyImage">
        <BodyImage />
      </div>
      <div className="container-ProductosDestacados">
        <h1 className="Productos-Destacados" >Productos Destacados</h1>
      </div>
      <div className="container-ProductCards">
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
      </div>
      <div className="container-ProductCards">
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
        <div className="container-ProductCard">
          <ShoppingCard product={product} />
        </div>
      </div>
      <div className="container-Footer">
          <FooterPage/>
        </div>
    </div>
  );
}

export default BodyPage;