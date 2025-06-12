import express from 'express'
import { registerUser, loginUser, resetPassword, userCredits, loginWithGoogle } from '../controllers/userControllers.js'
import userAuth from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/reset-password', resetPassword)
userRouter.post('/credits', userAuth, userCredits) // ✅ Middleware applied
userRouter.post('/google-login', loginWithGoogle) // Assuming Google login is handled in the same controller

export default userRouter
