// MenuUp.js
import React, { useState } from 'react';
import './MenuUp.css';
import DropdownMenu from './DropdownMenu';

function MenuUp() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const menuItems = [
    'Guitarras',
    'Bajos',
    'Teclados',
    'Flautas',
    'Percusión',
    'Otros instrumentos',
  ];

  const dropdownItems = [
    'TipoInstrumento1',
    'TipoInstrumento2',
    'TipoInstrumento3',
    'TipoInstrumento4',
  ];

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="menu-item"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            {item}
            {activeIndex === index && <DropdownMenu items={dropdownItems} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuUp;