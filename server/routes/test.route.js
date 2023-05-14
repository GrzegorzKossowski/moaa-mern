import express from 'express'
import { getTests, getTestById, createTest, updateTestById, deleteTestById } from '../controllers/test.controller.js'
const router = express.Router()

router
  .route("/")
  .get(getTests)
  .post(createTest)

router
  .route('/:id')
  .get(getTestById)
  .put(updateTestById)
  .delete(deleteTestById)

export default router