import { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { ThemeProvider } from './ThemeProvider';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  // Handle scroll and active section detection with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let userScrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      // Marcar que el usuario está haciendo scroll
      setIsUserScrolling(true);
      
      if (userScrollTimeout) clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 150);
      
      timeoutId = setTimeout(() => {
        // Solo detectar secciones si no hay scroll activo del usuario
        if (!isUserScrolling) {
          const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
          const scrollPosition = window.scrollY + 100;
          let newActiveSection = activeSection;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetBottom = offsetTop + element.offsetHeight;
              
              if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                newActiveSection = section;
                break;
              }
            }
          }
          
          // Solo actualizar si realmente cambió
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
      if (userScrollTimeout) clearTimeout(userScrollTimeout);
    };
  }, []);

  const scrollToAbout = useCallback(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('about');
    }
  }, []);

  // Loading component
  const LoadingFallback = () => (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '200px' 
      }}
    >
      <CircularProgress />
    </Box>
  );

  return (
    <ThemeProvider>
      <div className="App">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero onScrollToAbout={scrollToAbout} />
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
