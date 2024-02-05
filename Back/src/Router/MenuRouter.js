import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../Controller/MenuController.js'

export const menuRouter= express.Router()

menuRouter.get('/', getAllProducts)
menuRouter.get('/:id',getProduct)
menuRouter.post('/', createProduct)
menuRouter.put('/:id', updateProduct)
menuRouter.delete('/:id', deleteProduct)