import React from 'react'
import TagButton from '../components/tagButton'
import userImage from '../assets/user-about.jpg'
export default function About () {
  return (
    <>
      <section
        className='w-full justify-center items-center h-auto bg-gray-light-50 dark:bg-gray-dark-50'
        id='about'
      >
        <div className='pt-5 mx-auto flex justify-center items-center'>
          <TagButton children={'About me'} />
        </div>
        <div className='w-[90%] h-100vh sm:h-[50vh] md:h-[50vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[60vh] mx-auto flex flex-col items-center justify-center'>
          <div className='flex flex-col sm:flex-row justify-around items-center mb-0'>
            <div className='relative w-[280px] sm:w-[290px] md:w-[300px] lg:w-[320px] xl:w-[330px] 2xl:w-[400px] h-[280px] sm:h-[290px] md:h-[300px] lg:h-[320px] xl:h-[330px] 2xl:h-[350px] flex justify-center items-center mt-12 mb-8'>
              {/* Orqa border (faqat past va o'ng qismlar uchun) */}
              <div
                className='absolute -bottom-4 -right-4 w-full h-full border-[15px] sm:border-[15px] md:border-[20px] border-gray-light-300 dark:border-gray-dark-200'
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                }}
              ></div>

              {/* Rasm qutisi */}
              <div className='relative w-[240px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[300px] 2xl:w-[360px] h-[300px] sm:h-[310px] md:h-[300px] lg:h-[360px] xl:h-[380px] 2xl:h-[435px] '>
                <img
                  src={userImage}
                  alt='user-image'
                  className='w-full h-[280px] sm:h-[280px] md:h-[285px] lg:h-[325px] xl:h-[340px] 2xl:h-[375px] object-cover'
                />
              </div>
            </div>
            <div className='w-full sm:w-[50%] h-[auto]  ml-0 sm:ml-10 mb-10'>
              <div>
                <h1 className='text-[26px] font-semibold text-gray-dark dark:text-gray-light'>
                  Curious about me? Here you have it:
                </h1>
              </div>
              <div className='mt-3'>
                <p className='text-gray-dark dark:text-gray-light'>
                  I started my journey as a web developer in 2021, and since
                  then, I have continued to grow and evolve as a developer,
                  taking on new challenges and learning the latest technologies
                  along the way. Now, at the start of 22, four years after
                  beginning my web development journey, I am building modern web
                  applications using cutting-edge technologies such as Next.js,
                  TypeScript, NestJS, TailwindCSS, Node.js, and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
