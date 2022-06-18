import HeroMainLayout from '../layouts/HeroMainLayout';
import AboutLayout from '../layouts/AboutLayout';
import WorksLayout from '../layouts/WorksLayout';
import ContactLayout from '../layouts/ContactLayout';
import TextSeparator from '../layouts/TextSeparator';
import SummaryLayout from '../layouts/SummaryLayout';

export default function Home() {
  return (
    <main>
      <HeroMainLayout />
      <SummaryLayout />
      {/* <TextSeparator />
      <AboutLayout />
      <WorksLayout />
      <ContactLayout /> */}
    </main>
  )
}