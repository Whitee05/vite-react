import React, { useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header />
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>cart empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                {/* Другая информация о товаре */}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
