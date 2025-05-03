import React from 'react';
import logo from '../../public/logo.png';
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-4 md:px-12 mt-20'>
      {/* Logo */}
      <img src={logo} alt="logoFooter" className='w-40 sm:w-50 md:w-52' />

      {/* Copyright */}
      <p className='text-fuchsia-500 text-lg sm:text-sm text-center md:text-left max-sm:px-4'>
        © AIVIO | All rights reserved.
      </p>

      {/* Social Icons */}
      <div className='flex gap-4'>
        <FaFacebookF className='text-white w-5 h-5 sm:w-6 sm:h-6' />
        <FaInstagram className='text-orange-600 w-5 h-5 sm:w-6 sm:h-6' />
        <FaXTwitter className='text-white w-5 h-5 sm:w-6 sm:h-6' />
      </div>
    </div>
  );
};

export default Footer;
