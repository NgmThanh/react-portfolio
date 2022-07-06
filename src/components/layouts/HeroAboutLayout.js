import '../../styles/Hero.scss'

export default function HeroAboutLayout() {

  return (
    <section id="about" className="about-hero-section">
      <div className="about-hero-background">
        <div className="about-hero-content">
          <div className="spaced-subtitle font-gold col-1">Portfolio</div>
          <h1 className="title-second font-bright ml-1">
            <span className="title-stroke-4">Building</span><br></br>
            <span className="ml-2">Digital</span><br></br>
            <span>Experiences</span>
          </h1>
          <div className="hero-illustration col-8"></div>
        </div>
      </div>
    </section>
  )
}