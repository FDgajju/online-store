const { model } = require('mongoose');
const userSchema = require('./schema');

const User = model('User', userSchema);
module.exports = User;
