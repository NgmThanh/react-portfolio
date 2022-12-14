import './About.scss';
import about from "../../images/about.webp";
import cn from 'classnames';
import { useState } from 'react';

export default function AboutWorks() {
  const [reveal, setReveal] = useState(false);

  return (
    <section id="about" className="about-section" data-scroll-section>
      <div className="font-white ml-1 tablet-m-0 title title-description"  data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Hi, I'm Thanh, a passionate designer and developer in Paris. I like to learn new things every day and challenge myself with new works.</div>
      <div className="font-neutral ml-1 mt-24 tablet-ml-0 text"  data-scroll data-scroll-direction="vertical" data-scroll-speed="1">Check out<br></br>my projects &#8594; <a className="font-white hover-underline-animation" href="#works-home">HERE</a></div>

      <div className="about-canvas mt-160 ml-4 tablet-ml-0">
        <img src={about} alt="about illustration" className={cn("about-image", { "is-reveal": reveal })} data-scroll data-scroll-speed="-2" data-scroll-target=".about-canvas"></img>
      </div>

      <div className="about-attached ml-2 tablet-ml-0 tablet-mr-0">
        <div className="about-attached-text font-neutral text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">I'm also an</div>
        <div className="about-attached-title font-white title title-section text-right" data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Amateur<br></br>Photographer</div>
      </div>
    </section>
  )
}