const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(process.env.mongodb_connection_string)
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("Hey i am Running at : 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
