import { MapPin, Clock, Phone } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const quickLinks = [
    { name: 'Trang Chủ', id: 'hero' },
    { name: 'Không Gian Sân Vườn', id: 'space' },
    { name: 'Thực Đơn', id: 'menu' },
  ];

  return (
    <footer id="footer" className="bg-primary-dark text-cream pt-16 pb-8 border-t border-cream/5 relative overflow-hidden">
      {/* Decorative leaf/light reflections */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-cream/10">
        {/* Brand Column */}
        <div className="md:col-span-5 text-left">
          <div className="flex items-center gap-3 mb-5 cursor-pointer" onClick={() => onNavClick('hero')}>
            <div className="bg-cream text-primary-dark p-1 rounded-full">
              <Logo className="w-8 h-8" />
            </div>
            <div>
              <span className="font-serif font-bold text-xl tracking-wider text-cream block leading-none">THE MOODS</span>
              <span className="text-[10px] uppercase tracking-widest text-accent font-medium block mt-0.5">Coffee & Tea Garden</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-cream/70 leading-relaxed mb-6 max-w-sm">
            Trốn khỏi ồn ào đô thị, tìm về góc vườn xanh mát tại **The Moods**. Nơi hòa quyện giữa cà phê truyền thống đậm vị, trà trái cây thanh nhiệt và những bản tình ca mộc mạc.
          </p>
          <div className="flex gap-4">
            {/* Facebook Inline SVG */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-cream/10 hover:bg-accent text-cream hover:text-primary-dark p-2.5 rounded-xl transition-all duration-300 shadow-sm"
              aria-label="Facebook"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* Instagram Inline SVG */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-cream/10 hover:bg-accent text-cream hover:text-primary-dark p-2.5 rounded-xl transition-all duration-300 shadow-sm"
              aria-label="Instagram"
            >
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Zalo / Chat Bubble Inline SVG */}
            <a 
              href="https://zalo.me" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-cream/10 hover:bg-accent text-cream hover:text-primary-dark p-2.5 rounded-xl transition-all duration-300 shadow-sm"
              aria-label="Zalo"
            >
              <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 text-left">
          <h3 className="font-serif font-semibold text-lg text-accent mb-5">Liên Kết Nhanh</h3>
          <ul className="flex flex-col gap-3.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavClick(link.id)}
                  className="text-xs sm:text-sm text-cream/70 hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="md:col-span-4 text-left flex flex-col gap-5">
          <h3 className="font-serif font-semibold text-lg text-accent">Thông Tin Liên Hệ</h3>
          
          <div className="flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <span className="block text-xs text-cream/50 font-semibold uppercase tracking-wider mb-0.5">Địa chỉ quán</span>
              <span className="text-xs sm:text-sm text-cream/80 font-medium">
                120 Đường D5, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <span className="block text-xs text-cream/50 font-semibold uppercase tracking-wider mb-0.5">Giờ hoạt động</span>
              <span className="text-xs sm:text-sm text-cream/80 font-medium">
                07:00 AM - 10:30 PM (Thứ 2 - Chủ Nhật)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <span className="block text-xs text-cream/50 font-semibold uppercase tracking-wider mb-0.5">Hotline đặt bàn</span>
              <span className="text-xs sm:text-sm text-cream/80 font-semibold text-accent">
                090 123 4567
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-cream/50 text-[11px] sm:text-xs">
        <p>© 2026 The Moods Coffee & Tea Garden. Tất cả quyền được bảo lưu.</p>
        <p>Thiết kế & phát triển bởi Antigravity AI</p>
      </div>
    </footer>
  );
}
