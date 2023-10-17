import React from 'react'
import './footer.css'

//icon
import phone from '../assets/icon-phone.svg'
import email from '../assets/icon-email.svg'
import logo from '../assets/logo-ft.svg'
import facebook from '../assets/BiFacebook.svg'
import twitter from '../assets/BiTwitter.svg'
import insta from '../assets/BiInstagram.svg'

const Footer = () => {
  return (
    <footer id='footer' className='w-full h-[40vh] px-48 sm:h-[80vh] sm:px-8'>
      <div className='w-full h-32 flex items-end mb-8 '>
        <img
          className='w-36 h-10 sm:w-48 sm:h-16'
          src={logo} 
          alt="logo-icon" />
      </div>
      <div className='flex justify-between max-w-6xl sm:flex-col sm:gap-8'>
        <ul className='text-white'>
          <li className='flex items-center gap-3 mb-2 sm:text-lg'>
            <img className='w-5 h-4' src={phone} alt="icon-phone" />
            Phone:+1-543-123-4567
          </li>
          <li className='flex items-center gap-3  sm:text-lg'>
            <img className='w-5 h-4' src={email} alt="icon-email" />
            example@fylo.com
          </li>
        </ul>
        <ul className='text-white'>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">About Us</a></li>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">Jobs</a></li>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">Press</a></li>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">Blog</a></li>
        </ul>
        <ul className='text-white'>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">Contact Us</a></li>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">Terms</a></li>
          <li className='mb-2 sm:mb-4 sm:text-lg'><a href="#">Privacy</a></li>
        </ul>
        <ul className='flex gap-6 sm:justify-center'>
          <li><a href="#"><img src={facebook} alt="facebook-icon" /></a></li>
          <li><a href="#"><img src={twitter} alt="twitter-icon" /></a></li>
          <li><a href="#"><img src={insta} alt="instagram-icon" /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer