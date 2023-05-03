// DropdownMenu.js
import React from 'react';
import './DropdownMenu.css';

function DropdownMenu({ items }) {
  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li key={index} className="dropdown-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;