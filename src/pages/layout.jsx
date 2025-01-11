import React from 'react'
import Home from './home'
import About from './about'
import Skills from './skills'
import Work from './work'
import Projects from '../components/projects'
import Testimonails from './testimonails'



export default function Layout() {
  return (
   <>
    <Home />
    <About />
    <Skills />
    <Work />
    <Projects />
    <Testimonails />
   </>
  )
}
