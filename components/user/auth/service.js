const User = require('../model');

const checkCredentials = async (email) => {
  try {
    const result = await User.findOne({ email });
    return { status: true, data: result };
  } catch (error) {
    return { status: false, error: error };
  }
};

module.exports = { checkCredentials };
