import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0].size : 'M');
      setPrice(product.price);
    }
  }, [product]);

  useEffect(() => {
    if (product && product.sizes) {
      const sizeObj = product.sizes.find(s => s.size === selectedSize);
      if (sizeObj) {
        setPrice(sizeObj.price);
      }
    }
  }, [selectedSize, product]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const formatPrice = (value: number) => {
    return value.toLocaleString('vi-VN') + ' đ';
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-primary-dark/40 backdrop-blur-md cursor-pointer"
        ></motion.div>

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="bg-cream border border-primary/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-cream/90 hover:bg-cream text-primary-dark p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-primary/5 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Product Image (Visuals) */}
          <div className="md:w-1/2 relative bg-cream-dark/20 flex items-center justify-center h-72 md:h-auto min-h-[300px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Visual gradient overlay on bottom of image for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent md:hidden"></div>
          </div>

          {/* Right Column: Detailed Product Info */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              {/* Category and tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold text-primary-light uppercase tracking-widest">
                  {product.category}
                </span>
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/10 text-accent text-[9px] font-bold px-2 py-0.5 rounded-full border border-accent/20 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Names */}
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-primary-dark leading-tight">
                {product.name}
              </h2>
              <span className="text-sm text-primary-dark/50 block font-sans italic mt-1 mb-5">
                {product.englishName}
              </span>

              {/* Description */}
              <p className="text-sm text-primary-dark/80 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Sizing options */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs font-bold text-primary-dark/60 uppercase tracking-wider block mb-2">
                    Chọn kích cỡ
                  </span>
                  <div className="flex gap-3">
                    {product.sizes.map((s) => (
                      <button
                        key={s.size}
                        onClick={() => setSelectedSize(s.size)}
                        className={`px-4.5 py-2 rounded-xl text-sm font-bold border transition-all duration-300 cursor-pointer ${
                          selectedSize === s.size
                            ? 'bg-primary border-primary text-cream shadow-md'
                            : 'bg-transparent border-primary/20 hover:border-primary text-primary-dark'
                        }`}
                      >
                        Size {s.size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tasting notes */}
              {product.tastingNotes && product.tastingNotes.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs font-bold text-primary-dark/60 uppercase tracking-wider block mb-2">
                    Cảm quan hương vị (Tasting Notes)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="bg-cream-dark border border-primary/10 text-primary-dark text-xs font-medium px-3.5 py-1.5 rounded-xl"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients */}
              <div className="mb-6">
                <span className="text-xs font-bold text-primary-dark/60 uppercase tracking-wider block mb-1">
                  Thành phần chính
                </span>
                <p className="text-xs sm:text-sm text-primary-dark/70 italic leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
            </div>

            {/* Bottom Section: Price & Actions */}
            <div className="pt-5 border-t border-primary/10 flex items-center justify-between mt-4">
              <div>
                <span className="text-xs text-primary-dark/40 block leading-none">Thanh toán dự kiến</span>
                <span className="font-bold text-2xl text-primary block mt-1.5 transition-all duration-300">
                  {formatPrice(price)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="bg-primary hover:bg-primary-light text-cream font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center gap-2 cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
