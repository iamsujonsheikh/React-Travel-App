import React from 'react'
import beachVideo from '../assets/beachVid.mp4'
import { FaSearchLocation } from 'react-icons/fa';

const Hero = () => {
  return (
    <section>
        <div className='w-full h-screen relative'>
            <video className='w-full h-screen object-cover' src={beachVideo} autoPlay loop muted />

            {/* hero bg shadow dark section */}
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'>

            {/* hero tittle section */}
            <div className='absolute top-0 left-0 w-full h-full flex flex-col  justify-center items-center space-y-2'>

                <h1 className='text-3xl font-semibold text-white'>First Class Travel</h1>
                <h1 className='text-2xl md:text-3xl font-semibold text-white'>Top 1% Locations Worldwide</h1>
                
            {/* hero bg shadow dark section */}
                <form className='flex w-80 md:w-96  h-10 border justify-between p-1 rounded bg-gray-200'>
                    <input className='bg-transparent focus:outline-none px-4 w-full' type="text" placeholder='Search Destination' />

                    <div>
                    <FaSearchLocation className='bg-gray-400 rounded p-2 text-blue-900 cursor-pointer hover:ring-2' size={30}/>
                    </div>
                </form>

            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero