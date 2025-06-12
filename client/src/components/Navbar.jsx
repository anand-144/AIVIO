import React, { useContext } from 'react'
import logo from '../../public/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { MdStars } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const { user , setShowLogin , logout , credit} = useContext(AppContext)

  const navigate = useNavigate()

  return (
    <div className='flex item-center justify-between py-4'>
      <Link to="/" >
        <img src={logo} alt="" className="w-36 sm:w-16 md:w-48 lg:w-48 " />
      </Link>

      <div>
        {user ?
          <div className='flex items-center gap-2 sm:gap-3 pt-2'>
            <button onClick={() => navigate('credit')} className='flex items-center gap-2 bg-orange-100 px-4 sm:px-6 py-1.5 rounded-full'>
              <MdStars className='w-6 h-6 text-orange-500' />
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="hidden sm:inline">Credit left: </span>
                <span>{credit}</span>
              </p>

            </button>
            <p className='text-gray-600 max-sm:hidden pl-4 text-md'>Hi ,{user.name}</p>

            <div className='relative group'>
              <FaRegUserCircle className='w-6 h-6 text-orange-400' />

              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>

                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>

              </div>

            </div>
          </div>
          :
          <div className="flex items-center gap-2 sm:gap-5 lg:py-1.5 md:py-3 pt-2 font-medium">
            <button
              type="button"
              onClick={() => navigate('/credit')}
              className='text-white'
            >
              Pricing
            </button>

            <button className="px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base lg:px-9 lg:py-1.5
          bg-black rounded-full text-orange-500 hover:text-white"
          onClick={() => setShowLogin(true)}
          >
              Login
            </button>

          </div>


        }
      </div>

    </div>
  )
}

export default Navbar