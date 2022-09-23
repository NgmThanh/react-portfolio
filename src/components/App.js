import '../styles/App.scss';
import React, { useEffect } from 'react';
import Menu from './layouts/Menu';

export default function App() {

  useEffect(() => {

    // SmoothScroll for websites 
    // source : https://github.com/gblazex/smoothscroll-for-websites
    // SmoothScroll({ stepSize: 60, animationTime: 800 })

    // GSAP custom cursor
    // source : https://dev.to/baydezigner/custom-cursor-with-greensock-in-5-minutes-4he7
    // gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
    // gsap.set('.follower', { xPercent: -50, yPercent: -50 });

    // var cur = document.querySelector('.cursor');
    // var follow = document.querySelector('.follower');

    // window.addEventListener('mousemove', e => {
    //   gsap.to(cur, .1, { x: e.clientX, y: e.clientY });
    //   gsap.to(follow, .6, { x: e.clientX, y: e.clientY });
    // });

    // page transition handler
    // source : https://codepen.io/kylops/pen/PzZjXz
    // const buttons = document.querySelectorAll(".button");

    // buttons.forEach(button => {
    //   button.onclick = () => {
    //     console.log("transition")
    //     var id = button.getAttribute("id");
    //     var layerClass = "." + id + "-layer";
    //     var layers = document.querySelectorAll(layerClass);

    //     for (const layer of layers) {
    //       layer.classList.toggle("active");
    //     }
    //   }
    // })
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