const Product = require("../model/Product");

const createNewProduct = async (req, res) => {
  try {
    const newProduct = new Product({ ...req.body });
    const highestIdProduct = await Product.findOne({}, { id: 1 }).sort({
      id: -1,
    });
    newProduct.id = (highestIdProduct ? highestIdProduct.id : 0) + 1;
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { _id: 0, __v: 0 }).sort({
      id: 1,
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: +id });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Put the following code in the productsController.js file
const replaceProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: +id });
    if (product) {
      /*
      const replacedProduct = await Product.replaceOne(
        { id: +id },
        { ...req.body, id: +id, _id: product._id }
      ); 
      /// * OR */
      const replacedProduct = await Product.findOneAndReplace(product._id, {
        ...req.body,
        id: +id,
        _id: product._id,
      });
      await replacedProduct.save();

      res.json(replacedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// patchProduct function
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: +id });

    if (product) {
      Object.assign(product, req.body);
      await product.save();

      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: +id });
    if (product) {
      await Product.deleteOne({ id: +id });
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createNewProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
