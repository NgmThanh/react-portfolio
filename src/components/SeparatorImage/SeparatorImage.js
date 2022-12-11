import './SeparatorImage.scss';
import imageSeparator from "../../images/parallax-separator.jpg";

export default function SeparatorImage() {
  return (
    <section id="home-separator" className="home-separator" data-scroll-section>
      <img src={imageSeparator} alt="illustration separator" className="separator-image" data-scroll></img>
    </section>
  )
}