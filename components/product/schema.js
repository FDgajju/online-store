const { Schema } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'product name is required'],
    },

    owner: String,

    shop_id: {
      type: String,
      required: [true, 'A store needs it owner'],
    },

    image: String,

    category: {
      type: String,
      required: [true, 'Please provide us the type of your shop.'],
    },

    price: String,
    tags: [String],
    description: String,
    summary: String,

    isVeg: Boolean,

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

productSchema.virtual('shop', {
  ref: 'Shop',
  localField: 'shop_id',
  foreignField: '_id',
  justOne: true,
});

productSchema.virtual('ownerBy', {
  ref: 'User',
  localField: 'owner',
  foreignField: '_id',
  justOne: true,
});

module.exports = productSchema;
