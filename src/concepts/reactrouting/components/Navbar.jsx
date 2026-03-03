import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-19.5 bg-gradient-to-r from-sky-300 to-fuchsia-500 flex items-center justify-around p-3.5 text-white'>
      <div className='w-[15%] h-full  flex items-center justify-center text-3xl tracking-widest font-serif font-extrabold'>Logo</div>
      <ul className='flex  w-[40%] items-center justify-around h-full '>
        <li className='text-2xl capitalize font-sans cursor-pointer hover:underline font-bold'><Link to="/">Home</Link></li>
        <li className='text-2xl capitalize font-sans cursor-pointer hover:underline font-bold'><Link to="/about">About</Link></li>
        <li className='text-2xl capitalize font-sans cursor-pointer hover:underline font-bold'><Link to="/projects">Projects</Link></li>
        <li className='text-2xl capitalize font-sans cursor-pointer hover:underline font-bold'><Link to="/contact">Contact</Link></li>
      </ul>
      <button className='bg-amber-200 px-5 py-2.5 rounded-lg hover:bg-blue-600 hover:cursor-pointer hover:underline text-2xl'><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Navbar

