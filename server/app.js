const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products"));
app.use("/api/checkout", require("./routes/checkout"));


//server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});