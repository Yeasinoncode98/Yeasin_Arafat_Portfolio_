import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-display">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutMe />
        <hr className="max-w-7xl mx-auto border-gray-700/50 w-full" />
        <Skills />
        <hr className="max-w-7xl mx-auto border-gray-700/50 w-full" />
        <Education />
        <hr className="max-w-7xl mx-auto border-gray-700/50 w-full" />
        <Certifications />
        <hr className="max-w-7xl mx-auto border-gray-700/50 w-full" />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
