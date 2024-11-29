import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Privacy from './pages/Privacy'
import Problems from './pages/prob&Sol'
import Footer from './pages/Footer'
export default function CustomRoutes() {
    return (
      <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<Team />} />
            <Route path='/problems' element={<Problems />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </>
    )
}
