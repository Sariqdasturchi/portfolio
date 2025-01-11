import React from 'react'
import { work } from '../utils/constants'

export default function WorkCard () {
  return (
    <>
      <div className='w-[90%] h-[auto] mx-auto flex flex-col justify-center items-center'>
        {work.map((item, id) => (
          <div
            key={item.id}
            className={`${
              id === work.length  ? 'mt-0' : 'mt-5'
            } w-[90%] h-[auto] flex flex-col justify-center p-8 bg-gray-light rounded-[12px]`}
          >
            <div>
              <h2 className='text-[22px] font-medium text-emerald'>{item.name}</h2>
            </div>
            <div className='mt-4'>
              <p className='font-medium'>{item.date}</p>
            </div>
            <div className='mt-2'>
              <h1 className='text-[20px] font-semibold'>{item.job}</h1>
            </div>
            <div className='mt-4'>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
