import '../../styles/Introduction.scss'
import TextSeparator from './TextSeparator'

export default function IntroductionLayout() {

  return (
    <section id="introduction" className="introduction-section">
      <div className="title-col-blurb">
        <h2 className="title-third font-bright">Creative &amp;<br></br>Passionnate</h2>
        <div className="spaced-subtitle text-right font-gold">Summary</div>
      </div>

      <div className="col-blurb">
        <img src="./summary-1.jpg" alt="desktop" className="col-5"></img>
        <div className="col-5 mb-120">
          <h3 className="subtitle-large font-light">Every great design begins with an even better story</h3>
          <p className="col-3 mt-80 text font-light">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
          <div className="mt-80 subtitle-small btn font-light"><span>Browse all projects</span></div>
        </div>
      </div>

      <TextSeparator />
    </section>
  )
}