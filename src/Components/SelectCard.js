import React from 'react'

const SelectCard = (props) => {
  
  return (
    <section className='travel'>
         <div className='relative'>
            <img className='w-full h-[200px] object-cover rounded hover:scale-105 duration-500' src={props.bg} alt="" />

            <div className='absolute top-2 left-2'>
                <p className='text-white font-semibold drop-shadow-xl uppercase'>{props.text}</p>
            </div>
        </div>
    </section>
  )
}

export default SelectCard