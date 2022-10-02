const { model } = require('mongoose');
const productSchema = require('./schema');

const Product = model('Product', productSchema);
module.exports = Product;
