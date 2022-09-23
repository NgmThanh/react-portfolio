import '../../styles/Works.scss';
import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import cn from 'classnames';
import SplitText from '../utils/SplitText3.min.js'
import useOnScreen from '../hooks/useOnScreen';

export default function WorksHomeLayout() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      // --------------------------------------------------------
      // Text appear animation
      const split = new SplitText("#works-title", {
        type: "lines",
        linesClass: "lineChildren",
      });

      new SplitText("#works-title", {
        type: "lines",
        linesClass: "lineParent",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "var(--custom-ease-out)",
      });
    }
  }, [reveal]);

  const thumbnailWork1 = require('../../images/real-estate-exterior-thumbnail.jpg');
  const thumbnailWork2 = require('../../images/real-estate-interior-thumbnail.jpg');
  const thumbnailWork3 = require('../../images/real-estate-exterior-thumbnail.jpg');
  const thumbnailWork4 = require('../../images/real-estate-exterior-thumbnail.jpg');

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
      <div className="work-canvas">
        <img className={cn("work-image", { "is-reveal": reveal })} src={work.thumbnail} alt={work.title}></img>
      </div>
      <div className="work-description">
        <h3 className="work-title font-white">{work.title}</h3>
        <p className="work-detail font-neutral text">{work.detail}</p>
      </div>
    </div>
  )

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

  return (
    <section id="works-home" className={cn("home-works-section", { "is-reveal": reveal })} data-scroll-section>
      <h2 ref={ref} id="works-title" className={cn("works-title title-160 font-white", { "is-reveal": reveal })}>Recent Work</h2>

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