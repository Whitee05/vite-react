import React from "react";
import style from "./catalog-products.module.css";

const CatalogProducts = ({ products, onAddToCart }) => {
  const handleAddToCart = (product) => {
    // Вызываем функцию onAddToCart, передавая информацию о товаре
    onAddToCart(product);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className={style.container}>
          {products.map((product) => (
            <div key={product.id} className={style.card}>
              <img
                style={{ width: "200px" }}
                src={product.images}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogProducts;
