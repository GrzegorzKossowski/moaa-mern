import { asyncHandler } from '../middleware/async.js'
import { ErrorResponse } from '../middleware/ErrorResponse.js'
import jwt from 'jsonwebtoken'

/**
 * @descr   Auth user & get token
 * @route   POST /api/v1/users/login
 * @access  Public
 */
export const authUser = asyncHandler(async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body

  const token = jwt.sign({ email }, "secret", {
    expiresIn: "1d"
  })

  const users = [
    {
      email: 'john@doe.com',
      password: 'john123'
    }
  ]

  let error = false
  if (error) {
    return next(new ErrorResponse(`User not created`, 400))
  }

  const theResponse = {
    success: true,
    message: `User authenticated, token created.`,
    email,
    password,
    firstName,
    lastName,
    token,
    data: []
  }

  console.log(theResponse);

  res.status(200).json(theResponse)
})


// export const createUser = asyncHandler(async (req, res, next) => {
//   let error = false
//   if (error) {
//     return next(new ErrorResponse(`User not created`, 400))
//   }
//   res.status(200).json({ success: true, message: `New user created.`, data: [] })
// })

// export const getUsers = asyncHandler(async (req, res, next) => {
//   let error = false
//   if (error) {
//     return next(new ErrorResponse(`Could not read users`, 404))
//   }
//   res.status(200).json({ success: true, message: `All users geted.`, data: [] })
// })

// export const getUserById = asyncHandler(async (req, res, next) => {
//   let error = false
//   if (error) {
//     return next(new ErrorResponse(`Could not read user`, 404))
//   }
//   res.status(200).json({ success: true, message: `User by ${req.params.id} ID geted.`, data: [] })
// })

// export const updateUserById = asyncHandler(async (req, res, next) => {
//   let error = false
//   if (error) {
//     return next(new ErrorResponse(`Could not update user`, 404))
//   }
//   res.status(200).json({ success: true, message: `User updated.`, data: [] })
// })

// export const deleteUserById = asyncHandler(async (req, res, next) => {
//   let error = false
//   if (error) {
//     return next(new ErrorResponse(`Could not delete user`, 404))
//   }
//   res.status(200).json({ success: true, message: `User deleted.`, data: [] })
// })