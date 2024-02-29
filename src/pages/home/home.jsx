import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/header.jsx";
import styles from "./home.module.css";
import videoBG from "../../assets/video/Street.mp4";
import Footer from "../../components/footer/footer";
import CategoriesCatalog from "./categories/categories.jsx";
import TopProducts from "./top-products/top-products.jsx";



function Home() {
  return (
    <>
      <Header />
      <div>
        <div className={styles.video_content}>
          <video src={videoBG} autoPlay muted loop></video>
        </div>
        <div className={styles.text_content}>
          <h1>
            Добро пожаловать в наш интернет-магазин! Наша компания приветствует
            всех, кто зашёл на сайт! Наш интернет-магазин предлагает самые
            низкие цены, даже и не пытайтесь найти дешевле! Наша компания
            существует уже много лет, на рынке мы являемся самой надёжной и
            успешной компанией. Покупайте в нашем интернет-магазине снова и
            снова.» Поверьте, у нас есть всё необходимое. Вашему вниманию самый
            широкий ассортимент товаров на всём рынке. Ждём вас за покупками
            каждый день, мы всегда к вашим услугам!
          </h1>
        </div>
      </div>

      <CategoriesCatalog />
      <TopProducts />

      <Footer />
    </>
  );
}

export default Home;
