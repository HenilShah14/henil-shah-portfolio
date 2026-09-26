import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LearningJourney from './components/LearningJourney';
import CurrentlyExploring from './components/CurrentlyExploring';
import FutureGoals from './components/FutureGoals';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F8FAFC] selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <LearningJourney />
        <CurrentlyExploring />
        <FutureGoals />
        <Contact />
        <FinalCTA />
      </main>

      {/* Cinematic Footer */}
      <Footer />
    </div>
  );
}

