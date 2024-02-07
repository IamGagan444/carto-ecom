const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order", async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    const options = req.body;
    console.log("Options:", options);

    const order = await razorpay.orders.create(options);
    console.log("Order created:", order);

    if (!order) {
      console.error("Error creating order");
      return res.status(500).json({ error: "Failed to create order" });
    }

    res.json(order);
  } catch (err) {
    console.error("Server error:", err);
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET_KEY);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "transaction not legit!" });
  }
  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    payment_id: razorpay_payment_id,
  });
});
app.get("/", (req, res) => {
  res.send("<h1>this is working</h1>");
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
