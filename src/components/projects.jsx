import React from 'react'
import TagButton from './tagButton'
import ProjectsCard from './projectsCard'

export default function Projects () {
  return (
    <>
      <section className='w-full h-auto flex flex-col justify-center items-center bg-gray-light' id='work'>
        <div className='pt-5 mx-auto flex justify-center items-center mb-4'>
          <TagButton children={'Works'} />
        </div>
        <div className='p-5 text-center mb-4'>
          <h2 className='text-[24px] sm:text-[25px] md:text-[26px] lg:text-[28px]  font-medium'>
            The skills, tools and technologies I am really good at:
          </h2>
        </div>
        <div className='w-[90%] h-[auto] mx-auto mb-10'>
          <ProjectsCard />
        </div>
      </section>
    </>
  )
}
