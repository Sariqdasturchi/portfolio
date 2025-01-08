import React from 'react'
import TagButton from '../components/tagButton'
import userImage from '../assets/user-about.jpg'
export default function About () {
  return (
    <>
      <section className='w-full h-[auto] bg-gray-light-50'>
        <div className='w-[90%] h-screen mx-auto flex flex-col items-center'>
          <div className='mt-5'>
            <TagButton children={'About me'} />
          </div>
          <div className='w-[280px] sm:w-[290px] md:w-[300px] lg:w-[320px] xl:w-[330px] 2xl:w-[400px] h-[280px] sm:h-[290px] md:h-[300px] lg:h-[320px] xl:h-[330px] 2xl:h-[350px] flex justify-center items-center user-card mt-12'>
            <div className='w-[240px] sm:w-[250px] md:w-[270px] lg:w-[290px] xl:w-[300px] 2xl:w-[360px] h-[300px] sm:h-[310px] md:h-[300px] lg:h-[360px] xl:h-[380px] 2xl:h-[435px] '>
              <img
                src={userImage}
                alt='user-image'
                className='w-full h-[280px] sm:h-[280px] md:h-[285px] lg:h-[325px] xl:h-[340px] 2xl:h-[375px]  object-cover'
              />
            </div>
          </div>
          <div className='w-full h-[auto] mt-5'>
            <div>
              <h1 className='text-[26px] font-semibold text-gray-light-900'>
                Curious about me? Here you have it:
              </h1>
            </div>
            <div className='mt-3'>
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
            </div>
            <div className='mt-3'>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
            </div>
            <div className='mt-3'>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
            </div>
            <div className='mt-3'>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
