const express = require("express");
const router = express.Router();

// product data
const products = [
  { id: 1, name: "Product A", price: 2000 },
  { id: 2, name: "Product B", price: 3000 },
  { id: 3, name: "Product C", price: 4000 },
  { id: 4, name: "Product D", price: 5000 },
  { id: 5, name: "Product E", price: 6000 },
  { id: 6, name: "Product F", price: 7000 },
  { id: 7, name: "Product G", price: 8000 },
  { id: 8, name: "Product H", price: 9000 },
];

//  products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;