import React from 'react'
import { GiStarsStack } from 'react-icons/gi'

const GenerateButton = () => {
  return (
    <div className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-6xl mt-4 font-semibold text-purple-600 py-6'>
        See the <span className='text-orange-500'>magic.</span> Try now
      </h1>

      <button className='mx-auto flex items-center justify-center text-sm sm:text-lg text-white font-semibold bg-gradient-to-tl from-orange-500 to-purple-900 w-fit px-6 sm:px-12 py-2.5 gap-2 rounded-full hover:scale-105 transition-all duration-500'>
        Generate Images
        <GiStarsStack className='text-yellow-400 text-2xl h-6' />
      </button>
    </div>
  )
}

export default GenerateButton
