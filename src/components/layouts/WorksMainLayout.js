import '../../styles/Works.scss'

export default function WorksMainLayout() {

  return (
    <section id="works-main" className="main-works-section">
      <p className="subtitle-medium font-gold">Here is the</p>
      <div className="title-third font-bright">List of my<br></br>recent projects</div>
      <div className="script">Projects</div>

      <div className="projects-grid">
        <div className="project-container project-right">
          <img src="/works-design-1.jpg"></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>
        
        <div className="project-container project-left">
          <img src="/works-design-1.jpg"></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>

        <div className="project-container project-right">
          <img src="/works-design-1.jpg"></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>

        <div className="project-container project-left">
          <img src="/works-design-1.jpg"></img>
          <span className="project-title subtitle-medium font-bright">Self Branding</span>
        </div>
      </div>

      <div className="mt-120 text-center subtitle-small btn font-light"><span>Browse all projects</span></div>
    </section>
  )
}