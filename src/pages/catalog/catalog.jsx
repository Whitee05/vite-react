import React, { useState, useEffect } from 'react';
import CatalogCategories from './catalog-categories/catalog-categories';
import CatalogProducts from './catalog-products/catalog-products';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    // Реализация функционала добавления товара в корзину
    console.log('Товар добавлен в корзину:', product);
  };

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    // Загрузка продуктов из API
    let apiUrl = 'https://api.escuelajs.co/api/v1/products?';
    
    if (currentCategory) {
      apiUrl += `category=${currentCategory}&`;
    }

    if (searchTerm) {
      apiUrl += `search=${searchTerm}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [currentCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Выполнить поиск товаров при нажатии на кнопку "Поиск"
    // Можно использовать searchTerm для передачи поискового запроса в URL
    // Например: `fetch(`https://api.example.com/products?search=${searchTerm}`)`
  };

  return ( 
    <>
      <Header />
      <div>
        <CatalogCategories
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            width: '300px',
            marginRight: '10px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'rgb(130, 24, 216)',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Поиск
        </button>
        <CatalogProducts products={products} onAddToCart={addToCart} />
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
