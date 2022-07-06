import ContactLayout from "../layouts/ContactLayout";
import HeroAboutLayout from "../layouts/HeroAboutLayout";
import IntroductionLayout from "../layouts/IntroductionLayout";
import SummaryLayout from "../layouts/SummaryLayout";

export default function About() {
  return (
    <section>
      <HeroAboutLayout />
      <IntroductionLayout />
      <SummaryLayout />
      <ContactLayout />
    </section>
  )
}