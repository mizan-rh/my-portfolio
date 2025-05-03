
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TabsSection from "@/components/TabsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleScrollToAnchor = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          if (id) {
            window.history.pushState(null, '', `#${id}`);
          }
        }
      }
    };
    
    document.addEventListener('click', handleScrollToAnchor);
    
    return () => {
      document.removeEventListener('click', handleScrollToAnchor);
    };
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen">
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <TabsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
