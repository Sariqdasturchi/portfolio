import React from 'react'
import TagButton from '../components/tagButton'
import TestimonialsCard from '../components/testimonialsCard'

export default function Testimonails () {
  return (
    <>
      <section className='w-full h-auto flex flex-col justify-center items-center bg-gray-light-50 dark:bg-gray-dark-50' id='testimonials'>
        <div className='pt-5 mx-auto flex justify-center items-center mb-4'>
          <TagButton children={'Testimonials'} />
        </div>
        <div className='p-5 text-center mb-4'>
          <h2 className='text-[24px] sm:text-[25px] md:text-[26px] lg:text-[28px]  font-medium text-gray-dark dark:text-gray-light'>
            Nice things people have said about me:
          </h2>
        </div>
        <div className='w-[90%] h-[auto] mx-auto mb-10'>
          <TestimonialsCard />
        </div>
      </section>
    </>
  )
}
