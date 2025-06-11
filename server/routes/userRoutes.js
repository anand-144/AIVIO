import express from 'express'
import { registerUser, loginUser, resetPassword, userCredits } from '../controllers/userControllers.js'
import userAuth from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/reset-password', resetPassword)
userRouter.post('/credits', userAuth, userCredits) // ✅ Middleware applied

export default userRouter
