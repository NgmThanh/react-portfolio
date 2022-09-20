import "../../styles/Contact.scss"
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function ContactLayout() {

  useEffect(() => {
    // check if font is loaded before rolling text
    const font = new FontFace("SangBleu Empire", "url(fonts/SangBleuEmpire-Regular.otf)", {
      style: "normal",
      weight: "400",
    });

    document.fonts.add(font);
    font.load();

    document.fonts.ready.then(() => {
      // --------------------------------------------------------
      // Rolling text
      // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010
      gsap.registerPlugin(ScrollTrigger);

      let direction = 1; // 1 = forward, -1 = backward scroll

      const roll1 = roll(".rolling-text", { duration: 10 });
      const roll2 = roll(".rollingText02", { duration: 10 }, true);
      ScrollTrigger.create({
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1, roll2], { timeScale: direction, overwrite: true });
          }
        }
      });

      // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
      function roll(targets, vars, reverse) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");

        const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
          }
        })
        const elements = gsap.utils.toArray(targets);
        const clones = elements.map(el => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);
          return clone;
        });
        const positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {
          position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
        }));

        positionClones();
        elements.forEach((el, i) => tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0));

        window.addEventListener("resize", () => {
          let time = tl.totalTime(); // record the current time
          tl.totalTime(0); // rewind and clear out the timeline
          positionClones(); // reposition
          tl.totalTime(time); // jump back to the proper time
        });

        return tl;
      }
    });

    // --------------------------------------------------------
    // Follow mouse image
    // https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html

    let constrain = 60;
    let mouseOverContainer = document.querySelector('.contact-section');
    let layer = document.querySelector('.contact-img');

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;

      return "perspective(100vw) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
    };

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    mouseOverContainer.onmousemove = function (e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([layer]);

      window.requestAnimationFrame(function () {
        transformElement(layer, position);
      });
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="wrapper-rolling-text">
        <div className="rolling-text title-200">
          <span>Get in touch · Get in touch ·&nbsp;</span>
        </div>
      </div>

      <div className="mid-container">
        <div className="contact-img-container">
          <img src="./images/contact-image.jpg" alt="contact" className="contact-img"></img>
        </div>

        <div className="links">
          <div className="link-title text">Socials</div>
          <div className="link text hover-underline-animation"><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble</a></div>
          <div className="link text hover-underline-animation"><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Instagram</a></div>
          <div className="link text hover-underline-animation"><a href="https://dribbble.com/" target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>

        <div className="links">
          <div className="link-title text">Contact</div>
          <div className="link text hover-underline-animation"><a href="mailto:nmthanh99@gmail.com">nmthanh99@gmail.com</a></div>
          <div className="link text hover-underline-animation"><a href="tel:+33621617481">+33 6 21 61 74 81</a></div>
          <div className="link text hover-underline-animation">&#8205;</div>
        </div>
      </div>

      <div className="text designed-by font-dark">Designed by Minh Thanh.</div>
    </section>
  )
}