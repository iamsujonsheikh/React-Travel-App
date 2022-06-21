import React from 'react'
import picOne from '../assets/borabora.jpg'
import picTwo from '../assets/borabora2.jpg'
import picThree from '../assets/keywest.jpg'
import picFour from '../assets/maldives.jpg'
import picFive from '../assets/maldives2.jpg'
import picSix from '../assets/maldives3.jpg'
import SelectCard from './SelectCard'

const Selects = () => {
  return (
    <section className='max-w-[1000px] mx-auto px-6 my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

       <SelectCard bg={picOne} text='Borabora' /> 
       <SelectCard bg={picTwo} text='Keywest' /> 
       <SelectCard bg={picThree} text='Maldives' /> 
       <SelectCard bg={picFour} text='Newyork' /> 
       <SelectCard bg={picFive} text='Thailand' /> 
       <SelectCard bg={picSix} text='Cox Bazar' /> 
    </section>
  )
}

export default Selects