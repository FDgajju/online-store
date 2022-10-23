const User = require('./model');

/**
 * 
 * @param {*} data 
 * @returns 
 */
const add = async (data) => {
  try {
    const result = await User.create(data);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

/**
 * 
 * @param {*} id 
 * @param {*} populateOptions 
 * @returns 
 */
const read = async (id, populateOptions = []) => {
  try {
    const result = await User.findOne({ _id: id }).populate(populateOptions);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

/**
 * 
 * @param {*} filter 
 * @param {*} populateOptions 
 * @returns 
 */
const readAll = async (filter = {}, populateOptions = []) => {
  try {
    const results = await User.find(filter).populate(populateOptions);
    return { status: true, data: results };
  } catch (error) {
    return { status: false, error: error };
  }
};

/**
 * 
 * @param {*} id 
 * @param {*} data 
 * @returns 
 */
const modify = async (id, data) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true, runValidators: true }
    );
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

/**
 * 
 * @param {*} id 
 * @returns 
 */
const remove = async (id) => {
  try {
    const result = await User.deleteOne({ _id: id });
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};



module.exports = { add, read, readAll, modify, remove };
