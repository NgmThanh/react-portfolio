import HeroMainLayout from '../layouts/HeroMainLayout';
import AboutLayout from '../layouts/AboutLayout';
import WorksLayout from '../layouts/WorksLayout';
import ContactLayout from '../layouts/ContactLayout';
import TextSeparator from '../layouts/TextSeparator';

export default function Home() {
  return (
    <main>
      <HeroMainLayout />
      {/* <TextSeparator />
      <AboutLayout />
      <WorksLayout />
      <ContactLayout /> */}
    </main>
  )
}