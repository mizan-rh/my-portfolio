
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    } else if (path.startsWith('#')) {
      return location.hash === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL without page reload
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "bg-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-gradient">Portfolio</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "transition-colors duration-300",
                  isActive(link.href) 
                    ? "text-highlight" 
                    : "text-gray-300 hover:text-highlight"
                )}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "transition-colors duration-300",
                  isActive(link.href) 
                    ? "text-highlight" 
                    : "text-gray-300 hover:text-highlight"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link to="/resume">
            <Button className="bg-gradient hover:opacity-90 transition-opacity">
              Resume
            </Button>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-gray-300"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-surface border-y border-gray-800 animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "py-2",
                    isActive(link.href) 
                      ? "text-highlight" 
                      : "text-gray-300 hover:text-highlight"
                  )}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={cn(
                    "py-2",
                    isActive(link.href) 
                      ? "text-highlight" 
                      : "text-gray-300 hover:text-highlight"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/resume" className="mt-2">
              <Button className="bg-gradient hover:opacity-90 transition-opacity w-full">
                Resume
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
