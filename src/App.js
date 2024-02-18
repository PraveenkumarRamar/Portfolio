import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Components/Homepage'
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homepage/>} />
        <Route path='*' element={<Navigate to='/home' />} /> 
      </Routes>
    </BrowserRouter>
  </>
}

export default App