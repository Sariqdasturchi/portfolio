import React, { useEffect, useState } from 'react'
import userImage from '../assets/user-home.jpg'
import { FiMapPin } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { IoLogoLinkedin } from 'react-icons/io5'
import { TbBrandTelegram } from 'react-icons/tb'
import { CiSaveUp1 } from 'react-icons/ci'

export default function Home () {
  const [isVisible, setIsVisible] = useState(false)
  // Scrollni kuzatish uchun useEffect
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true) // Tugma ko'rinadi
      } else {
        setIsVisible(false) // Tugma yashiriladi
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    // Cleanup: remove listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Yumshoq (smooth) ko'tarilish
    })
  }
  return (
    <>
      <section className='relative w-full h-auto  bg-gray-light dark:bg-gray-dark'>
        <div className='w-[90%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] h-100vh sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[100vh] mx-auto flex flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse items-center sm:justify-between pt-14 md:pt-0 '>
          {/* user card */}
          <div className='relative w-[280px] sm:w-[290px] md:w-[300px] lg:w-[320px] xl:w-[330px] 2xl:w-[400px] h-[280px] sm:h-[290px] md:h-[300px] lg:h-[320px] xl:h-[330px] 2xl:h-[350px] flex justify-center items-center mt-12'>
            {/* Orqa border (faqat past va o'ng qismlar uchun) */}
            <div
              className='absolute -bottom-4 -right-4 w-full h-full border-[15px] sm:border-[15px] md:border-[20px] border-gray-light-300 dark:border-gray-dark-200'
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
              }}
            ></div>

            {/* Rasm qutisi */}
            <div className='relative w-[240px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[300px] 2xl:w-[360px] h-[300px] sm:h-[310px] md:h-[300px] lg:h-[360px] xl:h-[380px] 2xl:h-[435px]'>
              <img
                src={userImage}
                alt='user-image'
                className='w-full h-[280px] sm:h-[280px] md:h-[285px] lg:h-[325px] xl:h-[340px] 2xl:h-[375px] object-cover'
              />
            </div>
          </div>

          {/* home text component */}
          <div className='w-full sm:w-[50%] md:w-[50%] h-[auto] flex flex-col mt-5 mb-5'>
            <div className='flex'>
              <h1 className='text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] 2xl:text-[42px] inline font-medium dark:text-gray-light'>
                Hi, I’m Suhrob
              </h1>
            </div>
            {/* description */}
            <div>
              <p className='dark:text-gray-light'>
                I'm a Frontend developer (React.js) with a focus on creating
                (and occasionally designing) exceptional digital experiences
                that are fast, accessible, visually appealing, and responsive.
                Even though I have been creating web applications for over 2
                years, I still love it as if it was something new.
              </p>
            </div>
            <div className='mt-4 mb-4'>
              <h4 className='text-[16px] font-normal dark:text-gray-light'>
                <FiMapPin className='inline-block ' /> Uzbekistan Samarkand
              </h4>
              <p className='flex items-center dark:text-gray-light'>
                <div className='inline-block w-[5px] h-[5px] mr-3 rounded-[50%] bg-emerald'></div>{' '}
                Available for new projects
              </p>
            </div>
            {/* socialmedia */}
            <div className='flex dark:text-gray-light'>
              <a
                className='text-[17px] mr-5'
                target='_blank'
                href='https://www.linkedin.com/in/suhrobbozorov/'
              >
                <IoLogoLinkedin />
              </a>
              <a
                className='text-[17px] mr-5'
                target='_blank'
                href='https://github.com/Sariqdasturchi'
              >
                <FaGithub />
              </a>
              <a
                className='text-[17px] mr-5'
                target='_blank'
                href='https://www.youtube.com/@sariqdasturchi/'
              >
                <FiYoutube />
              </a>
              <a
                className='text-[17px]'
                target='_blank'
                href='https://t.me/suhrobcode'
              >
                <TbBrandTelegram />
              </a>
            </div>
          </div>
        </div>
        {isVisible && (
          <div className='absolute right-5 bottom-5 flex justify-center items-center '>
            <div
              className='fixed right-5 bottom-5 flex justify-center items-center  w-12 h-12 rounded-full  bg-emerald cursor-pointer scroll-top-btn z-50'
              onClick={scrollToTop}
            >
              <CiSaveUp1 className='text-[26px] text-gray-light' />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
