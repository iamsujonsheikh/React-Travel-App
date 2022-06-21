import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri';
import { TbReportSearch } from 'react-icons/tb';


const Search = () => {
  return (
    <section name='book' className='max-w-[1000px] mx-auto px-6 my-20'>
      <main className='md:flex justify-between'>

      {/* tittle section */}
      <div className='md:w-8/12'>
        <h1 className='text-2xl text-center font-bold uppercase'>Luxury included vacations for two people</h1><br />

        <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium accusamus ratione, odit quod doloribus dolores ullam repellat voluptate earum porro eum tenetur ipsum consectetur, nobis debitis similique dolorem veritatis nostrum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, optio. Obcaecati dolorem velit accusantium cumque, consectetur dolore veritatis odit quod impedit, et exercitationem vitae harum voluptate facere ducimus ipsum sequi.</p><br />

      {/* icon section area */}
       <div className='justify-between md:flex my-4'>

      {/* first icon */}
      <div className='md:flex justify-between space-x-2'>
      <div className='flex justify-center'>
      <RiCustomerService2Fill className='p-2 bg-slate-200 rounded text-blue-500 hover:scale-110 duration-500' size={70}/>
      </div>

       <div className='text-center'>
       <h1 className='uppercase font-semibold'>leading service</h1>
       <p className='uppercase md:text-sm'>all-inclusive company for 20 years in-a-row</p>
       </div>

       </div><br /> <br />

        {/* second icon */}
        <div className='md:flex space-x-2'>
         <div className='flex justify-center'>
         <TbReportSearch className='p-2  bg-slate-200 rounded text-blue-500 hover:scale-110 duration-500' size={70}/>
         </div>

          <div className='text-center'>
            <h1 className='uppercase font-semibold'>automated bookings service</h1>

            <p className='uppercase md:text-sm'>all-inclusive company for 20 years in-a-row</p>
          </div>
        </div>

       </div>
      </div>

      {/* form section here  */}
        <div className='space-y-2'>
          <div className='border p-2 rounded text-center space-y-2'>
            <h1 className='uppercase font-medium'>get an additional 10% off</h1>

            <h2 className='uppercase font-medium'>12 hours left</h2>
            <p className='w-full py-1 uppercase bg-slate-600 text-white font-medium rounded'>book now and save</p>
          </div>

          <div>
            <label>Destination</label><br />
            <select className='w-full p-1 rounded border-2'>
              <option>Borabora</option>
              <option>Keywest</option>
              <option>Maldives</option>
              <option>Newyork</option>
            </select>
          </div>

          <div>
            <label>Check-in</label><br />
            <input className='w-full p-1 rounded border-2' type="date" />
          </div>

          <div>
            <label>Check-out</label><br />
            <input className='w-full p-1 rounded border-2' type="date" />
          </div>

          <button className='border rounded py-1 w-full my-4 bg-indigo-700 text-white font-medium'>Rates & Availabilities</button>
        </div>

        </main>
    </section>
  )
}

export default Search