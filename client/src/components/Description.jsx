import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className="flex flex-col items-center justify-center my-12 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Main Heading & Subheading */}
      <div className="w-full order-1 mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-gradient-to-r from-orange-500 via-yellow-300 to-purple-500 text-transparent bg-clip-text drop-shadow-lg tracking-tight animate-shine bg-[length:200%_auto] bg-[position:0_0]">
          Flex Your <span className="text-purple-500 drop-shadow-md">Imagination</span> with AI
        </h1>
        <p className="mt-4 text-center text-base sm:text-lg md:text-xl font-medium max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Imagination? We Make It Pixel Perfect.
        </p>
      </div>

      {/* Image and Inner Description: stack up to md, switch on lg+ */}
      <div className="order-2 flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start gap-6 lg:gap-12 w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl">
        {/* Image */}
        <img
          src={assets.sample_img_5}
          alt="AI sample"
          onClick={handleClick}
          className={`cursor-pointer rounded-lg transition-all duration-300
            w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96
            ${isClicked ? 'blur-0' : 'blur-sm'}`}
        />

        {/* Inner Title & Paragraph */}
        <div className="flex-1 text-start lg:text-left mt-4 lg:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-pink-500 text-center">
            AI-Driven Text to Image Generator
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-lg lg:max-w-xl mx-auto lg:mx-0 text-white mb-4">
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique
            imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it,
            and watch it come to life instantly.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-lg lg:max-w-xl mx-auto lg:mx-0 text-white mb-4">
          Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't
            yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are
            limitless!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
