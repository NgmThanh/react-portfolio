import '../../styles/Summary.scss'

export default function SummaryLayout() {

  return (
    <section id="summary" className="summary-section">
      <div className="summary-title">
        <div>
          <h2 className="title-third">Building Digital<br></br>Experiences</h2>
          <div className="script">Designer</div>
        </div>
        <div className="subtitle-medium text-right">I create memorable<br></br><span className="font-gold">experiences</span></div>
      </div>

      <div className="summary-1">
        <img src="./summary-1.jpg" alt="desktop" className="col-5"></img>
        <div className="col-5 mt-80">
          <h3 className="subtitle-large font-dark">Every great design begins with an even better story</h3>
          <p className="col-4 mt-80 text font-dark">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        </div>
      </div>

      <div className="summary-2 mt-240">
        <h3 className="subtitle-large font-dark col-6">Every great design begins with an even better story</h3>
        <div className="mt-80 summary-2__gallery">
          <img src="./summary-1.jpg" alt="desktop" className="col-4"></img>
          <img src="./summary-1.jpg" alt="desktop" className="col-8"></img>
        </div>
        <p className="mt-240 ml-4 col-4 text font-dark">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        <div className="mt-80 ml-4 subtitle-small btn font-dark"><span>More about me</span></div>
      </div>
    </section>
  )
}