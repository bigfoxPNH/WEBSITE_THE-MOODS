import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Sparkles, Compass, Leaf, Music } from 'lucide-react';

interface HeroProps {
  onMenuClick: () => void;
}

export default function Hero({ onMenuClick }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div id="hero" className="relative min-height-screen pt-24 pb-16 flex flex-col justify-center">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Main landing container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text Content */}
        <motion.div 
          className="lg:col-span-7 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Leaf className="w-3.5 h-3.5 text-primary-light" />
            Không gian xanh giữa lòng thành phố
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark leading-[1.1] mb-6"
          >
            Khơi nguồn cảm xúc bên <br/>
            <span className="text-primary italic font-normal relative">
              khu vườn nhỏ
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-accent/30 -z-10 rounded-full"></span>
            </span>{' '}
            của The Moods
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-primary-dark/70 leading-relaxed mb-8 max-w-xl"
          >
            Tại **The Moods**, chúng tôi tin rằng mỗi ly nước không chỉ là hương vị, mà còn là tâm trạng của bạn. Trốn khỏi sự ồn ào đô thị để hòa mình vào thanh âm của thiên nhiên và những nốt nhạc acoustic êm dịu.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onMenuClick}
              className="bg-primary hover:bg-primary-light text-cream font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Xem thực đơn
              <Sparkles className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />
            </button>
            <a
              href="#space"
              className="border border-primary/20 hover:border-primary text-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-center cursor-pointer"
            >
              Khám phá không gian
            </a>
          </motion.div>

          {/* Quick highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary/10"
          >
            <div>
              <span className="block text-2xl font-serif font-bold text-primary">7:00 - 22:30</span>
              <span className="text-xs text-primary-dark/60 font-medium uppercase tracking-wider">Mở cửa hàng ngày</span>
            </div>
            <div>
              <span className="block text-2xl font-serif font-bold text-primary">100%</span>
              <span className="text-xs text-primary-dark/60 font-medium uppercase tracking-wider">Hạt cà phê nguyên chất</span>
            </div>
            <div>
              <span className="block text-2xl font-serif font-bold text-primary">Garden</span>
              <span className="text-xs text-primary-dark/60 font-medium uppercase tracking-wider">Acoustic & Events</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Hero Image Visuals */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Decorative background shape */}
          <div className="absolute inset-0 bg-primary rounded-[2rem] rotate-3 -z-10 opacity-10"></div>
          
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 shadow-2xl relative group">
            <img 
              src="images/space/garden-hero.png" 
              alt="The Moods Coffee & Tea Garden Space" 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-cream text-sm font-medium italic">Không gian ngoài trời ngập tràn sắc xanh tại The Moods</p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <div className="bg-accent/10 p-2.5 rounded-xl text-accent">
              <Compass className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-primary-dark">Địa chỉ sân vườn</span>
              <span className="text-[11px] text-primary-dark/70 font-medium">Bình Thạnh, TP. Hồ Chí Minh</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SPACE DETAIL SECTION */}
      <section id="space" className="pt-24 mt-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-dark mb-4">Góc Sân Vườn Thơ Mộng</h2>
            <p className="text-sm sm:text-base text-primary-dark/70">
              Được thiết kế theo phong cách khu vườn nhiệt đới xanh mát, mang lại cảm giác dễ chịu, thư thái tối đa cho mỗi cuộc hẹn hay những buổi làm việc yên tĩnh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-cream-dark/30 p-8 rounded-2xl border border-primary/5 text-center flex flex-col items-center"
            >
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-3">Mảng Xanh Nhiệt Đới</h3>
              <p className="text-xs sm:text-sm text-primary-dark/75 leading-relaxed">
                Hàng chục loài cây cảnh lá lớn và hoa cỏ được chăm sóc tỉ mỉ mỗi ngày, tạo nên bầu không khí trong lành, mát mẻ tự nhiên.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-cream-dark/30 p-8 rounded-2xl border border-primary/5 text-center flex flex-col items-center"
            >
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-6">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-3">Acoustic Cuối Tuần</h3>
              <p className="text-xs sm:text-sm text-primary-dark/75 leading-relaxed">
                Những buổi tối âm nhạc nhẹ nhàng bên ánh đèn vàng lấp lánh giúp bạn rũ bỏ mọi muộn phiền sau một tuần làm việc mệt mỏi.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-cream-dark/30 p-8 rounded-2xl border border-primary/5 text-center flex flex-col items-center"
            >
              <div className="bg-primary/5 text-primary p-4 rounded-full mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-dark mb-3">Yên Tĩnh Làm Việc</h3>
              <p className="text-xs sm:text-sm text-primary-dark/75 leading-relaxed">
                Hệ thống ổ cắm điện bố trí sẵn khắp khu vườn cùng Wifi tốc độ cao phù hợp cho các bạn Freelancer sáng tạo và làm việc nhóm.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
