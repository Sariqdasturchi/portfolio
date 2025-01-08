import React from 'react'
import TagButton from '../components/tagButton'

export default function About() {
  return (
    <>
      <section className='w-full h-[100vh] bg-gray-light-50'>
        <div className='w-[90%] h-screen mx-auto flex felx-col justify-center'>
          <div className='mt-5'>
            <TagButton children={'About me'} />
          </div>
        </div>
      </section>
    </>
  )
}
