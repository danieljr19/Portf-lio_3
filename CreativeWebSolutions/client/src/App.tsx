import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    inicio: null,
    servicos: null,
    portfolio: null,
    sobre: null,
    contato: null,
  });

  useEffect(() => {
    // Handle smooth scroll when clicking anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const sectionId = href.slice(1);
      const section = sectionsRef.current[sectionId];
      
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero ref={(el) => (sectionsRef.current.inicio = el)} />
        <Services ref={(el) => (sectionsRef.current.servicos = el)} />
        <Portfolio ref={(el) => (sectionsRef.current.portfolio = el)} />
        <About ref={(el) => (sectionsRef.current.sobre = el)} />
        <Testimonials />
        <Partners />
        <CallToAction />
        <Contact ref={(el) => (sectionsRef.current.contato = el)} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
