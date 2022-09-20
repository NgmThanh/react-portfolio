import '../../styles/Works.scss'
import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from 'gsap/Observer';
import { gsap } from "gsap";

export default function WorksHomeLayout() {

  useEffect(() => {
    // --------------------------------------------------------
    // FitText-UMD
    // source : https://www.npmjs.com/package/FitText-UMD
    // var fitText = require("FitText-UMD");
    // fit text with magic number
    // fitText(document.querySelector(".works-title"), 2.2);

    // gsap.registerPlugin(ScrollTrigger);

    // let sections = gsap.utils.toArray(".panel");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".home-works-section",
    //     start: "top top",
    //     end: "+=3000",
    //     pin: true,
    //     scrub: 1,
    //   }
    // });
  });

  return (
    <section id="works-home" className="home-works-section">
      <h2 className="works-title title-160 font-white">Recent Work</h2>

      <div className="work-slider">
        <div className="work-content">
          <img className="work-image" src="./images/real-estate-exterior.jpg" alt="real estate project"></img>
          <div className="work-description">
            <h3 className="work-title font-white">Self Branding</h3>
            <p className="work-detail font-neutral text">UI / UX Design, Development</p>
          </div>
        </div>

        <div className="work-content">
          <img className="work-image" src="./images/real-estate-exterior.jpg" alt="real estate project"></img>
          <div className="work-description">
            <h3 className="work-title font-white">Self Branding</h3>
            <p className="work-detail font-neutral text">UI / UX Design, Development</p>
          </div>
        </div>

        <div className="work-content">
          <img className="work-image" src="./images/real-estate-exterior.jpg" alt="real estate project"></img>
          <div className="work-description">
            <h3 className="work-title font-white">Self Branding</h3>
            <p className="work-detail font-neutral text">UI / UX Design, Development</p>
          </div>
        </div>

        <div className="work-content">
          <img className="work-image" src="./images/real-estate-exterior.jpg" alt="real estate project"></img>
          <div className="work-description">
            <h3 className="work-title font-white">Self Branding</h3>
            <p className="work-detail font-neutral text">UI / UX Design, Development</p>
          </div>
        </div>
      </div>

      {/* <section className="panel red">
        ONE
      </section>
      <section className="panel orange">
        TWO
      </section>
      <section className="panel purple">
        THREE
      </section>
      <section className="panel green">
        FOUR
      </section>
      <section className="panel gray">
        FIVE
      </section> */}
    </section>
  )
}