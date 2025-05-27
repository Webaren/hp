import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
            >
              Webaren
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-primary transition-colors duration-200 font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-900 hover:text-primary transition-colors duration-200 font-medium">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-900 hover:text-primary transition-colors duration-200 font-medium">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-primary transition-colors duration-200 font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium">Contact</button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-900 hover:text-primary transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-900 hover:text-primary transition-colors duration-200 font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-900 hover:text-primary transition-colors duration-200 font-medium">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-900 hover:text-primary transition-colors duration-200 font-medium">Portfolio</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-900 hover:text-primary transition-colors duration-200 font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-gradient-primary text-white rounded-lg mx-3 text-center font-medium">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
