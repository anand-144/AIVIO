import express from 'express'
import {registerUser , loginUser , resetPassword} from '../controllers/userControllers.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)
userRouter.post('/reset-password', resetPassword)

export default userRouter