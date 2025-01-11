import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from 'react-icons/md'
import { MdOutlineClose } from 'react-icons/md'
import { navMenu } from '../utils/constants'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

import resume from '../assets/Resume.pdf'

export default function Header () {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark') // Tailwind CSS 'dark' sinfini qo'shish
      localStorage.setItem('theme', 'dark') // Dark mode holatini saqlash
    } else {
      document.documentElement.classList.remove('dark') // 'dark' sinfini olib tashlash
      localStorage.setItem('theme', 'light') // Light mode holatini saqlash
    }
  }, [darkMode])

  const darkModeHandler = () => {
    setDarkMode(dark => !dark)
  }

  const toggleMenuHandler = () => {
    setToggleMenu(menu => !menu)
  }

  return (
    <>
      <header className='w-full h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px] xl:h-[85px] 2xl:h-[90px] flex items-center justify-center  shadow-sm fixed  backdrop-blur-sm z-50'>
        <nav className='w-full sm:w-full md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] h-full flex justify-between sm:justify-between md:justify-between lg:justify-between xl:justify-between 2xl:justify-between items-center pr-5 pl-5'>
          <div>
            <a href='/'>
              <span className='flex justify-center items-center text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] 2xl:text-[38px] font-semibold dark:text-gray-light'>
                <FaAngleLeft />
                SD /
                <FaAngleRight />
              </span>
            </a>
          </div>
          {/* desktop menu */}
          <div className='hidden sm:hidden md:block lg:block xl:block 2xl:block'>
            <div className='flex'>
              <div className='flex'>
                <ul className='flex items-center justify-around'>
                  {navMenu.map((item, id) => (
                    <li
                      key={item.id}
                      className={`${
                        id === navMenu.length - 1 ? 'mr-0' : 'mr-5'
                      }`}
                    >
                      <a
                        href={`${item.link}`}
                        className='text-gray-dark dark:text-gray-light'
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex items-center ml-5'>
                <div className='flex mr-3'>
                  {darkMode ? (
                    <button className='flex justify-center items-center w-8 h-8 rounded-[8px] dark:bg-gray-dark-300 hover:opacity-80'>
                      <MdSunny
                        onClick={darkModeHandler}
                        className='cursor-pointer text-gray-dark dark:text-gray-light'
                      />
                    </button>
                  ) : (
                    <button className='flex justify-center items-center w-8 h-8 rounded-[8px] bg-gray-light-500 text-gray-light hover:bg-gray-dark-50 hover:text-gray-light'>
                      <BsFillMoonStarsFill
                        onClick={darkModeHandler}
                        className=' cursor-pointer'
                      />
                    </button>
                  )}
                </div>
                <div>
                  <a
                    href={resume}
                    download={resume}
                    className='w-[100%] h-[36px] p-3 bg-gray-light-900 text-gray-light-50 font-medium rounded-[12px] ml-2 cursor-pointer'
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div className='flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden items-center justify-center'>
            {!toggleMenu && (
              <button>
                <HiOutlineMenuAlt1
                  onClick={toggleMenuHandler}
                  className='text-[24px] dark:text-gray-light'
                />
              </button>
            )}
          </div>
          {toggleMenu && (
            <div className='absolute sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden inset-y-0 inset-x-0 w-[100%] h-screen z-10'>
              <div className='w-[92%] h-screen bg-gray-light-50 dark:bg-gray-dark shadow fixed'>
                <div className='w-full flex items-center justify-between p-3'>
                  <a href='/'>
                    <span className='flex justify-center items-center text-[28px] font-semibold text-gray-dark dark:text-gray-light'>
                      <FaAngleLeft />
                      SD /
                      <FaAngleRight />
                    </span>
                  </a>
                  <button>
                    <MdOutlineClose
                      onClick={toggleMenuHandler}
                      className='text-[24px] text-gray-dark dark:text-gray-light'
                    />
                  </button>
                </div>
                <div className='w-[100%] h-[auto] mx-auto pl-5'>
                  <ul className='flex flex-col'>
                    {navMenu.map((item, id) => (
                      <li key={item.id} className='mt-3'>
                        <a
                          href={`${item.link}`}
                          className='text-[17px] font-medium text-gray-dark dark:text-gray-light'
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className='w-[90%] h-[1px] mt-8 mb-8 bg-gray-light-300'></div>
                  <div className='w-full h-[auto] flex flex-col'>
                    <div className='w-full flex justify-between items-center'>
                      <h3 className='text-gray-dark dark:text-gray-light'>
                        Switch Theme
                      </h3>
                      <div className='flex mr-10'>
                        {darkMode ? (
                          <button className='flex justify-center items-center w-8 h-8 rounded-[8px] bg-gray-light-500 text-gray-light hover:bg-gray-dark-50 hover:text-gray-light'>
                            <MdSunny
                              onClick={darkModeHandler}
                              className='text-[19px] text-gray-dark dark:text-gray-light'
                            />
                          </button>
                        ) : (
                          <button className='flex justify-center items-center w-8 h-8 rounded-[8px] bg-gray-light-500 text-gray-light hover:bg-gray-dark-50 hover:text-gray-light'>
                            <BsFillMoonStarsFill
                              onClick={darkModeHandler}
                              className='text-[19px]'
                            />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className='w-full h-[auto] mt-5'>
                      <a href={resume} download={resume}>
                        <button className='w-[90%] h-[36px] bg-gray-light-900 text-gray-light-50 font-medium rounded-[12px]'>
                          Download CV
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
