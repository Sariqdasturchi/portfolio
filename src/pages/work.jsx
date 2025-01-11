import React from 'react'
import TagButton from '../components/tagButton'
import WorkCard from '../components/workCard'

export default function Work () {
  return (
    <>
      <section className='w-full h-auto flex flex-col justify-center items-center mt-20 bg-gray-light-50 ' >
        <div className='pt-5 mx-auto flex justify-center items-center mb-4'>
          <TagButton children={'Experience'} />
        </div>
        <div className='p-5 text-center mb-4'>
          <h2 className='text-[24px] sm:text-[25px] md:text-[26px] lg:text-[28px]  font-medium'>
          Some of the noteworthy projects I have built:
          </h2>
        </div>
        <div className='mb-10'>
          <WorkCard />
        </div>
      </section>
    </>
  )
}
