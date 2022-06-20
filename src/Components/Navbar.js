import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { BsFillPersonFill,BsSearch,BsFacebook,BsTwitter,BsYoutube,BsPinterest,BsInstagram,BsLinkedin } from 'react-icons/bs';


const Navbar = () => {
  const [open, setOpen] = useState(false)

  // create a function for toggle 
  const handleNavbar = () =>{
    setOpen(!open)
  }

  return (
    <section className='px-4 w-full h-12 flex justify-between items-center absolute z-10'>

        {/* logo section */}
        <div>
            <h1 className='text-3xl font-bold text-white font-[cursive]'>Travello</h1>
        </div>

        {/* destop li section */}
        <ul className='hidden md:flex space-x-6 font-medium uppercase text-white'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Destination</li>
            <li className='cursor-pointer'>Travel</li>
            <li className='cursor-pointer'>view</li>
            <li className='cursor-pointer'>Book</li>
        </ul>

        {/* person and search icon */}
        <div className='hidden text-white md:flex space-x-2'>
          <BsSearch size={22}/>
          <BsFillPersonFill size={25}/>
        </div>

        {/* menu icon section for mobile */}
        <div className='md:hidden' onClick={handleNavbar}>
           {
            !open ? <FiMenu size={25} className='text-white cursor-pointer'/> : <GrClose className='text-white cursor-pointer' size={24}/>
           }

            {/* mobile section */}

           <ul className={!open ? 'hidden' : 'absolute top-12 left-0 w-full bg-slate-400 font-medium uppercase px-6'}>

            <li className='cursor-pointer border-b-blue-100 p-2 border-b  hover:bg-slate-500 rounded ease-in-out duration-500 hover:text-white'>Home</li>

            <li className='cursor-pointer border-b-blue-100 p-2 border-b hover:bg-slate-500 rounded ease-in-out duration-500 hover:text-white'>Destination</li>

            <li className='cursor-pointer border-b-blue-100 p-2 border-b hover:bg-slate-500 rounded ease-in-out duration-500 hover:text-white'>Travel</li>

            <li className='cursor-pointer border-b-blue-100 p-2 border-b hover:bg-slate-500 rounded ease-in-out duration-500 hover:text-white'>view</li>

            <li className='cursor-pointer p-2 hover:bg-slate-500 rounded ease-in-out duration-500 hover:text-white border-b border-b-blue-100'>Book</li>

            {/*mobile section search and account button  */}
           <div className='flex flex-col my-4 space-y-4'>

            <button className='w-full border py-2 rounded-full bg-blue-500 text-white hover:bg-slate-600 duration-500'>Search</button>

            <button className='w-full border py-2 rounded-full bg-green-500 text-white hover:bg-slate-600 duration-500'>Account</button>

           </div>

           {/* social icon section */}
           <div className='flex justify-evenly mb-4'>
            <BsFacebook size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsTwitter size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsYoutube size={20}className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsLinkedin size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsPinterest size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>

            <BsInstagram size={20} className='text-gray-700 hover:scale-125 duration-500 hover:text-blue-800 cursor-pointer'/>
           </div>

        </ul>

         
        </div>

    </section>
  )
}

export default Navbar