import React, { useContext } from 'react'
import { plans } from '../assets/assets'
import { FaRegLightbulb, FaUserTie } from 'react-icons/fa'
import { IoDiamond } from "react-icons/io5"
import { AppContext } from '../context/AppContext'


const BuyCredit = () => {

  const {user} = useContext(AppContext)

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='bg-black border-white border-2 text-white font-semibold px-12 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-gray-500 transition-all duration-300 mb-5'>
        Our Plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 text-white'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans
          .filter((item) => !item.id.toLowerCase().includes('premium'))
          .map((item, index) => {
            let icon
            let bgColor
            let textColor
            let btnBg

            const id = item.id.toLowerCase()

            if (id.includes('basic')) {
              icon = <FaRegLightbulb className='text-4xl text-white' />
              bgColor = 'bg-yellow-400'
              textColor = 'text-white'
              btnBg = 'bg-yellow-300 hover:bg-yellow-500'
            } else if (id.includes('business')) {
              icon = <FaUserTie className='text-4xl text-white' />
              bgColor = 'bg-gray-800'
              textColor = 'text-white'
              btnBg = 'bg-gray-700 hover:bg-gray-900'
            } else if (id.includes('advance')) {
              icon = <IoDiamond className='text-4xl text-white' />
              bgColor = 'bg-orange-500'
              textColor = 'text-white'
              btnBg = 'bg-orange-400 hover:bg-orange-600'
            } else {
              icon = null
              bgColor = 'bg-white'
              textColor = 'text-gray-700'
              btnBg = 'bg-gray-800 hover:bg-gray-600 text-white'
            }

            return (
              <div
                key={index}
                className={`${bgColor} ${textColor} w-72 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-500`}
              >
                <div className='mb-4'>{icon}</div>
                <p className='text-xl font-semibold mb-1'>{item.id}</p>
                <p className='text-sm mb-4'>{item.desc}</p>
                <p className='text-3xl font-bold mb-1'>₹ {item.price}</p>
                <p className='mb-6'>/ {item.credits} credits</p>
                <button className={`w-full text-white py-2 rounded-full font-medium ${btnBg} transition-all`}>
                  {user ? 'PURCHASE' : 'GET STARTED'}
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BuyCredit
