import React, { useState } from "react";
import axios from "axios";

function CheckoutPage() {
  const [email, setEmail] = useState("");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleCheckout = async () => {
    const response = await axios.post("http://localhost:5000/api/checkout", {
      email,
      items: cart,
    });
    window.location.href = response.data.url;
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default CheckoutPage;