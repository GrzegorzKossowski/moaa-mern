import { asyncHandler } from '../middleware/async.js'
import { ErrorResponse } from '../middleware/ErrorResponse.js'

export const createTest = asyncHandler(async (req, res, next) => {
  let error = false
  if (error) {
    return next(new ErrorResponse(`Not created`, 400))
  }
  res.status(200).json({ success: true, message: `New test created.`, data: { message: "some data" } })
})

export const getTests = asyncHandler(async (req, res, next) => {
  let error = false
  if (error) {
    return next(new ErrorResponse(`Could not read tests`, 404))
  }
  res.status(200).json({ success: true, message: `All test geted.`, data: {} })
})

export const getTestById = asyncHandler(async (req, res, next) => {
  let error = false
  if (error) {
    return next(new ErrorResponse(`Could not read tests`, 404))
  }
  res.status(200).json({ success: true, message: `Test ${req.params.id} geted.`, data: {} })
})

export const updateTestById = asyncHandler(async (req, res, next) => {
  let error = false
  if (error) {
    return next(new ErrorResponse(`Could not read tests`, 404))
  }
  res.status(200).json({ success: true, message: `New test created.`, data: {} })
})

export const deleteTestById = asyncHandler(async (req, res, next) => {
  let error = false
  if (error) {
    return next(new ErrorResponse(`Could not read tests`, 404))
  }
  res.status(200).json({ success: true, message: `New test created.`, data: {} })
})