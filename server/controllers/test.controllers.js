import asyncHandler from 'express-async-handler'

const getTests = asyncHandler(async (req, res, next) => {
  res.json({ message: "getTests = so many tests" })
})
const createTest = asyncHandler(async (req, res, next) => {
  res.json({ message: "getTests = so many tests" })
})
const readTest = asyncHandler(async (req, res, next) => {
  res.json({ message: "getTests = so many tests" })
})
const updateTest = asyncHandler(async (req, res, next) => {
  res.json({ message: "getTests = so many tests" })
})
const deleteTest = asyncHandler(async (req, res, next) => {
  res.json({ message: "getTests = so many tests" })
})


export { getTests, createTest, readTest, updateTest, deleteTest }