import React from 'react'
import { BsFillPersonFill,BsSearch,BsFacebook,BsTwitter,BsYoutube,BsPinterest,BsInstagram,BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='bg-slate-200 px-4 py-10'>

      <div className='flex justify-between items-center space-x-6 my-6'>
      <h1 className='font-[cursive] font-bold text-3xl'>Travello</h1><br />

      <div className='flex space-x-4'>
      <BsFacebook size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

      <BsTwitter size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

      <BsYoutube size={20}className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

      <BsLinkedin size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

      <BsPinterest size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

      <BsInstagram size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>
     </div>
      </div>
      
      <section className='flex justify-between'>
        {/* left section */}
        <ul className='md:flex md:space-x-4 max-w-[300px]'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Partnership</li>
          <li className='hover:underline cursor-pointer'>Carrers</li>
          <li className='hover:underline cursor-pointer'>Newsroom</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
        </ul>


        {/* middle section */}
        <ul className='md:flex md:space-x-4 max-w-[300px]'>
          <li className='hover:underline cursor-pointer'>Policy</li>
          <li className='hover:underline cursor-pointer'>Found</li>
          <li className='hover:underline cursor-pointer'>Podcasting</li>
          <li className='hover:underline cursor-pointer'>Invited</li>
          <li className='hover:underline cursor-pointer'>Marketing</li>
        </ul>


        {/* right section */}
        <ul className='md:flex md:space-x-4 max-w-[300px]'>
          <li className='hover:underline cursor-pointer'>Home</li>
          <li className='hover:underline cursor-pointer'>Destination</li>
          <li className='hover:underline cursor-pointer'>Travell</li>
          <li className='hover:underline cursor-pointer'>View</li>
          <li className='hover:underline cursor-pointer'>Booking</li>
        </ul>


        
      </section>
    </footer>
  )
}

export default Footer