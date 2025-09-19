export const sendErrorResponse = (res, err) => {
  const statusCode = err.status;
  const message = err.message;

  res.status(statusCode).json({
    sucess: false,
    message,
  });
};

export const sendResponse = (res, data, status) => {
  res.status(status).json({
    sucess: true,
    data,
  });
};
