
import React from "react";
import { Link } from "react-router-dom";

function FailurePage() {
  return (
    <div>
      <h1>Payment Failed</h1>
      <p>Please try again.</p>
      <Link to="/checkout">
        <button>Retry Payment</button>
      </Link>
    </div>
  );
}

export default FailurePage;