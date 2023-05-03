import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Buscar..." className="search-input" />
      <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;