import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../Controller/MenuController.js'
import { storage } from '../Middleware/upload.js'
import multer from 'multer'

const upload = multer({ storage: storage })
export const menuRouter = express.Router()

menuRouter.get('/', getAllProducts)
menuRouter.get('/:id', getProduct)
menuRouter.post('/', upload.single('image') , createProduct)
menuRouter.put('/:id', updateProduct)
menuRouter.delete('/:id', deleteProduct)