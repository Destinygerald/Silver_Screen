import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import FrontPage from "./Pages/FrontPage"
import { PopupContextProvider } from './Context/PopupContext'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='app'>
      <PopupContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="*" element={<FrontPage />} />
        </Routes>
      </PopupContextProvider>
    </div>
  )
}

export default App
