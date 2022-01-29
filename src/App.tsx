import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from 'screens/details'
import Home from 'screens/home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
