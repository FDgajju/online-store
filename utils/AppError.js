//TODO: Rename this function and add comments 
class AppError extends Error {
  constructor(error, statusCode) {
    if (typeof error === 'object' && error !== null) {
      super(error.message);

      this.name = error.name || 'AppError';
      this.code = error.code || null;
      this.statusCode = error.statusCode || 500;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.details = { ...error };
    } else {
      super(error);

      this.code = error?.code || null;
      this.statusCode = error?.statusCode || 500;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    }
  }
}

module.exports = AppError;
