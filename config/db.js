const mongoose = require("mongoose");

const connectToDb = async () => {
  const DB_URI = `${process.env.DB_HOST}/${process.env.DB}`;
  await mongoose.connect(DB_URI);
  return `DB connected..`;
};

module.exports = connectToDb;
