import './Hero.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from '../../utils/SplitText3.min.js'

export default function Hero() {

  useEffect(() => {
    // --------------------------------------------------------
    // FitText-UMD
    // source : https://www.npmjs.com/package/FitText-UMD
    var fitText = require("FitText-UMD");
    // fit text with magic number
    fitText(document.querySelector(".title-home"), 0.58);

    // --------------------------------------------------------
    // Text appear animation
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
      <h1 id="hero-title" className="font-white" data-scroll data-scroll-speed="1">
        <span className="title-32">Creative Design</span><br></br><span className="title-home">Experiences</span>
      </h1>

      <div className="text scroll-text font-white-grey">Scroll to explore</div>
    </section>
  )
}