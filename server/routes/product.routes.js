import express from 'express'
const router = express.Router()
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById } from '../controllers/product.controllers.js'

router
  .route('/')
  .get(getProducts)
  .post(createProduct)

router
  .route('/:id')
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById)

export default router

