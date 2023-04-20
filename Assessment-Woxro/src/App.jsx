import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Technology from './components/Technology';
import Careers from './components/Careers';
import Blogs from './components/Blogs';
import OurWorks from './components/OurWorks';
import ContactUs from './components/ContactUs';

function App() {

  return (
    <div style={{backgroundColor:"black"}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Services />} />
          <Route path='/Technology' element={<Technology />} />
          <Route path='/Career' element={<Careers />} />
          <Route path='/Blog' element={<Blogs />} />
          <Route path='/OurWork' element={<OurWorks />} />
          <Route path='/Contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
