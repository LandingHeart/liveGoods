const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
    default: new Date(),
  },
});
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
