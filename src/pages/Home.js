import useLocoScroll from '../hooks/useLocoScroll'; import Hero from '../components/Hero/Hero';
import AboutWorks from '../components/About/About-works';
import SeparatorImage from '../components/SeparatorImage/SeparatorImage';
import AboutInstagram from '../components/About/About-instagram';
import WorksHome from '../components/Works/WorksHome';
import Contact from '../components/Contact/Contact';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {

  useEffect(() => {
    // The trick to viewport units on mobile
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  useEffect(() => {
    var follow = document.querySelector('.follower');
    var cur = document.querySelector('.cursor');

    // Custom cursor
    // https://www.youtube.com/watch?v=_UR74tkspqc
    if (follow.style.display !== "none" && cur.style.display !== "none") {
      gsap.set('.follower', { xPercent: -50, yPercent: -50 });
      gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

      window.addEventListener('mousemove', e => {
        gsap.to(cur, 0.2, { x: e.clientX, y: e.clientY });
        gsap.to(follow, 0.9, { x: e.clientX, y: e.clientY });
      });
    }
  }, []);

  useEffect(() => {
    // Rolling text
    // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010
    gsap.registerPlugin(ScrollTrigger);

    let direction = 1; // 1 = forward, -1 = backward scroll

    const roll1 = roll(".rolling-text", { duration: 10 });
    const roll2 = roll(".rollingText02", { duration: 10 }, true);
    ScrollTrigger.create({
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1;
          gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
        }
      }
    });

    // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
    function roll(targets, vars, reverse) {
      vars = vars || {};
      vars.ease || (vars.ease = "none");

      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
        }
      })
      const elements = gsap.utils.toArray(targets);
      const clones = elements.map(el => {
        let clone = el.cloneNode(true);
        el.parentNode.appendChild(clone);
        return clone;
      });
      const positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {
        position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
      }));

      positionClones();
      elements.forEach((el, i) => tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0));

      window.addEventListener("resize", () => {
        let time = tl.totalTime(); // record the current time
        tl.totalTime(0); // rewind and clear out the timeline
        positionClones(); // reposition
        tl.totalTime(time); // jump back to the proper time
      });

      return tl;
    }
  }, []);

  useLocoScroll();

  return (
    <section>
      <div id="cursor" className="cursor"></div>
      <div className="follower"></div>

      <Hero />
      <AboutWorks />
      <SeparatorImage />
      <AboutInstagram />
      <WorksHome />
      <Contact />
    </section>
  )
}