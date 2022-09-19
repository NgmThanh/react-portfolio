import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import ContactLayout from '../layouts/ContactLayout';
import HeroLayout from '../layouts/HeroLayout';

export default function Home() {

  useEffect(() => {
    
  }, []);

  return (
    <main>
      <HeroLayout />
      {/* <SummaryLayout />
      <WorksMainLayout /> */}
      <ContactLayout />
    </main>
  )
}