import '../../styles/Summary.scss'

export default function SummaryLayout() {

  return (
    <section id="summary" className="summary-section">
      <div className="title-col-blurb">
        <h2 className="title-third">Design &amp;<br></br>Development</h2>
        <div className="spaced-subtitle text-right font-gold">Summary</div>
      </div>

      <div className="col-blurb">
        <img src="./summary-1.jpg" alt="desktop" className="col-5"></img>
        <div className="col-5 mb-120">
          <h3 className="subtitle-large font-dark">Every great design begins with an even better story</h3>
          <p className="col-3 mt-80 text font-dark">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
        </div>
      </div>

      <div className="summary-subtitle mt-240">
        <h3 className="subtitle-large font-dark col-6">Every great design begins with an even better story</h3>
      </div>

      <div className="floated-blurb mt-240">
        <h3 className="subtitle-large font-dark">Every great story begins</h3>
        <div className="mt-160 ml-3 floated-blurb__text font-dark">
          <p className="text">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
          <div className="mt-80 subtitle-small btn font-dark">
            <span>More about me</span>
          </div>
        </div>

        <div className="floated-blurb__image col-8">
          <img src="./summary-1.jpg" alt="desktop"></img>
        </div>
      </div>
      <div className="clearfix"></div>
    </section>
  )
}