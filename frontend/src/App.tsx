
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Project from './pages/Projekt/Projekt'
import { useState } from 'react'
import { NavColorConext } from './components/context'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [navColor, setNavColor] = useState("#183d3d")

  return (
    <NavColorConext.Provider value={{navColor, setNavColor}}>
      <BrowserRouter>
    <ScrollToTop/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project/:index" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
  </NavColorConext.Provider>
  )
}

export default App
