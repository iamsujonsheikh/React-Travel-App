import React from 'react'
import { BsFacebook,BsTwitter,BsYoutube,BsPinterest,BsInstagram,BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='w-full h-full px-4 bg-gray-200'>

    {/*footer logo section  */}
    <h1 className='text-3xl font-bold text-white font-[cursive]'>Travello</h1>

   <div className='flex justify-between'>
   <ul className='md:flex justify-around'>
        <li>About</li>
        <li>Partnerships</li>
        <li>Careers</li>
        <li>Newsroom</li>
        <li>Advertising</li>
    </ul>

    <div className='md:flex justify-evenly mb-4'>
            <BsFacebook size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsTwitter size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsYoutube size={20}className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsLinkedin size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsPinterest size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsInstagram size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>
           </div>

   </div>

    </section>
  )
}

export default Footer