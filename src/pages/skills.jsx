import React from 'react'
import TagButton from '../components/tagButton'
import SkillsCard from '../components/skillsCard'

export default function Skills () {
  return (
    <>
      <section className='w-full h-auto flex flex-col justify-center items-center bg-gray-light dark:bg-gray-dark'>
        <div className='pt-5 mx-auto flex justify-center items-center mb-4'>
          <TagButton children={'Skills'} />
        </div>
        <div className='p-5 text-center mb-4'>
            <h2 className='text-[24px] sm:text-[25px] md:text-[26px] lg:text-[28px]  font-medium text-gray-dark dark:text-gray-light'>The skills, tools and technologies I am really good at:</h2>
        </div>
        <div className='w-[90%] sm:w-[80%] md:w-[80%] lg:w-[75%] xl:w-[70%] 2xl:w-[65%] h-[auto] mx-auto'>
            <SkillsCard />
        </div>
      </section>
    </>
  )
}
