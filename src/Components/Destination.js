import React from 'react'
import picOne from '../assets/borabora.jpg'
import picTwo from '../assets/borabora2.jpg'
import picThree from '../assets/keywest.jpg'
import picFour from '../assets/maldives.jpg'
import picFive from '../assets/maldives2.jpg'

const Destination = () => {
  return (
    <section name='destination' className='max-w-[1000px] z-10 h-full px-6 mx-auto py-10'>

        {/* Tittle section */}
        <div className='text-center py-6'>
            <h1 className='text-3xl font-bold'>All-Inclusive Resorts</h1>
            <p className='font-medium'>On the Caribbean's Best Beaches</p>
        </div>


        {/* image section section */}
        <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4'>

            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={picOne} alt="" />

            <img className='w-full h-full object-cover' src={picTwo} alt="" />

            <img className='w-full h-full object-cover' src={picThree} alt="" />

            <img className='w-full h-full object-cover' src={picFour} alt="" />

            <img className='w-full h-full object-cover' src={picFive} alt="" />
        </div>

    </section>
  )
}

export default Destination