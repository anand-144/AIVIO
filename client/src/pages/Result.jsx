import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_5)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [textarea , setTextarea] = useState('')

  const onSubmitHandler = async (e) =>{
    
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center p-4'>
      {/* Image & Loading Indicator */}
      <div className='text-center'>
        <div className='relative'>
          <img src={image} alt='sampleimage' className='max-w-sm rounded shadow-lg' />
          <span className={`absolute bottom-0 left-0 h-1 bg-orange-500 ${loading ? 'w-full transition-all duration-[  10s]' : 'w-0'}`} />
        </div>
        <p className={`${!loading ? 'hidden' : 'text-white mt-2'}`}>Loading...</p>
      </div>

      {/* Textarea + Button (Shown when image is NOT loaded) */}
      {!isImageLoaded && (
        <div className='flex flex-col xl:flex-row w-full max-w-2xl bg-gradient-to-tl from-black to-purple-950 text-white p-4 mt-10 rounded-2xl gap-4'>
          <textarea
            onChange={e  => setTextarea(e.target.value) }value={textarea}
            rows={5}
            placeholder='Describe what you want to generate...'
            className='flex-1 bg-neutral-900 text-white p-4 rounded-xl border border-gray-400 focus:outline-none focus:border-orange-500 resize-none font-light'
          />
          <button
            type='submit'
            className='bg-gradient-to-tr from-orange-600 to-purple-800 hover:from-orange-500 hover:to-purple-700 transition-all px-8 py-3 rounded-xl text-lg font-semibold w-full xl:w-auto'
          >
            Generate
          </button>
        </div>
      )}

      {/* Buttons (Shown when image IS loaded) */}
      {isImageLoaded && (
        <div className='flex gap-4 flex-wrap justify-center text-white text-sm p-4 mt-10 rounded-full'>
          <button
            type='button'
            onClick={() => {
              setLoading(true)
              setIsImageLoaded(false)
            }}
            className='bg-black hover:bg-orange-600 border-2 border-purple-600 text-white px-8 py-3 rounded-full cursor-pointer transition-all duration-300'
          >
            Generate Another
          </button>

          <a
            href={image}
            download
            className='bg-black hover:bg-purple-600 border-2 border-orange-600 text-white px-8 py-3 rounded-full cursor-pointer transition-all duration-300'
          >
            Download
          </a>
        </div>
      )}
    </form>
  )
}

export default Result
