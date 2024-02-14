import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Details from './components/Details'
import RouterDemo from './components/RouterDemo'

// PLAY AROUND WITH CSS AND MAKE IT LOOK NEAT

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/details" element={<Details />} />
      </Routes>
      <h1>ABC .Pvt Ltd</h1>
      <RouterDemo />
    </>
  )
}

export default App