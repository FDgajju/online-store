const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    return `DB connected..`;
  } catch {
    return `DB is not connected`;
  }
};

module.exports = connectToDb;
