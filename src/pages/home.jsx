import React from 'react'
import Header from '../components/header'
import userImage from '../assets/user-home.jpg';
import { FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import About from './about';

export default function Home () {
  return (
    <>
      {/* header component */}
      <Header />
      <section className='w-full h-[auto]'>
        <div className='w-[90%] h-[100vh] mx-auto flex flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse justify-center sm:justify-between items-center sm:items-center'>
          {/* user card */}
          <div className='w-[280px] h-[280px] flex justify-center items-center user-card'>
            <div className='w-[240px] h-[300px]'>
              <img
                src={userImage}
                alt='user-image'
                className='w-full h-[280px] object-cover'
              />
            </div>
          </div>
          {/* home text component */}
          <div className='w-full h-[auto] flex flex-col mt-5'>
            <div className='flex'>
              <h1 className='text-[32px] inline'>Hi, I’m Suhrob</h1>
            </div>
            {/* description */}
            <div>
              <p>
                I'm a full stack developer (React.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 2 years, I still love it as if it was something new.
              </p>
            </div>
            <div className='mt-4 mb-4'>
              <h4 className='text-[16px] font-normal'><FiMapPin className='inline-block'/> Uzbekistan Samarkand</h4>
              <p className='flex items-center'><div className='inline-block w-[5px] h-[5px] mr-3 rounded-[50%] bg-emerald'></div> Available for new projects</p>
            </div>
            {/* socialmedia */}
            <div className='flex'>
              <a className='text-[17px] mr-5' target='_blank' href="https://www.linkedin.com/in/suhrobbozorov/"><FaGithub /></a>
              <a className='text-[17px] mr-5' target='_blank' href="https://www.youtube.com/@sariqdasturchi/"><FiYoutube /></a>
              <a className='text-[17px]' target='_blank' href="https://t.me/suhrobcode"><TbBrandTelegram /></a>
            </div>
          </div>
        </div>
      </section>
      <About />
    </>
  )
}
