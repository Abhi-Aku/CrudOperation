import React from 'react'
import Home from './Components/Home'
import RegisterForm from './Components/RegisterForm';
import About from './Components/About';
import Contact from './Components/Contact';
import ShowData from './Components/ShowData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/show" element={<ShowData />} />
        </Routes>
      </Router>
    </>
  )
}

export default App