import React from 'react';
import Catalog from '../../catalog/catalog';

const Tabs = ({ categories, onTabChange }) => {
  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onTabChange(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;

  
