import Hero from './Hero';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import TextSeparator from './TextSeparator';

export default function Home() {
  return (
    <main>
      <Hero />
      <TextSeparator />
      <About />
      <Works />
      <Contact />
    </main>
  )
}