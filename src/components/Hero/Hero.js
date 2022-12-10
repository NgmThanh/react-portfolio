import './Hero.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from '../../utils/SplitText3.min.js'
import hero from "../../images/hero.jpg";

export default function Hero() {

  useEffect(() => {
    // --------------------------------------------------------
    // FitText-UMD
    // source : https://www.npmjs.com/package/FitText-UMD
    var fitText = require("FitText-UMD");
    // fit text with magic number
    fitText(document.querySelector(".title-hero"), 0.41);

    // // --------------------------------------------------------
    // // Text appear animation
    const split = new SplitText("#hero-title", {
      type: "lines",
      linesClass: "lineChildren",
    });

    new SplitText("#hero-title", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: .8,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "var(--custom-ease-out)",
    });
  }, []);

  return (
    <section id="home" className="main-hero-section" data-scroll-section>
      <div className="text text-24 font-neutral mb-32 ml-1">I'm a</div>

      <h1 id="hero-title" className="font-white text-center title title-hero">
        <span>Creative Designer</span>
      </h1>

      <div className="text text-24 font-neutral ml-1">From France</div>

      <div className="hero-image">
        <img src={hero} alt="hero"></img>
      </div>

      <div className="text scroll-text font-white">Scroll to explore</div>
    </section>
  )
}