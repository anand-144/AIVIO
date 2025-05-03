import React from 'react'
import { GiStarsStack } from "react-icons/gi";

import { assets } from '../assets/assets'

const Header = () => {

    const sampleImages = [
        assets.sample_img_1,
        assets.sample_img_2,
        assets.sample_img_3,
        assets.sample_img_4,
        assets.sample_img_5,
        assets.sample_img_6,
    ];

    return (
        <div className='flex flex-col justify-center items-center text-center my-2'>

            <div className="inline-flex items-center text-center gap-2 px-[2px] py-[2px] rounded-full water-flow-border shadow-xl scale-105">
                <div className="flex items-center gap-2 bg-black text-white px-6 py-1 rounded-full font-medium text-base">
                    <p>Snap Stunning AI Art Without Breaking the Bank!</p>
                    <span className="text-xl">🪄</span>
                </div>
            </div>

            <h1 className="text-orange-500 text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center font-extrabold">
                Words In, <span className="text-purple-500">Vibes Out.</span> Fast AF.
            </h1>

            <p className="text-lg sm:text-xl text-blue-400 text-center max-w-3xl mx-auto mt-6 font-medium leading-relaxed">
                Dive into a world of limitless creativity. Transform your ideas into stunning visuals in just seconds — type it, and let the magic unfold.
            </p>

            <button className='sm:text-lg text-white font-semibold bg-gradient-to-tl from-orange-500 to-purple-900 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-500'>
                Generate Images
                <GiStarsStack className='text-yellow-400 text-2xl h-6' />
            </button>


            <div className='flex flex-wrap justify-center mt-16 gap-3'>
                {sampleImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Sample ${index + 1}`}
                        width={70}
                        className='border-2 border-orange-500 rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                    />
                ))}
            </div>

            <p className='mt-2 text-indigo-600 font-medium'>Created with AIVIO’s Magic ✨</p>

        </div>
    )
}

export default Header