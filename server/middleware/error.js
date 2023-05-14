import { ErrorResponse } from './ErrorResponse.js';

export const errorHandler = (err, req, res, next) => {

  let error = { ...err }
  error.message = err.message

  if (err.code === 11000) {
    error = new ErrorResponse(
      `Duplicate field value`, 400
    )
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors)
    error = new ErrorResponse(
      messages, 400
    )
  }

  if (err.name === 'CastError') {
    const messages = `Bootcamp not found with id of ${err.value}`
    error = new ErrorResponse(
      messages, 404
    )
  }



  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}