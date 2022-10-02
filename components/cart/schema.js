const { Schema } = require('mongoose');

const cartSchema = new Schema({
  products: [String],
  user: String,
  totalProducts: Number,
  totalPrice: Number,
});

module.exports = cartSchema;
