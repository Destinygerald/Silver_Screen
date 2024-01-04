import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import FrontPage from "./Pages/FrontPage"
import { PopupContextProvider } from './Context/PopupContext'
import { Routes, Route } from "react-router-dom"
import { Popup2ContextProvider } from './Context/PopupContext2'

function App() {

  return (
    <div className='app'>
      <PopupContextProvider>
      <Popup2ContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="*" element={<FrontPage />} />
        </Routes>
      </Popup2ContextProvider>
      </PopupContextProvider>
    </div>
  )
}

export default App
