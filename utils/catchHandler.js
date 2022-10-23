// TODO: add comments
/**
 * 
 * @param {*} fn 
 * @returns 
 */
const catchHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = catchHandler;
