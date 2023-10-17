import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className='w-full px-52 py-8 flex justify-between sm:px-8'>
            <img
                className='sm:w-32'
                src={logo} 
                alt="logo-icon" />
            <ul className='flex items-center'>
                <li className='mx-3 sm:mx-2'><a className='decoration-none text-slate-500' href="#">Features</a></li>
                <li className='mx-3 sm:mx-2'><a className='decoration-none text-slate-500' href="#">Team</a></li>
                <li className='mx-3 sm:mx-2'><a className='decoration-none text-slate-500' href="#">Sign in</a></li>
            </ul>
        </nav>
    )
}

export default Navbar