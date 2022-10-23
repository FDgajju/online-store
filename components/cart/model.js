const { model } = require('mongoose');
const cartSchema = require('./schema');

// TODO: Schema should present in this file, their no need to create another file for defining the schema
const Cart = model('Cart', cartSchema);
module.exports = Cart;
