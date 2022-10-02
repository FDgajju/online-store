const { model } = require('mongoose');
const cartSchema = require('./schema');

const Cart = model('Cart', cartSchema);
module.exports = Cart;
