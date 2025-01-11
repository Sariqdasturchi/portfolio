import React from 'react'
import { Testimonials } from '../utils/constants'
import { FaUser } from 'react-icons/fa'

export default function TestimonialsCard () {
  return (
    <>
      <div className='grid  grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mx-auto'>
        {Testimonials.map((item, id) => (
          <div key={item.id} className='bg-gray-light shadow-lg rounded-lg p-6 mt-3 flex flex-col justify-center items-center'>
            <div className='w-[65px] h-[65px] mb-2 rounded-full bg-gray-light-500 flex justify-center items-center'>
              <FaUser className='text-[32px]' />
            </div>
            <div className='text-center p-4'>
              <p>{item.message}</p>
            </div>
            <div className='text-center p-2'>
              <h3 className='text-[20px] font-semibold'>{item.name}</h3>
              <p>{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
