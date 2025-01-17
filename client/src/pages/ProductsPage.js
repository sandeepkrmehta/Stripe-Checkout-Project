import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ||  [];
  });
  
  

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products`).then((response) => {
      setProducts(response.data);
    });
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - ${(product.price / 100).toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <Link to="/cart">Go to Cart ({cart.length})</Link>
    </div>
  );
}

export default ProductsPage;