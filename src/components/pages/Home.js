import ContactLayout from '../layouts/ContactLayout';
import HeroMainLayout from '../layouts/HeroMainLayout';
import SummaryLayout from '../layouts/SummaryLayout';
import WorksMainLayout from '../layouts/WorksMainLayout';

export default function Home() {
  return (
    <main>
      <HeroMainLayout />
      <SummaryLayout />
      <WorksMainLayout />
      <ContactLayout />
    </main>
  )
}