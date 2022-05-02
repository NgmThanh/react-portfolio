import "../styles/Contact.scss"
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section mt-200">
      <div className="contact-background">
        <div className="contact-title">
          <span className="contact-title__subtitle side-subtitle">Contact</span>

          <h1 className="title-primary ml-1">
            <span><div className="line-left"></div>Let&#039;s work</span><br></br>
            <span className="ml-2 colored">Together</span>
          </h1>

          <a href="mailto:nmthanh99@gmail.com">
            <div className="arrow-button">
              <Icon icon="carbon:arrow-right" />
            </div>
          </a>
        </div>
      </div>

      <ul className="contact-social">
        <li className="underline"><a href="#">Dribbble</a></li>
        <li className="underline"><a href="#">Instagram</a></li>
        <li className="underline"><a href="#">LinkedIn</a></li>
      </ul>
    </section>
  )
}