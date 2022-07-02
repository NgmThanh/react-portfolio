import "../../styles/Footer.scss"

export default function FooterLayout() {

  return (
    <div className="footer subtitle-small font-light">
      <div><span className="font-gold">MTH Design</span> © 2022</div>
      <div>
        <ul className="footer-social">
          <li className="subtitle-small underline font-light"><a href="https://dribbble.com/NgmThanh" target="_blank" rel="noreferrer">Dribbble</a></li>
          <li className="subtitle-small underline font-light"><a href="https://www.instagram.com/minhthanh7219/" target="_blank" rel="noreferrer">Instagram</a></li>
          <li className="subtitle-small underline font-light"><a href="https://www.linkedin.com/in/minh-thanh-nguyen/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}