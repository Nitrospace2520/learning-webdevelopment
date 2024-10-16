const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be at least 0"],
  },
  discountPercentage: {
    type: Number,
    default: 0,
    min: [0, "Discount must be at least 0"],
    max: [100, "Discount must be at most 100"],
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "Rating must be at least 0"],
    max: [5, "Rating must be at most 5"],
  },
  stock: Number,
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: String,
  images: [String],
});

module.exports = mongoose.model("Product", productSchema, "products");
