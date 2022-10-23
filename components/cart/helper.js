// TODO: name of function must be clear, right now it's aggregateProducts which is misleading.
/**
 * 
 * @param {*} cart 
 * @param {*} newProduct 
 * @returns 
 */
const aggregateProducts = (cart, newProduct) => {
  const addedProducts = cart.products;
  let flag = 0;
  addedProducts.forEach((item, idx) => {
    console.log(item.product, newProduct);
    if (item.product === newProduct.product) {
      flag = 1;
      addedProducts[idx].quantity++;
      // addedProducts[idx].price = newProduct.price * addedProducts[idx].quantity;
    }
  });

  flag === 0 && addedProducts.push(newProduct);

  cart.totalProducts = addedProducts.length;
  cart.products = addedProducts;
  let totalPrice = 0;

  addedProducts.forEach((el) => (totalPrice += el.price * el.quantity));
  cart.totalPrice = totalPrice;

  return cart;
};

// TODO: Rename this function.
/**
 * 
 * @param {*} cart 
 * @param {*} filter 
 * @returns 
 */
const aggregateCart = (cart, filter) => {
  let allProducts = cart.products;

  const productIdx = allProducts.findIndex(
    (el) => el.product === filter.product
  );

  if (productIdx === -1) return cart;

  const product = allProducts[productIdx];

  if (!filter.count || product.quantity - filter.count <= 0) {
    allProducts.splice(productIdx, 1);
    cart.products = allProducts;
    cart.totalPrice -= product.price * product.quantity;
    cart.totalProducts = cart.products.length;
    return cart;
  } else if (product.quantity == 1) {
    allProducts.splice(productIdx, 1);
    cart.products = allProducts;
    cart.totalPrice -= product.price;
    cart.totalProducts = cart.products.length;
    return cart;
  }

  allProducts[productIdx].quantity -= filter.count;
  cart.products = allProducts;
  cart.totalPrice -= product.price * filter.count;
  cart.totalProducts = cart.products.length;
  return cart;
};

module.exports = { aggregateProducts, aggregateCart };
