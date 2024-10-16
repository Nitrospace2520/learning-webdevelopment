const express = require("express");
const productRouter = express.Router();
const {
  createNewProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productsController");

productRouter.route("/").get(getAllProducts).post(createNewProduct);

productRouter
  .route("/:id")
  .get(getProduct)
  .put(replaceProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;
