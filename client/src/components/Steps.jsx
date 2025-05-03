import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-white'>How it works</h1>
        <p className='text-lg text-purple-600 mb-8'>Transform Words Into Stunning Images</p>

        <div className='space-y-4 w-full max-w-3xl text-sm '>
            {stepsData.map((item , index) => (
                
                <div
                key={index}
                className="flex items-center gap-4 p-5 px-8 bg-gradient-to-br from-transparent via-slate-900 to-black  rounded-xl border-2 border-orange-500 shadow-md shadow-orange-400/65 backdrop-blur-lg cursor-pointer hover:scale-[1.03] transition-transform duration-300"
              >
                <img src={item.icon} alt="stepsImage" width={40} className='md:w-20'/>
                <div>
                  <h2 className="text-lg font-semibold text-white md:text-2xl">{item.title}</h2>
                  <p className="text-sm text-gray-300 md:text-xl">{item.description}</p>
                </div>
              </div>
              
            ))}
        </div>


    </div>
  )
}

export default Steps