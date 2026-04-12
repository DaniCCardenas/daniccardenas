import Hero from '../components/Hero';
import About from '../components/About';
import Certifications from '../components/Certifications';
import FocusAreas from '../components/FocusAreas';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Certifications />
      <FocusAreas />
      <Projects />
      <Contact />
    </>
  );
}
