import React from "react";
import style from "./catalog-categories.module.css";

const CatalogCategories = ({ categories, onCategoryChange }) => {
  return (
    <div>
      <h2>Categories</h2>
      <div className={style.catalog_content}>
        {categories.map((category) => (
          <div key={category.id} onClick={() => onCategoryChange(category.id)}>
            <p className={style.categories_name}> {category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogCategories;
