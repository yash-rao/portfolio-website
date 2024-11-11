import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Loader from '../components/Loader';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Work />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}
