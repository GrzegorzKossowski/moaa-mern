export const notFound = (req, res, next) => {

  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (err, req, res, next) => {

  const error = { ...err }
  error.message = err.message

  // [...] more to come

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? "production" : err.stack
  })
}