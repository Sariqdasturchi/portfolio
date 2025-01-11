import React from 'react'

export default function TagButton ({ children }) {
  return (
    <>
      <div className='w-[auto] h-[28px] p-3  flex justify-center items-center bg-gray-light-200 text-gray-light-600 font-medium rounded-[15px]'>
        {children}
      </div>
    </>
  )
}
