import '../../styles/Menu.scss'
import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import About from './AboutLayout';
// import Works from './WorksLayout';
// import Contact from './ContactLayout';
// import App from '../App';
// import Error from '../pages/Error';

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
        menu.style.top = "-126px";
      }

      prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    // <Router>
    //   <nav id="menu" className="menu">
    //     <div className="menu__inner">
    //       <Link to="/"><div><span>M</span><span className="italic side-subtitle">Thanh</span></div></Link>
    //       <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about" id="aboutButton">About</Link></li>
    //         <li><Link to="/works" id="projectButton">Projects</Link></li>
    //         <li><Link to="/contact" id="contactButton">Contact</Link></li>
    //       </ul>
    //     </div>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<App />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/works" element={<Works />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </Router>
    <nav id="menu" className="menu">
      <div className="menu__inner">
        <div className="menu__inner--hamburger"><div className="hamburger-icon"></div><span>Menu</span></div>
        <div className="menu__inner--logo">M<span className="logo-mid font-gold">T</span>H</div>
        <div className="menu__inner--contact"><span>Get in touch</span><div className="contact-circle"></div></div>
      </div>
    </nav>
  )
}