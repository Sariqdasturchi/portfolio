import React from 'react'
import { skillsCard } from '../utils/constants'

export default function SkillsCard() {
  return (
   <>
    <div className='w-full h-[auto] grid grid-cols-3 gap-10'>
        {
            skillsCard.map((item, id) => (
                <div key={item.id} className='w-[78px] h-[96px] flex flex-col justify-center items-center'>
                    <img src={item.url} alt={item.title} className='w-full object-cover' />
                    <p>{item.title}</p>
                </div>
            ))
        }
    </div>
   </>
  )
}
