import './Menu.scss'
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Works from '../Works/InnerWorks';
import Error from '../../pages/Error';

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
        menu.style.top = "-160px";
      }

      prevScrollpos = currentScrollPos;
    }

    // Click menu event
    // const menuBtn = document.querySelector(".menu__inner--hamburger");
    // const menuLayout = document.querySelector(".menu-opened");

    // menuBtn.onclick = () => {
    //   menuLayout.classList.toggle("active")
    // }

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
    //   <Router>
    //   {/* <nav id="menu" className="menu">
    //     <div className="menu__inner">
    //       <Link to="/"><div><span>M</span><span className="italic side-subtitle">Thanh</span></div></Link>
    //       <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about" id="aboutButton">About</Link></li>
    //         <li><Link to="/works" id="projectButton">Projects</Link></li>
    //         <li><Link to="/contact" id="contactButton">Contact</Link></li>
    //       </ul>
    //     </div>
    //   </nav> */}
    //   <Menu />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/works" element={<Works />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </Router>

    <section>
      {/* <nav id="menu" className="menu">
          <div className="menu__inner">
            <div className="menu__inner--hamburger"><div className="hamburger-icon"></div><span>Menu</span></div>
            <div className="menu__inner--logo"><Link to="/">M<span className="logo-mid font-gold">T</span>H</Link></div>
            <div className="menu__inner--contact"><span>Get in touch</span><div className="contact-circle"></div></div>
          </div>
        </nav>

        <section id="menu-opened" className="menu-opened">
          <div className="menu-content">
            <div className="menu-left">
              <div className="menu-left__inner">
                <div className="spaced-subtitle font-gold">Menu</div>
                <div>
                  <ul className="menu-pages">
                    <li className="title-fourth">
                      <Link to="/">
                        <span className="nb-hover-menu font-bright">01</span>
                        <span className="element-menu">Home</span>
                      </Link>
                    </li>
                    <li className="title-fourth">
                      <Link to="/About" className="active">
                        <span className="nb-hover-menu font-bright">02</span>
                        <span className="element-menu">About me</span>
                      </Link>
                    </li>
                    <li className="title-fourth">
                      <Link to="/Works">
                        <span className="nb-hover-menu font-bright">03</span>
                        <span className="element-menu">Projects</span>
                      </Link>
                    </li>
                    <li className="title-fourth">
                      <Link to="/">
                        <span className="nb-hover-menu font-bright">04</span>
                        <span className="element-menu">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="menu-right">
              <div className="menu-right__inner">
                <img src="./summary-1.jpg" alt="menu" className="col-3"></img>
              </div>
            </div>
          </div>
        </section > */}

      <Router>
        <nav id="menu" className="menu">
          <div className="menu__inner font-white">
            <div className="menu__inner--logo"><Link to="/">MT</Link></div>
            <div className="menu__inner--links">
              <span className="text font-white font-weight-400 hover-underline-animation"><a href="#works-home">Work</a></span>
              <span className="text font-white font-weight-400 hover-underline-animation">About</span>
              <span className="text font-white font-weight-400 hover-underline-animation"><a href="#contact">Contact</a></span>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </section >
  )
}