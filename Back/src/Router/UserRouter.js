import express from 'express'
import { createUsers, deleteUser, getAllUsers, getUser, updateUsers } from '../Controller/UserController.js'
import { authMiddleware } from '../Middleware/authMiddleware.js'

export const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:id', authMiddleware(["User", "Admin"]), getUser)
userRouter.post('/', authMiddleware(["Admin"]), createUsers)
userRouter.put('/:id', authMiddleware(["Admin"]), updateUsers)
userRouter.delete('/:id', authMiddleware(["Admin"]), deleteUser)