import React from 'react'
import { skillsCard } from '../utils/constants'

export default function SkillsCard() {
  return (
   <>
    <div className='w-full h-[auto] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-20'>
        {
            skillsCard.map((item, id) => (
                <div key={item.id} className='w-[78px] h-[96px] flex flex-col justify-center items-center cursor-pointer'>
                    <img src={item.url} alt={item.title} className='w-full object-cover hover:scale-75 transition transform duration-500' />
                    <p className='text-gray-dark dark:text-gray-light'>{item.title}</p>
                </div>
            ))
        }
    </div>
   </>
  )
}
