import '../../styles/Hero.scss';
import { useEffect } from 'react';

export default function HeroLayout() {

  useEffect(() => {
    // --------------------------------------------------------
    // FitText-UMD
    // source : https://www.npmjs.com/package/FitText-UMD
    var fitText = require("FitText-UMD");
    // fit text with magic number
    fitText(document.querySelector(".title-home"), 0.58);
  });

  return (
    <section id="home" className="main-hero-section" data-scroll-section>
      <h1 className="font-white">
        <span className="title-32">Creative Design</span><br></br><span className="title-home">Experiences</span>
      </h1>

      <div className="text scroll-text font-white-grey">Scroll to explore</div>
    </section>
  )
}