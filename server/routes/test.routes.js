import express from 'express'
const router = express.Router()
import { getTests, createTest, readTest, updateTest, deleteTest } from '../controllers/test.controllers.js'

router
  .route('/')
  .get(getTests)
  .post(createTest)

router
  .route('/:id')
  .get(readTest)
  .put(updateTest)
  .delete(deleteTest)

export default router

