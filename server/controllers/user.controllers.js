import asyncHandler from 'express-async-handler'
import User from '../models/user.model.js'

export const registerUser = asyncHandler(async (req, res, next) => {
  res.json({ message: "registerUser" })
})

export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({})
  res.json(users)
})

export const getUserById = asyncHandler(async (req, res, next) => {
  res.json({ message: "getUserById" })
})

export const updateUserById = asyncHandler(async (req, res, next) => {
  res.json({ message: "updateUserById" })
})

export const deleteUserById = asyncHandler(async (req, res, next) => {
  res.json({ message: "deleteUserById" })
})
