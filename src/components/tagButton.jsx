import React from 'react'

export default function TagButton ({ children }) {
  return (
    <>
      <div className='w-[105px] h-[28px] flex justify-center items-center bg-gray-light-200 text-gray-light-600 font-medium rounded-[15px]'>
        {children}
      </div>
    </>
  )
}
