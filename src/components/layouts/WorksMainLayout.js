import '../../styles/Works.scss'

export default function WorksMainLayout() {

  return (
    <section id="works-main" className="main-works-section">
      <p className="spaced-subtitle font-gold">Latest works</p>
      <div className="title-third font-bright">List of my<br></br><span className="title-stroke-2">recent projects</span></div>

      <div className="projects-grid mt-120">
        <div className="project-container project-right">
          <img src="/works-design-1.jpg" alt=""></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>
        
        <div className="project-container project-left">
          <img src="/works-design-2.jpg" alt=""></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>

        <div className="project-container project-right">
          <img src="/works-design-1.jpg" alt=""></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>

        <div className="project-container project-left">
          <img src="/works-design-2.jpg" alt=""></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>
      </div>

      <div className="mt-120 text-center subtitle-small btn font-light"><span>Browse all projects</span></div>
    </section>
  )
}