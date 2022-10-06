const { aggregateProducts, aggregateCart } = require('./helper');
const Cart = require('./model');

const add = async (user, data) => {
  try {
    let cart = await Cart.findOne({ user });
    if (cart) {
      const newCart = aggregateProducts(cart, data.products);
      cart.products = newCart.products;
      cart.totalProducts = newCart.totalProducts;
      cart.totalPrice = newCart.totalPrice;
      cart.save();
      return { status: true, data: cart };
    }

    cart = await Cart.create(data);
    return { status: true, data: cart };
  } catch (error) {
    return { status: false, error: error };
  }
};

const read = async (user, populateOptions = []) => {
  try {
    console.log(user);
    const result = await Cart.findOne({ user }).populate(populateOptions);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

const empty = async (user) => {
  try {
    let cart = await Cart.findOne({ user });
    console.log(cart);
    cart.products = [];
    cart.totalProducts = 0;
    cart.totalPrice = 0;
    cart.save();
    return { status: true, data: cart };
  } catch (error) {
    return { status: false, error: error };
  }
};

const remove = async (user, filter) => {
  try {
    let cart = await Cart.findOne({ user });
    const newCart = aggregateCart(cart, filter);
    cart.products = newCart.products;
    cart.totalPrice = newCart.totalPrice;
    cart.totalPrice = newCart.totalPrice;
    cart.save();
    return { status: true, data: cart };
  } catch (error) {
    return { status: false, error: error };
  }
};

module.exports = { add, read, empty, remove };
