import './About.scss';
import profilePicture from "../../images/contact-image-thumbnail.jpg"
import lysFlower from "../../images/lys.png"

export default function About() {
  return (
    <section id="about" className="about-section" data-scroll-section>
      <div className="about-row mb-80">
        <div className="side-subtitle text font-white-grey">About me</div>
        <div className="title-96 font-white">Independant Designer<br></br>Based in Paris</div>
      </div>

      <div className="about-row">
        <div className="about-canvas">
          <img src={profilePicture} alt="profile illustration" className="about-image"></img>
        </div>
        <div className="text font-white-grey">Always in love with code and design, I like to learn new things every day and challenge myself with new projects, translating concepts into visual design. Always in love every day and challenge myself </div>
      </div>

      <div className="side-subtitle text font-white-grey mt-160">Quote</div>
      <div className="col-8 quote-container mb-80">
        <div className="quote font-white mt-120">“Every great design begins with an even better story.”</div>
        <div className="quote-author">Lorinda Mamo</div>
        <img src={lysFlower} alt="lys flower" className="lys-flower" data-scroll></img>
      </div>
    </section>
  )
}