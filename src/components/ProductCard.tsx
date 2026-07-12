import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  englishName: string;
  category: string;
  price: number;
  image: string;
  description: string;
  tastingNotes: string[];
  ingredients: string;
  tags: string[];
  sizes?: { size: string; price: number }[];
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + ' đ';
  };

  return (
    <motion.div
      onClick={() => onClick(product)}
      className="bg-cream border border-primary/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-pointer group relative"
      whileHover={{ y: -6 }}
      layoutId={`product-container-${product.id}`}
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream-dark/20">
        {/* Floating tags */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 ${
                tag === 'Signature' || tag === 'Best Seller'
                  ? 'bg-accent text-primary-dark font-extrabold'
                  : 'bg-primary text-cream'
              }`}
            >
              {(tag === 'Signature' || tag === 'Best Seller') && <Sparkles className="w-3 h-3 text-primary-dark" />}
              {tag}
            </span>
          ))}
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-cream/90 text-primary-dark p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between flex-grow text-left">
        <div>
          <span className="text-[10px] font-bold text-primary-light uppercase tracking-widest block mb-1">
            {product.category}
          </span>
          <h3 className="font-serif font-bold text-lg text-primary-dark leading-tight group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
          <span className="text-xs text-primary-dark/50 block font-sans italic mt-0.5 mb-2 leading-none">
            {product.englishName}
          </span>
          <p className="text-xs text-primary-dark/70 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex justify-between items-center pt-3 border-t border-primary/5">
          <div>
            <span className="text-xs text-primary-dark/40 block leading-none">Giá từ</span>
            <span className="font-bold text-base text-primary block mt-0.5">
              {formatPrice(product.price)}
            </span>
          </div>
          <span className="text-xs font-semibold text-primary hover:text-accent flex items-center gap-1 group-hover:underline">
            Chi tiết
          </span>
        </div>
      </div>
    </motion.div>
  );
}
