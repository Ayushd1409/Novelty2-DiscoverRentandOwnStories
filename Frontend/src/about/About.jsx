import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ayush from '../../public/ayush.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar/>

      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='order-2 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Hello, I'm Ayush Dewangan <br /> <span className='text-blue-600 text-2xl'>Full Stack Developer :) </span></h1>
        <p className='text-xl'>
        I’m a software developer who thrives on blending technical skill with innovative thinking. 
        My core skills include full-stack development, with a focus on JavaScript,
        I am looking for opportunities to work on impactful projects that challenge my problem-solving skills and contribute to innovative technology solutions.        </p>

        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="none" placeholder='tikendra20040914@gm' />
    </label>
    
        </div>
        
        <a href="https://github.com/Ayushd1409">
        <button className=" btn bg-black mt-6 py-4 mr-5 text-white hover:bg-blue-500 hover:text-white">Github</button>
        </a>
        <a href="https://www.linkedin.com/in/ayush-dewangan-2721b1229/">
        <button className="btn border-black bg-white mt-6 py-4 text-black hover:bg-blue-500 hover:text-white">LinkedIn</button>
        </a>
        
        
        </div>

    <div className='flex justify-center items-center mt-6 md:mt-0 order-1 md:w-1/2 md:py-32 py-4'>
        <img src={ayush} className="w-65 h-80 " alt="" />
    </div>
    </div>

      <Footer/>
    </>
  )
}

export default About