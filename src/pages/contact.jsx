import React from 'react'
import TagButton from '../components/tagButton'
import { MdAttachEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'

export default function Contact () {
  return (
    <>
      <section className='w-full h-auto bg-gray-light dark:bg-gray-dark'>
        <div className='pt-5 mx-auto flex justify-center items-center mb-4'>
          <TagButton children={'Get in touch'} />
        </div>
        <div className='w-[80%] sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto text-center'>
          <p className='text-[18px] text-gray-dark dark:text-gray-light'>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className='flex w-[80%] sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto justify-center items-center mt-4'>
          <h3 className='text-gray-light-600 dark:text-gray-light'>
            <MdAttachEmail className='inline-block mr-2 text-gray-light-600' />
            sukhrobbozorov6@gmail.com
          </h3>
        </div>
        <div className='flex w-[80%] sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto justify-center items-center mt-4 pb-4'>
          <a href='tel:+998507030123' className='text-gray-light-600  dark:text-gray-light'>
            <FaPhone className='inline-block mr-2 text-gray-light-600' />
            +998-50-703-01-23
          </a>
        </div>
      </section>
    </>
  )
}
