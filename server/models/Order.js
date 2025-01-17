
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: { type: Array, required: true },
  total: { type: Number, required: true },
  status: { type: String, default: "pending" }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);