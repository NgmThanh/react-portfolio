import HeroLayout from '../layouts/HeroLayout';
import WorksHomeLayout from '../layouts/WorksHomeLayout';
import ContactLayout from '../layouts/ContactLayout';
import useLocoScroll from '../hooks/useLocoScroll';

export default function Home() {

  useLocoScroll();

  return (
    <main id="main-container">
      <HeroLayout />
      <WorksHomeLayout />
      <ContactLayout />
    </main>
  )
}