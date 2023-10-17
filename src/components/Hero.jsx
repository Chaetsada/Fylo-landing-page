import {React,useState} from 'react'
import './hero.css'
import Heroimg from '../assets/illustration-1.svg'

const Hero = () => {
    const [input,setInput] = useState("");
    const [error,setError] = useState(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        checkEmail(input);
    }

    function checkEmail(input){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input)){
            console.log('success');
        }else{
            setError(!error);
        }
    }

    return (
        <section className='w-full flex px-48 py-20 pt-10 sm:px-8 sm:py-6 sm:flex-col'>
            <div className='w-2/4 h-full flex flex-col justify-center sm:order-2 sm:w-full sm:text-center'>
                <h1 className='text-4xl font-bold w-full max-w-xl mb-5 leading-normal sm:text-3xl'>
                    All your files in one secure location, accessible anywhere</h1>
                <p className=' font-normal max-w-lg w-full mb-8 '>
                    Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-worker.</p>
                <form onSubmit={handleSubmit} className='relative  flex gap-5 sm:flex-col sm:w-full sm:gap-8'>
                    <input
                        onChange={(e)=>setInput(e.target.value)}
                        className='py-1 px-3 w-[280px] border border-slate-950 placeholder:text-slate-400 invalid:border-2 invalid:border-red-500 sm:w-full '
                        type="text" />
                    <small 
                        className= {
                            `${error ? 'hidden' : 'block'} 
                            text-red-500 absolute top-10 left-0`
                        }>
                        please check your email
                    </small>
                    <button type='submit' className="py-1 px-10 rounded bg-blue-600 hover:opacity-50 text-white ">
                        Get Started
                    </button>
                </form>
            </div>
            <div className='w-2/4 h-full flex flex-col justify-center sm:order-1 sm:w-full'>
                <img 
                    className='w-full '
                    src={Heroimg} 
                    alt="hero-image-1" />
            </div>
        </section>
    )
}

export default Hero