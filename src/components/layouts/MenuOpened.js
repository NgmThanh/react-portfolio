import '../../styles/Menu.scss'
import FooterLayout from './FooterLayout'

export default function MenuOpened() {

  return (
    <section id="menu-opened" className="menu-opened">
      <div className="menu-content">
        <div className="menu-left">
          <div className="menu-left__inner">
            <div className="subtitle-small font-light">Menu</div>
            <div>
              <ul className="menu-pages">
                <li className="title-fourth font-light"><a href="" target="_blank" rel="noreferrer"><span className="nb-hover-menu font-gold">01</span>Home</a></li>
                <li className="title-fourth font-light"><a href="" target="_blank" rel="noreferrer"><span className="nb-hover-menu font-gold active-inline">02</span>About me</a></li>
                <li className="title-fourth font-light"><a href="" target="_blank" rel="noreferrer"><span className="nb-hover-menu font-gold">03</span>Projects</a></li>
                <li className="title-fourth font-light"><a href="" target="_blank" rel="noreferrer"><span className="nb-hover-menu font-gold">04</span>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="menu-right">
          <div className="menu-right__inner">
            <img src="./summary-1.jpg" alt="menu image"></img>
          </div>
        </div>

        <FooterLayout />
      </div>
    </section >
  )
}