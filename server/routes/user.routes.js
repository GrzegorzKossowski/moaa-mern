import express from 'express'
const router = express.Router()
import { getUsers, getUserById, updateUserById, deleteUserById, registerUser } from '../controllers/user.controllers.js'

router
  .route('/')
  .get(getUsers)
  .post(registerUser)

router
  .route('/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById)

export default router

