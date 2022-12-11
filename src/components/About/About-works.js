import './About.scss';
import about from "../../images/about.jpg"

export default function AboutWorks() {
  return (
    <section id="about" className="about-section" data-scroll-section>
      <div className="font-white ml-1 title title-description"  data-scroll data-scroll-direction="vertical" data-scroll-speed="3">Passionate about design and code, the quality and finesse of my work are my greatest concerns.</div>
      <div className="font-neutral ml-1 mt-24 text"  data-scroll data-scroll-direction="vertical" data-scroll-speed="1">Check out<br></br>my projects &#8594; <a href="#works-home">HERE</a></div>

      <div className="about-canvas mt-160 ml-4">
        <img src={about} alt="about illustration" className="about-image" data-scroll data-scroll-speed="-1" data-scroll-target=".about-canvas"></img>
      </div>

      <div className="about-attached ml-2">
        <div className="about-attached-text font-neutral text"  data-scroll data-scroll-direction="vertical" data-scroll-speed="1">I'm also an</div>
        <div className="about-attached-title font-white title title-section text-right" data-scroll data-scroll-direction="vertical" data-scroll-speed="3">Amateur<br></br>Photographer</div>
      </div>
    </section>
  )
}