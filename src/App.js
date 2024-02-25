import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Contact from './Components/Contact'
import About from './Components/About'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Navbarr from './Components/Navbarr'
function App() {

  return <>

    <BrowserRouter>
      <div id='wrapper'>
        <Navbarr />
        <Routes>
          <Route path='/home' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App