import asyncHandler from 'express-async-handler'
import Product from '../models/product.model.js'

export const createProduct = asyncHandler(async (req, res, next) => {
  res.json({ message: "createProduct" })
})

export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({})
  res.json(products)
})

export const getProductById = asyncHandler(async (req, res, next) => {
  res.json({ message: "getProductById" })
})

export const updateProductById = asyncHandler(async (req, res, next) => {
  res.json({ message: "updateProductById" })
})

export const deleteProductById = asyncHandler(async (req, res, next) => {
  res.json({ message: "deleteProductById" })
})
