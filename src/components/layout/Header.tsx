import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'TRANG CHỦ', href: '/' },
  { 
    name: 'GIỚI THIỆU', 
    href: '/gioi-thieu',
    dropdown: [
      { name: 'Về Quỹ', href: '/ve-quy' },
      { name: 'Tôn chỉ & mục đích', href: '/ve-quy' },
      { name: 'Cơ cấu tổ chức', href: '/co-cau-to-chuc' },
      { name: 'Điều lệ Quỹ', href: '/van-ban' }
    ]
  },
  { 
    name: 'HOẠT ĐỘNG', 
    href: '/hoat-dong',
    dropdown: [
      { name: 'Chương trình hỗ trợ', href: '/ho-tro-tai-tro' },
      { name: 'Học bổng', href: '/ho-tro-tai-tro' },
      { name: 'Nghiên cứu khoa học', href: '/ho-tro-tai-tro' },
      { name: 'Khởi nghiệp & đổi mới sáng tạo', href: '/ho-tro-tai-tro' },
      { name: 'Hỗ trợ giảng viên', href: '/ho-tro-tai-tro' }
    ]
  },
  { name: 'TIN TỨC', href: '/tin-tuc' },
  { 
    name: 'MINH BẠCH', 
    href: '/minh-bach-tai-chinh',
    dropdown: [
      { name: 'Công khai tài chính', href: '/minh-bach-tai-chinh' },
      { name: 'Báo cáo hoạt động', href: '/minh-bach-tai-chinh' },
      { name: 'Danh sách tài trợ', href: '/minh-bach-tai-chinh' },
      { name: 'Văn bản pháp lý', href: '/van-ban' }
    ]
  },
  { name: 'ĐỐI TÁC', href: '/doi-tac' },
  { name: 'LIÊN HỆ', href: '/lien-he' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed w-full top-0 z-50 flex flex-col transition-all duration-300">
      {/* Tier 1: Utility Bar (Desktop only, hides on scroll) */}
      <div 
        className={cn(
          "bg-primary text-white h-9 flex items-center transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "opacity-100"
        )}
      >
        <div className="container-custom flex justify-between items-center text-[11px] font-medium tracking-wide w-full">
          <div className="hidden md:flex gap-6 uppercase">
            <Link to="/van-ban" className="hover:text-gold transition-colors">Văn bản pháp quy</Link>
            <Link to="/minh-bach-tai-chinh" className="hover:text-gold transition-colors">Công khai minh bạch</Link>
            <Link to="/lien-he" className="hover:text-gold transition-colors">Liên hệ</Link>
          </div>
          <div className="flex gap-4 items-center ml-auto">
            <div className="flex gap-2 border-r border-white/20 pr-4">
              <button className="hover:text-gold transition-colors font-bold">VI</button>
              <button className="hover:text-gold transition-colors opacity-50">EN</button>
            </div>
            <span className="hidden sm:block">Học viện Tài chính, 58 Lê Văn Hiến, Hà Nội</span>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Header */}
      <div 
        className={cn(
          "bg-white border-b border-[#DFE8E4] transition-all duration-300 flex items-center",
          isScrolled ? "h-[72px] shadow-sm" : "h-24"
        )}
      >
        <div className="container-custom flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
              <img 
                src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/494910332_1213195866868208_7183617661021514894_n.jpg?stp=dst-jpg_tt6&cstp=mx2000x2000&ctp=s2000x2000&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEfK7yCnDomJvNLM4MePHvkdaF8-md_JfF1oXz6Z38l8eSST3nciaocFNYHcIbiDKUYqlIpNE_dWD_wcsLMwLZN&_nc_ohc=geSLQ_QhkLkQ7kNvwH7vANF&_nc_oc=Adrr7zBKSCnWEWyRDnmf-aoz0GrdP34r_b6MrrxR8s-oWtmGMBkIQYzO8Hg5dkBZgD_x7NEoBTZ26nE_y0HnJcRO&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=VoItWxyV-fJd2T-yHXufdQ&_nc_ss=7b2a8&oh=00_AQKOkRVYcIiF1UgSpvxve0kj0iTEkI6I21lgD9rrtziQZw&oe=6AA2904E" 
                alt="DTDF Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <h1 className="font-bold text-primary text-[15px] md:text-[18px] leading-tight uppercase tracking-tight group-hover:text-primary-hover transition-colors">
                Quỹ Phát triển giáo dục Tâm - Tài - Chính
              </h1>
              <p className="text-[9px] md:text-[10px] text-text-secondary font-medium uppercase tracking-[0.05em] mt-1 hidden lg:block">
                Dedication - Talent - Integrity Education Development Foundation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              
              return (
                <div 
                  key={item.name}
                  className="relative group px-3 py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={item.href}
                    className={cn(
                      "text-[13px] font-semibold tracking-wide transition-colors flex items-center gap-1 py-1",
                      isActive ? "text-primary border-b-2 border-gold" : "text-primary hover:text-gold border-b-2 border-transparent"
                    )}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                  </Link>

                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-border-color shadow-lg rounded-xl overflow-hidden py-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-primary hover:bg-bg-light-green transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/lien-he"
              className="hidden md:flex items-center justify-center bg-gold text-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all uppercase text-[12px] tracking-wider font-bold shadow-sm"
            >
              Đồng hành cùng Quỹ
            </Link>
            
            <button 
              className="xl:hidden p-2 text-text-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-border-color overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-border-color/50 last:border-0 py-2">
                  {item.dropdown ? (
                    <div>
                      <button 
                        className="w-full flex items-center justify-between text-left font-semibold text-text-dark py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={cn(
                          "w-5 h-5 transition-transform",
                          activeDropdown === item.name ? "rotate-180" : ""
                        )} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col space-y-3 pl-4 py-3 overflow-hidden"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="text-text-secondary text-sm font-medium"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block font-semibold text-text-dark py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <Link 
                  to="/lien-he"
                  className="w-full text-center bg-gold text-primary-dark font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  Đồng hành cùng Quỹ
                </Link>
                <div className="flex justify-center space-x-4 text-sm font-medium text-text-secondary pt-4 border-t border-border-color">
                  <button>VI</button>
                  <span>|</span>
                  <button>EN</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
