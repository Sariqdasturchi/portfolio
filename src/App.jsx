import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Layout from './pages/layout'

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
