exports.errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  return res.status(status).json({
    status,
    message: err.message || "Internal server error",
  });
};
