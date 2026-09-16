import Backdrop from './components/Backdrop.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Backdrop />
      <Nav />
      <div className="wrap">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
