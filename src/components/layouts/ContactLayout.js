import "../../styles/Contact.scss"
import FooterLayout from "./FooterLayout"

export default function ContactLayout() {

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-title">
          <div>
            <a href="mailto:nmthanh99@gmail.com" className="title-third font-bright">nmthanh99<br></br>@gmail</a>
            <div className="script">Contact</div>
          </div>
          <div className="subtitle-medium text-right font-light">Send me a <span className="font-gold">message</span></div>
        </div>
      </div>

      <FooterLayout />
    </section>
  )
}