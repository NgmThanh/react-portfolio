import "../../styles/Contact.scss"
import FooterLayout from "./FooterLayout"

export default function ContactLayout() {

  return (
    <section id="contact" className="contact-section">
      {/* <div className="contact-container">
        <div className="contact-title">
          <div>
            <a href="mailto:nmthanh99@gmail.com" className="title-third font-bright">nmthanh99<br></br>@gmail</a>
            <div className="script">Contact</div>
          </div>
          <div className="subtitle-medium text-right font-light">Send me a <span className="font-gold">message</span></div>
        </div>
      </div> */}
      <div className="contact-container">
        <div className="mt-120 spaced-subtitle font-gold">Get in touch</div>
        <div className="contact-image">
          {/* <img src="./summary-1.jpg" alt="contact-illustration"></img> */}
        </div>
        <div className="contact-title">
          <div>
            <a href="mailto:nmthanh99@gmail.com" className="title-second font-bright">nmthanh99<br></br>@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="outer-footer">
        <FooterLayout />
      </div>
    </section>
  )
}