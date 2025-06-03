import React, { useEffect, useState } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { motion } from 'framer-motion'

const Review = () => {
    const [startIndex, setStartIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)

    // Detect screen size and update visibleCount
    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1)
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2)
            } else {
                setVisibleCount(3)
            }
        }

        updateVisibleCount()
        window.addEventListener('resize', updateVisibleCount)
        return () => window.removeEventListener('resize', updateVisibleCount)
    }, [])

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - visibleCount, 0))
    }

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + visibleCount, testimonialsData.length - visibleCount)
        )
    }

    const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + visibleCount)

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-20 p-6 sm:p-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-orange-500'>Homie’s Vibe Check</h1>
            <p className='text-white mb-12'>See What the Squad’s Sayin’</p>


            <div className='flex items-center gap-4'>
                {testimonialsData.length > visibleCount && (
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className='text-white hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed text-xl'
                    >
                        <FaChevronLeft />
                    </button>
                )}

                <div className='flex flex-wrap gap-6 justify-center'>
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='bg-white/20 p-6 sm:p-12 rounded-lg shadow-md w-full md:w-[45%] lg:w-[30%] border-l-2 shadow-orange-500 border-t-2 border-orange-500 
                 cursor-pointer hover:scale-[1.02] transition-all'
                        >
                            <div className='flex flex-col items-center'>
                                <img src={testimonial.image} alt="user_image" className='rounded-full w-14 border-2 border-red-500' />
                                <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                                <p className='text-gray-400 mb-4'>{testimonial.role}</p>
                                <div className='flex mb-4'>
                                    {Array(testimonial.stars).fill().map((_, i) => (
                                        <img key={i} src={assets.rating_star} alt="star" />
                                    ))}
                                </div>
                                <p className='text-center text-sm text-white/70'>{testimonial.text}</p>
                            </div>
                        </div>
                    ))}
                </div>


                {testimonialsData.length > visibleCount && (
                    <button
                        onClick={handleNext}
                        disabled={startIndex + visibleCount >= testimonialsData.length}
                        className='text-white hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed text-xl'
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </motion.div>
    )
}

export default Review
