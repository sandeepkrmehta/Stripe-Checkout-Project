import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you .</p>
      <Link to="/">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default SuccessPage;
