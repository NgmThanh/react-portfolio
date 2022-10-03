import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import SeparatorImage from '../components/SeparatorImage/SeparatorImage';
import Services from '../components/Services/Services';
import WorksHome from '../components/Works/WorksHome';
import Contact from '../components/Contact/Contact';
import useLocoScroll from '../hooks/useLocoScroll';
import NextWork from '../components/Works/NextWork';

export default function Home() {

  useLocoScroll();

  return (
    <main id="main-container">
      <Hero />
      <About />
      <SeparatorImage />
      <Services />
      <WorksHome />
      <Contact />
      {/* <NextWork /> */}
    </main>
  )
}