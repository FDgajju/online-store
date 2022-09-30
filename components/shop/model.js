const { model } = require('mongoose');
const shopSchema = require('./schema');

const Shop = model('Shop', shopSchema);
module.exports = Shop;
