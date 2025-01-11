import React from 'react'
import Home from './home'
import About from './about'
import Skills from './skills'
import Work from './work'
import Projects from '../components/projects'
import Testimonails from './testimonails'
import Contact from './contact'
import Footer from '../components/footer'



export default function Layout() {
  return (
   <>
    <Home />
    <About />
    <Skills />
    <Work />
    <Projects />
    <Testimonails />
    <Contact />
    <Footer />
   </>
  )
}
