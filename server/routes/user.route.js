import express from 'express'
import { authUser } from '../controllers/user.controller.js'

const router = express.Router()

router
  .route("/login")
  .post(authUser)
// .get(getUsers)


// router
//   .route('/:id')
//   .get(getUserById)
//   .put(updateUserById)
//   .delete(deleteUserById)

export default router