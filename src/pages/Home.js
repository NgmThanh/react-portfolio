import useLocoScroll from '../hooks/useLocoScroll';
import Hero from '../components/Hero/Hero';
import AboutWorks from '../components/About/About-works';
import SeparatorImage from '../components/SeparatorImage/SeparatorImage';
import AboutInstagram from '../components/About/About-instagram';
import WorksHome from '../components/Works/WorksHome';
import Contact from '../components/Contact/Contact';

export default function Home() {
  
  useLocoScroll();

  return (
    <section>
      <Hero />
      <AboutWorks />
      <SeparatorImage />
      <AboutInstagram />
      <WorksHome />
      <Contact />
    </section>
  )
}