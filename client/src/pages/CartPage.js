import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); 
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ${(item.price / 100).toFixed(2)}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default CartPage;