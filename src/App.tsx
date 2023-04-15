import { useState } from 'react'
import './App.css'
import Nav from './Component/Ui-Component/Nav'
import Home from './Component/Page/Home'
import { Route, Routes } from 'react-router-dom'
import Bookmark from './Component/Page/Bookmark'

function App() {

  return (
    <div className='bg-purple-800 '>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  )
}

export default App
