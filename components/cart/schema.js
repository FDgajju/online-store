const { Schema } = require('mongoose');

const cartSchema = new Schema(
  {
    products: [
      {
        product: String,
        quantity: { type: Number, default: 1 },
        price: Number,
      },
    ],
    user: String,
    totalProducts: Number,
    totalPrice: Number,
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

cartSchema.virtual('my_products', {
  ref: 'Product',
  localField: 'products.product',
  foreignField: '_id',
});

module.exports = cartSchema;
