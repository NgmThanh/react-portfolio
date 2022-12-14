import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll() {

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: .8,
      lerp: .08,
      class: 'is-reveal',
      reloadOnContextChange: true,
      touchMultiplier: 3,
      smoothMobile: 0,
      smartphone: {
        smooth: true,
        breakpoint: 767
      },
      tablet: {
        smooth: true,
        breakpoint: 1024
      },
    });

    locoScroll.destroy();

    // --------------------------------------------------------
    // Locomotive Anchor Scroll
    // source : https://github.com/locomotivemtl/locomotive-scroll/issues/175
    const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

    anchorLinks.forEach((anchorLink) => {
      let hashval = anchorLink.getAttribute('href');
      let target = document.querySelector(hashval);

      anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        locoScroll.scrollTo(target);
      });
    });

    new ResizeObserver(() => locoScroll.update()).observe(document.querySelector("[data-scroll-container]"))

    locoScroll.init();
    locoScroll.start();
    locoScroll.update();
  }, []);
}