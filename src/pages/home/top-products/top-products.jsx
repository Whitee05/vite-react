import { useState, useEffect } from "react";
import style from "./top-products.module.css"



const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=${(page - 1) * 10}&limit=5`
        );
        const data = await response.json();

        // Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Invalid data format received:", data);
          setProducts([]); // Set to an empty array to avoid map errors
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchTotalPages = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setTotalPages(Math.ceil(data.length / 10));
      } catch (error) {
        console.error("Error fetching total pages:", error);
      }
    };

    fetchProducts(currentPage);
    fetchTotalPages();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Top Products</h1>
       
      <div id="top-products-container" className="top-products-container"
        style={{display: 'flex', flexDirection: 'row', fontSize: 0, }}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.images} alt={product.title} style={{ width: "190px", height: "190px",maxWidth: '100%', height: 'auto',margin: '20px', justifyContent: ''  }} />
              <p>{product.name}</p>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
         Prev
        </button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopProducts;


