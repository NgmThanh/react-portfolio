import './Works.scss';
import { useEffect, useRef } from 'react';
// import gsap from "gsap";
// import SplitText from '../../utils/SplitText3.min.js';

export default function WorksHome() {
  const ref = useRef(null);

  useEffect(() => {
    // --------------------------------------------------------
    // Text appear animation
    // const split = new SplitText("#works-title", {
    //   type: "lines",
    //   linesClass: "lineChildren",
    // });

    // new SplitText("#works-title", {
    //   type: "lines",
    //   linesClass: "lineParent",
    // });

    // gsap.to(split.lines, {
    //   duration: 1,
    //   y: -20,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: "var(--custom-ease-out)",
    // });
  }, []);

  const thumbnailWork1 = require('../../images/projects/Self-branding.jpg');
  const thumbnailWork2 = require('../../images/projects/HD-assistante.jpg');
  const thumbnailWork3 = require('../../images/projects/RE-management.jpg');
  const thumbnailWork4 = require('../../images/projects/Lol-universe.jpg');

  const works = [
    {
      "title": "Self Branding",
      "thumbnail": thumbnailWork1,
      "detail": "UI / UX Design, Development",
      "link": "https://www.behance.net/gallery/158897383/Creative-Designer-Portfolio",
    },
    {
      "title": "HD Assistante",
      "thumbnail": thumbnailWork2,
      "detail": "UI / UX Design",
      "link": "https://www.behance.net/gallery/158436257/HD-Assistante-Website",
    },
    {
      "title": "Real Estate",
      "thumbnail": thumbnailWork3,
      "detail": "UI / UX Design",
      "link": "https://www.behance.net/gallery/156839471/Real-Estate-Management-Interface",
    },

    {
      "title": "LOL Universe",
      "thumbnail": thumbnailWork4,
      "detail": "UI / UX Design",
      "link": "https://www.behance.net/gallery/156836453/League-of-Legends-Universe",
    }
  ]

  const workSliderContent = works.map((work, key) =>
    <div className="work-content" key={key}>
      <a href={work.link} target="_blank" rel="noreferrer">
        <div className="work-canvas">
          <img className="work-image" src={work.thumbnail} alt={work.title} data-scroll data-scroll-speed="-1" data-scroll-target=".work-canvas"></img>
        </div>
        <div className="work-description">
          <h3 className="text-24 font-white">{work.title}</h3>
          <p className="work-detail font-neutral text">{work.detail}</p>
        </div>
      </a>
    </div>
  )

  return (
    <section id="works-home" className="home-works-section" data-scroll-section>
      <h2 ref={ref} id="works-title" className="works-title title title-works font-white" data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Recent Works</h2>

      <div className="work-slider">
        {workSliderContent}
      </div>
    </section>
  )
}