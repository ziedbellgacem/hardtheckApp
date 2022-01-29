const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const { validator, productsRules } = require("../middelwares/validator");
const isAuth = require("../middelwares/isAuth");

// /test
router.get("/test", (req, res) => {
  res.send("test ok ");
});

//method Post
//url /
// req.body

router.post(
  "/addproduct",
  [isAuth, productsRules, validator],
  async (req, res) => {
    const { name, description, prix, pictureUrl, category } = req.body;

    try {
      const product = new Product({
        name,
        description,
        prix,
        pictureUrl,
        category,
      });
      await product.save();
      res.send(product);
    } catch (error) {
      console.log(error);
    }
  }
);

//method get
// url /

router.get("/allproducts", isAuth, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ products });
  } catch (error) {
    res.status(500).send("server err");
  }
});
//method delete
//url /:productId
// req.params

router.delete("/deleteproduct/:productId", isAuth, async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    res.send("product deleted");
  } catch (error) {
    res.status(500).send("server err");
  }
});

// method put
// req.body
// req.params
// url /:productId
router.put("/updateproduct/:productId", isAuth, async (req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndUpdate(productId, { $set: { ...req.body } });
    res.send("product update");
  } catch (error) {
    res.send("server err");
  }
});

// findone
// req.params
router.get("/getoneproduct/:productId", isAuth, async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.send({ product });
  } catch (error) {
    res.send("server err");
  }
});
// findone by name
// req.body
router.get("/getoneproduct", isAuth, async (req, res) => {
  const { name } = req.body;
  try {
    const product = await Product.findOne({ name });
    res.send(product);
  } catch (error) {
    res.send("server err");
  }
});

module.exports = router;
