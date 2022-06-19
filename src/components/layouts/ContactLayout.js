import "../../styles/Contact.scss"

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

      <div className="contact-footer subtitle-small font-light">
        <div><span className="font-gold">MTH Design</span> © 2022</div>
        <div>
          <ul className="contact-social">
            <li className="subtitle-small underline font-light"><a href="https://dribbble.com/NgmThanh" target="_blank" rel="noreferrer">Dribbble</a></li>
            <li className="subtitle-small underline font-light"><a href="https://www.instagram.com/minhthanh7219/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li className="subtitle-small underline font-light"><a href="https://www.linkedin.com/in/minh-thanh-nguyen/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div>Website by <span className="font-gold">Minh Thanh</span></div>
      </div>
    </section>
  )
}