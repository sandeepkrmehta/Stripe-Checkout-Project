import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}

export default App;
