import HeroLayout from '../layouts/HeroLayout';
import AboutLayout from '../layouts/AboutLayout';
import WorksLayout from '../layouts/WorksLayout';
import ContactLayout from '../layouts/ContactLayout';
import TextSeparator from '../layouts/TextSeparator';

export default function Home() {
  return (
    <main>
      <HeroLayout />
      <TextSeparator />
      <AboutLayout />
      <WorksLayout />
      <ContactLayout />
    </main>
  )
}