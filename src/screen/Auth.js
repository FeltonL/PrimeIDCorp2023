import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../screen/mainpages/navigationbar/Navigationbar'
import Subscribe from '../screen/mainpages/subscribefooter/Subscribe'
import Home from '../screen/Home'
import Solution from '../components/Solution'
import About from "../components/About"
import Contact from '../components/Contact'
import ErrorPage from '../components/ErrorPage'

const Auth = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='solution' element={<Solution />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Subscribe />
    </HashRouter>
  )
}
export default Auth