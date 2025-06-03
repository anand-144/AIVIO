import React, { useEffect, useState } from 'react'
import { RiRobot3Line } from "react-icons/ri"
import { MdOutlineEmail, MdLockOutline, MdOutlineClose } from "react-icons/md"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { SlSocialGoogle } from "react-icons/sl"
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import { motion } from 'framer-motion'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [state, setState] = useState('Login')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { setShowLogin } = useContext(AppContext)

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const toggleState = () => {
    setState(prev => (prev === 'Login' ? 'Register' : 'Login'))
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/50 flex justify-center items-center'>
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        className='relative bg-white/60 p-10 rounded-xl text-slate-900 w-full max-w-md'>
        <h1 className='text-center text-2xl text-purple-700 font-medium'>{state}</h1>
        <p className='text-md text-center text-white'>
          {state === 'Login' ? 'Welcome back! Please login to continue' : 'Create your account to get started'}
        </p>

        {state === 'Register' && (
          <div className='border px-6 py-3 flex items-center gap-2 rounded-full mt-4'>
            <RiRobot3Line className='text-xl' />
            <input
              type="text"
              placeholder='Full Name'
              required
              className='outline-none text-md bg-transparent w-full placeholder:text-black'
            />
          </div>
        )}

        <div className='border px-6 py-3 flex items-center gap-2 rounded-full mt-4'>
          <MdOutlineEmail className='text-xl' />
          <input
            type="email"
            placeholder='Email Id'
            required
            className='outline-none text-md bg-transparent w-full placeholder:text-black'
          />
        </div>

        <div className='border px-6 py-3 flex items-center justify-between rounded-full mt-4'>
          <div className='flex items-center gap-2 w-full'>
            <MdLockOutline className='text-xl' />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              required
              className='outline-none text-md bg-transparent w-full placeholder:text-black'
            />
          </div>
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="text-xl ml-2"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        {state === 'Register' && (
          <div className='border px-6 py-3 flex items-center justify-between rounded-full mt-4 '>
            <div className='flex items-center gap-2 w-full '>
              <MdLockOutline className='text-xl' />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='outline-none text-md bg-transparent w-full placeholder:text-black'
              />
            </div>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(prev => !prev)}
              className="text-xl ml-2"
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        )}

        {state === 'Login' && (
          <div className='flex justify-between items-center mt-4'>
            <label className='flex items-center gap-2 text-sm cursor-pointer'>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(prev => !prev)}
                className='accent-blue-600'
              />
              Remember me
            </label>
            <p className='text-sm text-blue-600 cursor-pointer'>
              Forgot password?
            </p>
          </div>
        )}

        <button className='bg-blue-600 w-full text-white py-2 rounded-full my-4'>
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        <button className='flex items-center justify-center gap-2 bg-gradient-to-l from-[#4285f4] via-[#ea4335] to-[#59f182] w-full text-white py-2 rounded-full mt-2'>
          <SlSocialGoogle className='text-xl' />
          {state === 'Login' ? 'Google Login' : 'Google Signup'}
        </button>

        <p className='mt-5 text-center'>
          {state === 'Login' ? (
            <>Don't have an account?{' '}
              <span onClick={toggleState} className='text-blue-600 cursor-pointer'>Register</span></>
          ) : (
            <>Already have an account?{' '}
              <span onClick={toggleState} className='text-blue-600 cursor-pointer'>Login</span></>
          )}
        </p>

        <MdOutlineClose className='absolute top-5 right-5 cursor-pointer text-xl' onClick={() => setShowLogin(false)} />
      </motion.form>
    </div>
  )
}

export default Login
