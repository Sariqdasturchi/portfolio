import React from 'react'
import { work } from '../utils/constants'

export default function WorkCard () {
  return (
    <>
      <div className='w-[90%] sm:w[90%] md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] h-[auto] mx-auto flex flex-col justify-center items-center'>
        {work.map((item, id) => (
          <div
            key={item.id}
            className={`${
              id === work.length  ? 'mt-0' : 'mt-5'
            } w-[90%] h-[auto] flex flex-col justify-center p-8 bg-gray-light dark:bg-gray-dark-100 rounded-[12px]`}
          >
            <div>
              <h2 className='text-[22px] font-medium text-emerald'>{item.name}</h2>
            </div>
            <div className='mt-4'>
              <p className='font-medium text-gray-dark dark:text-gray-light'>{item.date}</p>
            </div>
            <div className='mt-2'>
              <h1 className='text-[20px] font-semibold text-gray-dark dark:text-gray-light'>{item.job}</h1>
            </div>
            <div className='mt-4 text-gray-dark dark:text-gray-light'>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
