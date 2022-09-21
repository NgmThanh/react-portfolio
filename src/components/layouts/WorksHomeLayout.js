import '../../styles/Works.scss';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from 'gsap/Observer';
import { gsap } from "gsap";

export default function WorksHomeLayout() {

  const thumbnailWork1 = require('../../images/real-estate-exterior.jpg');
  const thumbnailWork2 = require('../../images/real-estate-interior.jpg');
  const thumbnailWork3 = require('../../images/real-estate-exterior.jpg');
  const thumbnailWork4 = require('../../images/real-estate-exterior.jpg');

  const works = [
    {
      "title": "Self Branding",
      "thumbnail": thumbnailWork1,
      "detail": "UI / UX Design, Development",
    },
    {
      "title": "HD Assistante",
      "thumbnail": thumbnailWork2,
      "detail": "UI / UX Design",
    },
    {
      "title": "Real Estate",
      "thumbnail": thumbnailWork3,
      "detail": "UI / UX Design, Development",
    },

    {
      "title": "Project 4",
      "thumbnail": thumbnailWork4,
      "detail": "UI / UX Design",
    }
  ]

  const workSliderContent = works.map((work, key) =>
    <div className="work-content" key={key}>
      <img className="work-image" src={work.thumbnail} alt={work.title}></img>
      <div className="work-description">
        <h3 className="work-title font-white">{work.title}</h3>
        <p className="work-detail font-neutral text">{work.detail}</p>
      </div>
    </div>
  )

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
  }, []);

  return (
    <section id="works-home" className="home-works-section" data-scroll-section>
      <h2 className="works-title title-160 font-white">Recent Work</h2>

      <div className="work-slider">
        {workSliderContent}
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