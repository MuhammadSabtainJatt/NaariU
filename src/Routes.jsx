import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Team from './pages/Team'
import About from './pages/Home/thirdComponent'
import Services from './pages/Home/card'
import Privacy from './pages/Privacy'
import Problems from './pages/prob&Sol'
import Header from './pages/Home/home'
import Footer from './pages/Footer'
export default function CustomRoutes() {
    return (
      <>
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/services' element={<Services />} />
            <Route path='/problems' element={<Problems />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </>
    )
}
