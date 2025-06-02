import React, { useContext } from 'react'
import { GiStarsStack } from "react-icons/gi";

import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';

import { delay, motion } from "motion/react"
import { AppContext } from '../context/AppContext';

const Header = () => {

    const {user , setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = ()=>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }
    }

    const sampleImages = [
        assets.sample_img_1,
        assets.sample_img_2,
        assets.sample_img_3,
        assets.sample_img_4,
        assets.sample_img_5,
        assets.sample_img_6,
    ];

    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-2'
            initial={{opacity:0.2 , y:100}}
            transition={{duration:1}}
            whileInView={{ opacity: 1 , y: 0}}
            viewport={{once : true}}
        >

            <div className="inline-flex items-center text-center gap-2 px-[2px] py-[2px] rounded-full water-flow-border shadow-xl scale-105">
                <motion.div className="flex items-center gap-2 bg-black text-white px-6 py-1 rounded-full font-medium text-base"
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ delay : 0.4 , duration: 2}}
                >
                    <p>Snap Stunning AI Art Without Breaking the Bank!</p>
                    <span className="text-xl">🪄</span>
                </motion.div>
            </div>

            <motion.h1 className="text-orange-500 text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center font-extrabold"
            initial={{ opacity : 0}}
            animate={{ opacity : 1}}
            transition={{ delay : 0.4 , duration : 2}}
            >
                Words In, <span className="text-purple-500">Vibes Out.</span> Fast AF.
            </motion.h1>

            <motion.p className="text-lg sm:text-xl text-blue-400 text-center max-w-3xl mx-auto mt-6 font-medium leading-relaxed"
            initial={{ opacity :0 , y: 20}}
            animate={{ opacity: 1 , y: 0}}
            transition={{delay: 0.6 , duration: 0.8}}
            >
                Dive into a world of limitless creativity. Transform your ideas into stunning visuals in just seconds — type it, and let the magic unfold.
            </motion.p>

            <motion.button className='sm:text-lg text-white font-semibold bg-gradient-to-tl from-orange-500 to-purple-900 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-500'
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95}}
            initial={{opacity: 0}}
            animate={{ opacity : 1}}
            transition={{ default : {duration : 0.5} , opacity:{delay:0.8 , duration : 1}}}
            onClick={onClickHandler}
            >
                Generate Images
                <GiStarsStack className='text-yellow-400 text-2xl h-6' />
            </motion.button>


            <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
            initial={{ opacity : 0 }}
            animate={{ opacity : 1 }}
            transition={{ delay : 1, duration : 2 }}
            >
                {sampleImages.map((img, index) => (
                    <motion.img
                    whileHover={{ scale: 1.05 ,duration: 0.1}}
                        key={index}
                        src={img}
                        alt={`Sample ${index + 1}`}
                        width={70}
                        className='border-2 border-orange-500 rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                    />
                ))}
            </motion.div>

            <motion.p
            initial={{ opacity : 0 }}
            animate={{ opacity : 1 }}
            transition={{ delay : 1.2, duration : 0.8 }}
            className='mt-2 text-indigo-600 font-medium'>Created with AIVIO’s Magic ✨</motion.p>

        </motion.div>
    )
}

export default Header