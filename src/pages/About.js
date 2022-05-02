import '../styles/About.scss'
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id="about" className="about-section mt-200">
      <div className="about-background">
        <div className="about-title">
          <span className="about-title__subtitle side-subtitle">Introduction</span>

          <h1 className="title-primary ml-1">
            <span><div className="line-left"></div>About</span><span className="colored">&nbsp;me</span><br></br>
            <span className="ml-2">and my</span><span className="colored">&nbsp;career</span>
          </h1>

          <a href="#aboutContent">
            <div className="arrow-button">
              <Icon icon="carbon:arrow-down-right" />
            </div>
          </a>
        </div>
      </div>

      <div id="aboutContent" className="about-description mt-200">
        <h3 className="subtitle col-4 ml-2">I&#039;m a designer based in <span className="colored">France</span></h3>
        <p className="col-3 ml-3 mt-120">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>

        <div className="about-description__flex_content mt-200">
          <div className="col-4 ml-1">
            <h3 className="title-secondary">Human<br></br><span className="colored">Computer</span><br></br>Interaction</h3>
            <div className="clearfix"></div>
            <p className="col-3">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>
          </div>
          <div className="about-description__canvas">
            <img src="../about-development.jpg" alt="development" />
          </div>
        </div>

        <h3 className="subtitle col-4 ml-6 mt-200">I&#039;m a designer based in <span className="colored">France</span></h3>
        <p className="col-3 ml-7 mt-120">Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visual design by paying close attention to details, and convert it into highly interactive experiences.</p>

        <div className="about-description__canvas col-7 ml-1 mt-200">
          <img src="../about-development.jpg" alt="development" />
        </div>
      </div>

      <div className="about-process + ' mt-200">
        <div>
          <span className="side-subtitle is-sticky">Design Process</span>
        </div>
        <div>
          <div className="about-process__item">
            <div className="about-process__item--title">
              <span>User Experience</span>
            </div>
            <div className="about-process__item--text">
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>

          <div className="about-process__item">
            <div className="about-process__item--title">
              <span>Usability</span>
            </div>
            <div className="about-process__item--text">
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>

          <div className="about-process__item">
            <div className="about-process__item--title">
              <span>UI / UX Design</span>
            </div>
            <div className="about-process__item--text">
              <p>Always in love with code and design, i like to learn new things every day and challenge myself with new projects, translating concepts into visua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}