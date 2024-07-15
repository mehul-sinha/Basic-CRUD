const express = require("express");
const app = express();
const mongoose = require("mongoose");

//importing product routes
const productRoute = require("./routes/product.route.js");

//importing the mongoose model
const Product = require("./models/product.model.js");

// middlewares
//configure middleware to be able to pass JSON data
app.use(express.json());

//configure middleware to include form URL encoded data
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "insert valid connection string"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connected to the database");
  });
