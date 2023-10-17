import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact' className='w-full h-[30vh] px-48 flex items-center justify-between gap-4 sm:h-[40vh] sm:px-8 sm:flex-col sm:gap-1 sm:py-8'>
      <div className='w-2/4 h-full flex flex-col justify-center max-w-lg sm:w-full sm:text-center'>
        <h3 className='text-3xl font-bold text-white mb-5 sm:text-xl'>
          Get early access today
        </h3>
        <p className='text-white max-w-lg sm:text-lg'>It only takes a munute to sign up and our free starter tier is extremly generous. If you have any questions, our support team would be happy to help you.</p>
      </div>
      <form className='w-2/4 h-full flex flex-col justify-center items-start max-w-lg sm:w-full sm:px-8'>
        <input 
          className='w-full px-4 py-2 mb-4 '
          type="email" 
          placeholder='email@example.com' />
        <button className='bg-blue-500 text-white text-xs font-bold px-5 py-3 sm:w-full'>
          Get Started For Free
        </button>
      </form>
    </section>
  )
}

export default Contact