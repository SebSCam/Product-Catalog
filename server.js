const express = require("express");
const app = express();
const products = [];

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add-product", function (req, res) {
  products.push("Name:" + req.body.product + " Cost:" + req.body.cost);
  console.log(products);
});

app.get("/show", function (req, res) {
  res.status(200);
  let msg = "";
  for (let index = 0; index < products.length; index++) {
    msg += products[index] + ";";
  }
  res.send(msg);
});

app.listen(3000, () => {
  console.log("Server running http://localhost:3000");
});
