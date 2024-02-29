import { useState, useEffect } from "react";
import style from "./categories.module.css";

const CategoriesCatalog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <div id="categories-container" className={style.categories_container}>
        {categories.map((category) => (
          <div key={category.id} className={style.category_item}>
            <p>{category.name}</p>
            <img
              className={style.img}
              src={category.image}
              alt={category.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCatalog;
