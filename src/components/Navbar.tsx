import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang Chủ', id: 'hero' },
    { name: 'Không Gian', id: 'space' },
    { name: 'Thực Đơn', id: 'menu' },
    { name: 'Liên Hệ', id: 'footer' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleLinkClick('hero')}
        >
          <div className="bg-primary text-cream p-1 rounded-full transition-transform duration-300 group-hover:rotate-12">
            <Logo className="w-8 h-8" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-wider text-primary block leading-none">THE MOODS</span>
            <span className="text-[10px] uppercase tracking-widest text-primary-light font-medium block mt-0.5">Coffee & Tea Garden</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-primary-dark/80 hover:text-accent font-medium transition-colors cursor-pointer text-sm tracking-wide uppercase"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleLinkClick('menu')}
            className="bg-primary hover:bg-primary-light text-cream font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            Khám phá Menu
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary p-1.5 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-primary/5 shadow-xl animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-primary-dark/90 hover:text-accent font-semibold py-2 border-b border-primary/5 text-base"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('menu')}
              className="bg-primary hover:bg-primary-light text-cream font-semibold py-3 rounded-full text-center shadow-md transition-all duration-300 text-sm flex justify-center items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Khám phá Menu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
