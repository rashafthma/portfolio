import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App Component
 * -------------
 * The root component of Rasha Fathima's portfolio website.
 * It brings together all individual section components into a cohesive,
 * smooth-scrolling single page application.
 */
function App() {
  return (
    <div className="portfolio-app min-vh-100 d-flex flex-column">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Skills & Technologies Section */}
        <Skills />

        {/* 5. Genuine Projects Section */}
        <Projects />

        {/* 6. Learning Journey Section */}
        <LearningJourney />

        {/* 7. Education & Training Section */}
        <Education />

        {/* 8. Contact & Social Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
