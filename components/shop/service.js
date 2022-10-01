const Shop = require('./model');

const add = async (data) => {
  try {
    const result = await Shop.create(data);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

const read = async (id, populateOptions = []) => {
  try {
    const result = await Shop.findOne({ _id: id }).populate(populateOptions);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

const readAll = async (filter = {}, populateOptions = []) => {
  try {
    const results = await Shop.find(filter).populate(populateOptions);
    return { status: true, data: results };
  } catch (error) {
    return { status: false, error: error };
  }
};

const modify = async (filter, data) => {
  try {
    if (typeof filter !== 'object' || !Object.keys(filter).length) {
      return { status: false, error: 'filter object is empty' };
    }

    const result = await Shop.findOneAndUpdate(
      filter,
      { $set: data },
      { new: true, runValidators: true }
    );

    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

const remove = async (filter) => {
  try {
    if (typeof filter !== 'object' || !Object.keys(filter).length) {
      return { status: false, error: 'filter object is empty' };
    }

    const result = await Shop.deleteOne(filter);
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

module.exports = { add, read, readAll, modify, remove };
