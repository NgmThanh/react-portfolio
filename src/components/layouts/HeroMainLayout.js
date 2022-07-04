import '../../styles/Hero.scss'

export default function HeroMainLayout() {

  return (
    <section id="home" className="main-hero-section">
      <div className="main-hero-background">
        <div className="main-hero-content">
          <div className="spaced-subtitle font-gold col-1">Portfolio</div>
          <div>
            <h1 className="title-main font-bright ml-1">
              <span className="title-stroke-4">Creative</span><br></br>
              <span className="ml-2">Digital</span><br></br>
              <span className="ml-2">Designer</span>
            </h1>

            <span className="subtitle-medium font-light col-4 ml-4 mt-200">Always in love with code and design, i like to learn new things</span>
          </div>
        </div>
      </div>
    </section>
  )
}