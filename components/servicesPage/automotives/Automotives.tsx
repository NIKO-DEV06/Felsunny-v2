import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyElectric from './sections/WhyElectric';
import Showcase from './sections/Showcase';
import GetInTouch from '@/components/footer/GetInTouch';
import Testimonials from './sections/Testimonials';

const Automotives = () => {
  return (
    <section className="text-white">
      <Hero />
      <About />
      <WhyElectric />
      <Showcase />
      <Testimonials />
      <div className="text-black mt-32 mx2xl 2xl:mt-32">
        <GetInTouch />
      </div>
    </section>
  );
};

export default Automotives;
