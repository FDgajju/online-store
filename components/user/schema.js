const { Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },

  phone: {
    type: Number,
    required: [true, 'number is required.'],
    unique: [true, 'number already registered please login.'],
    minlength: 10,
    maxlength: 10,
  },

  email: {
    type: String,
    required: [true, 'number is required.'],
    unique: [true, 'number already registered please login.'],
  },

  password: {
    type: String,
    required: [true, 'password is mandatory'],
  },

  role: {
    type: String,
    enum: ['ShopKeeper', 'Admin'],
    default: 'Admin',
  },
});

module.exports = userSchema;
