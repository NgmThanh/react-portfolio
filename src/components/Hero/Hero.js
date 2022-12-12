import './Hero.scss';
import { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import SplitText from '../../utils/SplitText3.min.js'
import hero from "../../images/hero.jpg";
import cn from 'classnames';

export default function Hero() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
  }, []);

  useEffect(() => {
    // // --------------------------------------------------------
    // // Text appear animation
    // const split = new SplitText("#hero-titl e", {
    //   type: "lines",
    //   linesClass: "lineChildren",
    // });

    // new SplitText("#hero-title", {
    //   type: "lines",
    //   linesClass: "lineParent",
    // });

    // gsap.to(split.lines, {
    //   duration: .8,
    //   y: 0,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: "var(--custom-ease-out)",
    // });
  }, []);

  return (
    <section id="home" className="main-hero-section" data-scroll-section>
      <div className="container-title">
        <div className="text text-24 font-neutral ml-1 mb-24 tablet-ml-0 tablet-mb-0" data-scroll data-scroll-speed="-1">I'm a</div>
        <h1 id="hero-title" className="font-white ml-1 tablet-ml-0 title title-hero" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">
          Creative Designer
        </h1>
        <div className="text text-24 font-neutral ml-1 tablet-ml-0 from-france" data-scroll data-scroll-speed="-1">From France</div>
      </div>

      <div className={cn("hero-image", { "is-reveal": reveal })}>
        <img src={hero} alt="hero" data-scroll data-scroll-speed="-1" data-scroll-target=".hero-image"></img>
      </div>

      <div className="scroll-text text font-white">Scroll to explore</div>
    </section>
  )
}