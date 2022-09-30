const { Schema } = require('mongoose');

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Shop name is required'],
    },

    owner: {
      type: String,
      required: [true, 'A store needs it owner'],
    },

    type: {
      type: String,
      required: [true, 'Please provide us the type of your shop.'],
    },

    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: [Number],
    },

    address: {
      city: String,
      state: String,
      street: String,
      locality: String,
      pin: String,
      rawAddress: String,
    },

    isOpen: {
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

shopSchema.virtual('owned_by', {
  ref: 'User',
  localField: 'owner',
  foreignField: '_id',
  justOne: true,
});

module.exports = shopSchema;
