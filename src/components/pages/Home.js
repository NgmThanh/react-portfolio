import ContactLayout from '../layouts/ContactLayout';
import HeroMainLayout from '../layouts/HeroMainLayout';
import MenuOpened from '../layouts/MenuOpened';
import SummaryLayout from '../layouts/SummaryLayout';
import WorksMainLayout from '../layouts/WorksMainLayout';

export default function Home() {
  return (
    <main>
      <MenuOpened />
      <HeroMainLayout />
      <SummaryLayout />
      <WorksMainLayout />
      <ContactLayout />
    </main>
  )
}