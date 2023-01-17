import './Works.scss';
import { useEffect, useRef, useState } from 'react';
// import gsap from "gsap";
// import SplitText from '../../utils/SplitText3.min.js';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function WorksHome() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
  }, []);

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

  const thumbnailWork1 = require('../../images/projects/Lol-universe.webp');
  const thumbnailWork2 = require('../../images/projects/RE-management.webp');
  const thumbnailWork3 = require('../../images/projects/HD-assistante.webp');
  const thumbnailWork4 = require('../../images/projects/Self-branding.webp');
  const thumbnailWork5 = require('../../images/projects/MT-architecture.webp');
  const thumbnailWork6 = require('../../images/projects/Jasmin-bonheur.webp');


  const works = [
    {
      "title": "Jasmin Bonheur",
      "thumbnail": thumbnailWork6,
      "detail": "UI / UX Design, Development",
      "link": "https://www.behance.net/gallery/161514471/Guerlain-Jasmin-Bonheur-Product-Landing-Page-Concept",
    },
    {
      "title": "MT Architecture",
      "thumbnail": thumbnailWork5,
      "detail": "UI / UX Design, Development",
      "link": "https://www.behance.net/gallery/160351639/MT-Architecture",
    },
    {
      "title": "Self Branding",
      "thumbnail": thumbnailWork4,
      "detail": "UI / UX Design, Development",
      "link": "https://www.behance.net/gallery/158897383/Creative-Designer-Portfolio",
    },
    {
      "title": "HD Assistante",
      "thumbnail": thumbnailWork3,
      "detail": "UI / UX Design",
      "link": "https://www.behance.net/gallery/158436257/HD-Assistante-Website",
    },
    {
      "title": "Real Estate",
      "thumbnail": thumbnailWork2,
      "detail": "UI / UX Design",
      "link": "https://www.behance.net/gallery/156839471/Real-Estate-Management-Interface",
    },
    {
      "title": "LOL Universe",
      "thumbnail": thumbnailWork1,
      "detail": "UI / UX Design",
      "link": "https://www.behance.net/gallery/156836453/League-of-Legends-Universe",
    }
  ]

  const workSliderContent = works.map((work, key) =>
    <SwiperSlide key={key} className={cn("work-item", { "is-reveal": reveal })}>
      <a href={work.link} target="_blank" rel="noreferrer">
        <div className="work-canvas">
          <img className="work-item-image" src={work.thumbnail} alt={work.title} data-scroll data-scroll-speed="-2" data-scroll-target=".work-canvas"></img>
        </div>
        <div className="work-description">
          <h3 className="text-24 font-white">{work.title}</h3>
          <p className="work-detail font-neutral text">{work.detail}</p>
        </div>
      </a>
    </SwiperSlide>
  )

  return (
    <section id="works-home" className={cn("home-works-section", { "is-reveal": reveal })} data-scroll-section>
      <h2 ref={ref} id="works-title" className={cn("works-title title title-works font-white", { "is-reveal": reveal })} data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Recent Works</h2>

      <Swiper slidesPerView={"auto"} className="work-slider">
        {workSliderContent}
      </Swiper>
    </section>
  )
}