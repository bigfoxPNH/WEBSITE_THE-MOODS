import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import type { Product } from './components/ProductCard';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-primary-dark font-sans selection:bg-accent/30 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar onNavClick={handleNavClick} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero & Space */}
        <Hero onMenuClick={() => handleNavClick('menu')} />

        {/* Menu Grid */}
        <Menu onProductClick={handleProductClick} />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Product Detail Modal */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-light text-cream p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-cream/10 cursor-pointer animate-fade-in hover:scale-105"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
