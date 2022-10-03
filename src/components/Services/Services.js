import './Services.scss';

export default function Services() {
  return (
    <section id="services" className="services-section" data-scroll-section>
      <div className="services-row mb-80">
        <div className="side-subtitle text font-dark">Workflow</div>
        <div>
          <div className="title-120 font-dark">Services Provided</div>
          <div className="text font-neutral col-4 mt-32">Always in love with code and design, I like to learn new things every day and challenge myself with</div>
        </div>
      </div>

      <div className="services-list mt-120">
        <ul>
          <li>
            <div className="services-space-between">
              <div className="flex-row">
                <p className="services-number">01</p>
                <div className="services-content">
                  <p className="services-title">Branding &amp; Identity</p>
                  <div className="services-description">Always in love with code and design, i like to learn new things every day and challenge myself. i like to learn new things every day and challenge myself</div>
                </div>
              </div>
              <div className="services-arrow">arrow</div>
            </div>
          </li>

          <li>
            <div className="services-space-between">
              <div className="flex-row">
                <p className="services-number">02</p>
                <div className="services-content">
                  <p className="services-title">User Experience Research</p>
                  <div className="services-description">Always in love with code and design, i like to learn new things every day and challenge myself. i like to learn new things every day and challenge myself</div>
                </div>
              </div>
              <div className="services-arrow">arrow</div>
            </div>
          </li>

          <li>
            <div className="services-space-between">
              <div className="flex-row">
                <p className="services-number">03</p>
                <div className="services-content">
                  <p className="services-title">User Interface Design</p>
                  <div className="services-description">Always in love with code and design, i like to learn new things every day and challenge myself. i like to learn new things every day and challenge myself</div>
                </div>
              </div>
              <div className="services-arrow">arrow</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}