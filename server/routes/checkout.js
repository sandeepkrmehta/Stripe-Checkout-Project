
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const Order = require("../models/Order");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const { email, items } = req.body;

  try {
    // Calculate the total amount
    const total = items.reduce((sum, item) => sum + item.price, 0);

    // Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price,
        },
        quantity: 1,
      })),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
    });

    // Save the order to the database
    const order = new Order({
      email,
      items,
      total,
      status: "pending",
    });
    await order.save();

    //Stripe session URL
    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;