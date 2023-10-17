import React from 'react'
import curveDesk from '../assets/bg-curve-desktop.svg'
import curveMobile from '../assets/bg-curve-mobile.svg'
import testimonialimg from '../assets/illustration-2.svg'
import arrow from '../assets/icon-arrow.svg'
import quotes from '../assets/icon-quotes.svg'
import avatar from '../assets/avatar-testimonial.jpg'
import './testimonial.css'

const Testimonial = () => {
  return (
    <section id='testimonial' className='relative w-full mt-20 sm:h-[1000px]'>
      <div className='w-screen'>
        <img 
          className='w-full absolute top-[-90px] left-0 xl:h-[100px] sm:hidden'
          src={curveDesk} 
          alt="curve-desk" />
        <img 
          className='hidden w-full h-[90px] absolute top-[-90px] left-0 sm:block'
          src={curveDesk} 
          alt="curve-desk" />
      </div>
      <div className='w-full h-full flex px-48 sm:px-8 sm:flex-col sm:text-center'>
        <div className='w-3/5 h-full flex flex-col justify-center sm:order-2 sm:w-full sm:items-center sm:h-full'>
          <h2 className='text-4xl font-bold w-full max-w-2xl mb-5 sm:text-xl'>
            Stay productive, wherever you are
          </h2>
          <p className='text-base font-light max-w-lg mb-5'>Never let location be an issue when acessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p className='text-base font-light max-w-lg mb-5'>Securely share files and folders with friend, family and colleagues for live collaboration. No enail attachments required!</p>
          <a
            className=' text-green-500 border-b-2 border-green-500 max-w-[176px] flex items-center gap-3 cursor-pointer'
            href="#">
            See how Fylo works 
            <img className='inline ' src={arrow} alt="icon arrow" />
          </a>
            <div id='card' className='max-w-xs bg-white px-5 py-4 mt-6 '>
              <img
                className='block w-4'
                src={quotes} 
                alt="icon-qoutes" />  
                <p className='text-sm my-2 leading-normal'>
                  Fylo has improve our team productivity by an order of magnitude, Since makeing the switch our team has become a well-oiled collaboration machine.
                </p>
                <div className='flex items-center gap-2 '>
                  <img 
                    className='rounded-full w-8 h-8'
                    src={avatar} 
                    alt="avatar" />
                    <div className='flex flex-col'>
                      <h3 className='text-xs font-bold'>Kyle Burton</h3>
                      <small>Founder & CEO, Huddle</small>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-2/5 h-full flex items-center sm:order-1 sm:w-full sm:h-3/5'>
          <img
            className='w-full'
            src={testimonialimg} 
            alt="testimonial-img" />
        </div>
      </div>
    </section>
  )
}

export default Testimonial