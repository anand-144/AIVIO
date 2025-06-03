import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(prev => !prev);

  return (
    <motion.div
    initial={{ opacity: 0.2 , y: 100}}
    transition={{ duration: 1}}
    whileInView={{ opacity : 1, y: 0}}
    viewport={{ once : true}}
    className="flex flex-col items-center justify-center my-12 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Main Heading & Subheading */}
      <div className="w-full order-1 mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-gradient-to-r from-orange-500 via-yellow-300 to-purple-500 text-transparent bg-clip-text drop-shadow-lg tracking-tight animate-shine bg-[length:200%_auto] bg-[position:0_0]">
          Flex Your <span className="text-purple-500 drop-shadow-md">Imagination</span> with AI
        </h1>
        <p className="mt-4 text-center text-base sm:text-lg md:text-xl font-medium max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Imagination? We Make It Pixel Perfect.
        </p>
      </div>

      {/* Image and Inner Description */}
      <motion.div
        className="order-2 flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start gap-6 lg:gap-12 w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {/* Image Wrapper */}
        <div className="relative mt-8">
          <motion.img
            src={assets.sample_img_5}
            alt="AI sample"
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer rounded-lg transition-all duration-300
              w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96
              ${isClicked ? 'blur-0' : 'blur-sm'}`}
          />
          {!isClicked && (
            <motion.button
              onClick={handleClick}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base bg-black/50  rounded-lg"
            >
              Click Me
            </motion.button>
          )}
        </div>

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
      </motion.div>
    </motion.div>
  )
}

export default Description
