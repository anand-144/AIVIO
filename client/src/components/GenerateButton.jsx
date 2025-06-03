import React, { useContext } from 'react'
import { GiStarsStack } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'

const GenerateButton = () => {

   const {user , setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = ()=>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }
    }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-6xl mt-4 font-semibold text-purple-600 py-6'>
        See the <span className='text-orange-500'>magic.</span> Try now
      </h1>
        <button
        onClick={onClickHandler}
        className='mx-auto flex items-center justify-center text-sm sm:text-lg text-white font-semibold bg-gradient-to-tl from-orange-500 to-purple-900 w-fit px-6 sm:px-12 py-2.5 gap-2 rounded-full hover:scale-105 transition-all duration-500'>
          Generate Images
          <GiStarsStack className='text-yellow-400 text-2xl h-6' />
        </button>
    </motion.div>
  )
}

export default GenerateButton
