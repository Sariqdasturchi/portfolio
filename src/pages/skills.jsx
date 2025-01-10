import React from 'react'
import TagButton from '../components/tagButton'
import SkillsCard from '../components/skillsCard'

export default function Skills () {
  return (
    <>
      <section className='w-full h-auto flex flex-col justify-center items-center'>
        <div className='pt-5 mx-auto flex justify-center items-center'>
          <TagButton children={'Skills'} />
        </div>
        <div className='p-5 text-center'>
            <h2 className='text-[24px] font-medium'>The skills, tools and technologies I am really good at:</h2>
        </div>
        <div className='w-[90%] h-[auto]'>
            <SkillsCard />
        </div>
      </section>
    </>
  )
}
