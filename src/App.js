import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/about/About';
import StyleSwitcher from './components/StyleSwitcher';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false)
  return (
    <Router>
      <Navbar barOpen={opened => setOpen(opened) }/>
      <Routes>
        <Route path='/' element={<Home openBar ={open} />} />
        <Route path='/about' element={<About openBar ={open} />} />
        <Route path='/services' element={<Services openBar ={open} />} />
        <Route path='/portfolio' element={<Portfolio openBar ={open} />} />
        <Route path='/contact' element={<Contact openBar ={open} />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <StyleSwitcher />
    </Router>
  );
}

export default App;
