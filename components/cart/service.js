const Cart = require('./model');

const add = async (filter, data) => {
  try {
    const cart = await Cart.findOne(filter);
    if (cart) {
      cart.products.push(data.products);
      cart.save();
      return { status: true, data: cart };
    }

    const newCart = await Cart.create(data);
    return { status: true, data: newCart };
  } catch (error) {
    return { status: false, error: error };
  }
};

const read = async (filter, populateOptions = []) => {
  try {
    const result = await Cart.find(filter).populate(populateOptions);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

module.exports = { add, read };
