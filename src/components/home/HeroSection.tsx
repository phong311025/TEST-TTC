import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] md:h-[700px] bg-bg-light-green overflow-hidden flex flex-col md:flex-row pt-[72px] md:pt-[132px]">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-8 h-px bg-gold"></div>
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">Kiến tạo tương lai</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[40px] md:text-[52px] font-bold text-primary leading-[1.1] mb-6"
        >
          Nuôi dưỡng Tâm<br/>
          <span className="text-gold">Phát triển Tài</span><br/>
          Kiến tạo Giá trị
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px] md:text-[17px] text-text-secondary max-w-[440px] leading-relaxed mb-10"
        >
          Đồng hành cùng sinh viên, giảng viên và các hoạt động giáo dục, nghiên cứu, đổi mới sáng tạo vì một thế hệ tài chính tương lai.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/gioi-thieu" className="bg-primary text-white text-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-primary-hover transition-colors">
            Khám phá về Quỹ
          </Link>
          <Link to="/ho-tro-tai-tro" className="border-2 border-primary/20 text-primary text-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors">
            Hoạt động hỗ trợ
          </Link>
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
        <div className="w-full h-full bg-[#DFE8E4] flex items-center justify-center p-8 md:p-0">
          <div className="w-full md:w-4/5 h-[300px] md:h-4/5 bg-white shadow-2xl rounded-2xl p-2 relative z-10">
            <div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center text-primary/30">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Sinh viên đại học năng động" 
                className="w-full h-full object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 text-white text-left z-20">
                <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Founded in 2023</div>
                <div className="text-xl md:text-2xl font-serif italic">Investing in Human Potential</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold rounded-full opacity-30 z-0 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-primary rounded-full opacity-5 z-0 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
