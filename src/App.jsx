import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIProjects from './components/AIProjects';
import Experience from './components/Experience';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIProjects />
        <Experience />
        <LearningJourney />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
