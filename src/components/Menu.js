import '../styles/Menu.scss'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import App from './App';
import Error from './Error';

export default function Menu() {

  useEffect(() => {
    // Menu behavior event
    // When the user scrolls down, hide the navbar. When the user scrolls up or is on bottom of page, show the navbar
    let prevScrollpos = window.pageYOffset;
    const menu = document.getElementById("menu");

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos || window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1) {
        menu.style.top = "0";
      } else {
        menu.style.top = "-100px";
      }

      prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    <Router>
      <nav id="menu" className="menu">
        <div className="menu__inner">
          <Link to="/"><div><span>M</span><span className="italic side-subtitle">Thanh</span></div></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" id="aboutButton">About</Link></li>
            <li><Link to="/works" id="projectButton">Projects</Link></li>
            <li><Link to="/contact" id="contactButton">Contact</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}