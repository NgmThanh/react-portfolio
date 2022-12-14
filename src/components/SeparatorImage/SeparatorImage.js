import './SeparatorImage.scss';
import imageSeparator from "../../images/parallax-separator.webp";

export default function SeparatorImage() {
  return (
    <section id="home-separator" className="home-separator" data-scroll-section>
      <div className="separator-container">
        <img src={imageSeparator} alt="illustration separator" className="separator-image" data-scroll data-scroll-speed="-2" data-scroll-target=".separator-container"></img>
      </div>
    </section>
  )
}