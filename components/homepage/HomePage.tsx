import Hero from './Hero';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GetInTouch from '../footer/GetInTouch';

const HomePage = () => {
  return (
    <main className="bg-black flex flex-col overflow-x-hidden">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GetInTouch />
    </main>
  );
};

export default HomePage;
