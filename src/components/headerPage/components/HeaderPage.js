import React from 'react';
import StoreLogo from './headerPage/storeLogo/StoreLogo';
import SearchBar from './headerPage/searchBar/SearchBar';
import LoginSection from './headerPage/loginSection/LoginSection';
import ShoppingCart from './headerPage/shoppingCart/shoppingCart';
import './HeaderPage.css'

function HeaderPage() {
  return (
    <div className='container-header'>
      <div className='container-logo'>
        <StoreLogo></StoreLogo>
      </div>
      <div className='container-SearchBar'>
        <SearchBar></SearchBar>
      </div>
      <div className='container-LoginSection'>
        <LoginSection></LoginSection>
      </div>
      <div className='container-ShoppingCart'>
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}

export default HeaderPage;