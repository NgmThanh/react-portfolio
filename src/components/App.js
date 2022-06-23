import '../styles/App.scss';
import React, { useEffect } from 'react';
import SmoothScroll from 'smoothscroll-for-websites';
import { gsap } from "gsap";
import Menu from './layouts/Menu';

export default function App() {

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

    // SmoothScroll for websites 
    // Source : https://github.com/gblazex/smoothscroll-for-websites
    SmoothScroll({ stepSize: 60, animationTime: 800 })

    // GSAP custom cursor
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
    gsap.set('.follower', { xPercent: -50, yPercent: -50 });

    var cur = document.querySelector('.cursor');
    var follow = document.querySelector('.follower');

    window.addEventListener('mousemove', e => {
      gsap.to(cur, .1, { x: e.clientX, y: e.clientY });
      gsap.to(follow, .6, { x: e.clientX, y: e.clientY });
    });

    // page transition handler
    // source : https://codepen.io/kylops/pen/PzZjXz
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
      button.onclick = () => {
        console.log("transition")
        var id = button.getAttribute("id");
        var layerClass = "." + id + "-layer";
        var layers = document.querySelectorAll(layerClass);

        for (const layer of layers) {
          layer.classList.toggle("active");
        }
      }
    })
  }, []);

  return (
    <div className="App">
      <div id="cursor" className="cursor"></div>
      <div className="follower"></div>

      <div className="transition-layer">
        <div className="bottom-layer">
          <div className="bottom-layer bottom-layer--2"></div>
          <div className="bottom-layer bottom-layer--3"></div>
        </div>
      </div>

      <Menu />
    </div>
  );
}