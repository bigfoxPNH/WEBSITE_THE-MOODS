import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, RotateCcw, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../components/ProductCard';

interface MenuProps {
  onProductClick: (product: Product) => void;
}

export default function Menu({ onProductClick }: MenuProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('coffee');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { key: 'coffee', label: 'Cà Phê', desc: 'Robusta & Arabica Đậm Vị' },
    { key: 'tea', label: 'Trà Sân Vườn', desc: 'Thơm Mát, Giải Nhiệt' },
    { key: 'ice-blended', label: 'Đá Xay', desc: 'Mát Lạnh, Ngọt Ngào' },
    { key: 'milk-tea', label: 'Trà Sữa', desc: 'Béo Ngậy, Thơm Lừng' },
    { key: 'juice-smoothie-yaourt', label: 'Sinh Tố & Sữa Chua', desc: 'Tươi Mát, Lành Mạnh' },
  ];

  const filterTags = ['Tất cả', 'Signature', 'Best Seller', 'Healthy', 'New'];

  // Fetch product data on mount
  useEffect(() => {
    fetch('/data/menu.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Không thể tải dữ liệu thực đơn.');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter products based on state changes
  useEffect(() => {
    let result = products;

    // If there is a search query, search globally across all categories
    if (searchQuery.trim() !== '') {
      // Helper function to remove Vietnamese diacritics
      const removeDiacritics = (str: string) => {
        return str
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd')
          .replace(/Đ/g, 'D');
      };

      const query = removeDiacritics(searchQuery.toLowerCase().trim());
      result = result.filter(
        (p) =>
          removeDiacritics(p.name.toLowerCase()).includes(query) ||
          removeDiacritics(p.englishName.toLowerCase()).includes(query) ||
          removeDiacritics(p.description.toLowerCase()).includes(query) ||
          removeDiacritics(p.ingredients.toLowerCase()).includes(query)
      );
    } else {
      // If search is empty, filter by category
      if (activeCategory) {
        result = result.filter((p) => p.category === activeCategory);
      }

      // Filter by tag
      if (selectedTag && selectedTag !== 'Tất cả') {
        result = result.filter((p) => p.tags.includes(selectedTag));
      }
    }

    setFilteredProducts(result);
  }, [products, activeCategory, selectedTag, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTag('Tất cả');
  };

  return (
    <section id="menu" className="py-24 bg-cream-dark/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Thực Đơn Đặc Sắc</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Khám phá hương vị sân vườn
          </h2>
          <p className="text-sm sm:text-base text-primary-dark/70">
            Mỗi công thức tại **The Moods** đều được chắt lọc tinh tế từ nguyên liệu tự nhiên hảo hạng, đảm bảo an toàn cho sức khỏe và kích thích vị giác của bạn.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-10 pb-6 border-b border-primary/5">
          {/* Search Box */}
          <div className="relative w-full lg:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-primary-dark/40">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Tìm kiếm nước uống, nguyên liệu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-cream border border-primary/10 text-primary-dark placeholder-primary-dark/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-sm transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Tag Selector (All, Best Seller, etc.) */}
          <div className="flex flex-wrap gap-2 justify-center w-full lg:w-auto">
            <div className="flex items-center gap-1.5 mr-2 text-primary-dark/60 text-xs font-bold uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5" />
              Lọc theo:
            </div>
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-accent border-accent text-primary-dark shadow-sm'
                    : 'bg-cream border-primary/5 hover:border-primary/20 text-primary-dark/70'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                resetFilters();
              }}
              className={`p-5 rounded-2xl border text-center transition-all duration-300 cursor-pointer relative group flex flex-col items-center justify-center ${
                activeCategory === cat.key
                  ? 'bg-primary border-primary text-cream shadow-lg scale-[1.02]'
                  : 'bg-cream border-primary/5 hover:border-primary/15 text-primary-dark'
              }`}
            >
              <span className="font-serif font-bold text-lg md:text-xl block">{cat.label}</span>
              <span className={`text-[10px] mt-1 block tracking-wider uppercase ${
                activeCategory === cat.key ? 'text-accent-light font-bold' : 'text-primary-light font-medium'
              }`}>
                {cat.desc}
              </span>
              {activeCategory === cat.key && (
                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rotate-45 hidden md:block"></div>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic products list rendering */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-primary-dark/60 text-sm font-medium">Đang chuẩn bị thực đơn...</p>
          </div>
        ) : error ? (
          <div className="py-16 text-center max-w-md mx-auto">
            <p className="text-red-600 font-bold mb-4">Đã xảy ra lỗi khi kết nối dữ liệu.</p>
            <p className="text-xs text-primary-dark/60">{error}</p>
          </div>
        ) : (
          <div>
            {/* Products Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} onClick={onProductClick} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center max-w-sm mx-auto"
              >
                <div className="bg-primary/5 text-primary p-4.5 rounded-full inline-block mb-4">
                  <RotateCcw className="w-8 h-8 animate-spin-reverse" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary-dark mb-2">Không tìm thấy món uống</h3>
                <p className="text-xs sm:text-sm text-primary-dark/60 leading-relaxed mb-6">
                  Chúng tôi không tìm thấy kết quả phù hợp với bộ lọc hiện tại. Thử đổi từ khóa hoặc đặt lại bộ lọc.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-primary hover:bg-primary-light text-cream font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-xs cursor-pointer"
                >
                  Đặt lại bộ lọc
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
