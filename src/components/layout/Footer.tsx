import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex flex-col gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center shrink-0 bg-white rounded-lg p-1">
                <img 
                  src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/494910332_1213195866868208_7183617661021514894_n.jpg?stp=dst-jpg_tt6&cstp=mx2000x2000&ctp=s2000x2000&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEfK7yCnDomJvNLM4MePHvkdaF8-md_JfF1oXz6Z38l8eSST3nciaocFNYHcIbiDKUYqlIpNE_dWD_wcsLMwLZN&_nc_ohc=geSLQ_QhkLkQ7kNvwH7vANF&_nc_oc=Adrr7zBKSCnWEWyRDnmf-aoz0GrdP34r_b6MrrxR8s-oWtmGMBkIQYzO8Hg5dkBZgD_x7NEoBTZ26nE_y0HnJcRO&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=VoItWxyV-fJd2T-yHXufdQ&_nc_ss=7b2a8&oh=00_AQKOkRVYcIiF1UgSpvxve0kj0iTEkI6I21lgD9rrtziQZw&oe=6AA2904E" 
                  alt="DTDF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1 leading-tight">
                  QUỸ PHÁT TRIỂN GIÁO DỤC<br />
                  TÂM - TÀI - CHÍNH
                </h3>
                <p className="text-white/60 text-xs">
                  Dedication - Talent - Integrity<br />
                  Education Development Foundation
                </p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Quỹ xã hội hoạt động không vì mục tiêu lợi nhuận, hướng tới việc hỗ trợ và khuyến khích phát triển hoạt động giáo dục và đào tạo.
            </p>
          </div>

          {/* Column 2: Về Quỹ */}
          <div>
            <h4 className="font-heading font-bold text-gold tracking-wider uppercase mb-6 text-sm">Về Quỹ</h4>
            <ul className="space-y-4">
              <li><Link to="/gioi-thieu" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Giới thiệu</Link></li>
              <li><Link to="/ve-quy" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Tôn chỉ & mục đích</Link></li>
              <li><Link to="/co-cau-to-chuc" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Cơ cấu tổ chức</Link></li>
              <li><Link to="/van-ban" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Điều lệ</Link></li>
            </ul>
          </div>

          {/* Column 3: Hoạt động */}
          <div>
            <h4 className="font-heading font-bold text-gold tracking-wider uppercase mb-6 text-sm">Hoạt động</h4>
            <ul className="space-y-4">
              <li><Link to="/ho-tro-tai-tro" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Học bổng</Link></li>
              <li><Link to="/ho-tro-tai-tro" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Nghiên cứu</Link></li>
              <li><Link to="/ho-tro-tai-tro" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Đổi mới sáng tạo</Link></li>
              <li><Link to="/ho-tro-tai-tro" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Hỗ trợ giảng viên</Link></li>
              <li><Link to="/tin-tuc" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Tin tức</Link></li>
            </ul>
          </div>

          {/* Column 4: Minh bạch */}
          <div>
            <h4 className="font-heading font-bold text-gold tracking-wider uppercase mb-6 text-sm">Minh bạch</h4>
            <ul className="space-y-4">
              <li><Link to="/van-ban" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Văn bản pháp lý</Link></li>
              <li><Link to="/minh-bach-tai-chinh" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Báo cáo hoạt động</Link></li>
              <li><Link to="/minh-bach-tai-chinh" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Báo cáo tài chính</Link></li>
              <li><Link to="/minh-bach-tai-chinh" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Công khai tài trợ</Link></li>
              <li><Link to="/lien-he" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">Liên hệ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col">
            <div className="text-[10px] opacity-70 uppercase tracking-widest mb-1">
              Bản quyền © {new Date().getFullYear()} DTDF Foundation
            </div>
            <div className="text-[11px] font-medium text-white">
              Hoạt động theo Quyết định số 886/QĐ-BNV ngày 03/11/2023 của Bộ trưởng Bộ Nội vụ
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 text-[11px] font-medium uppercase">
            <Link to="#" className="hover:text-gold transition-colors">Chính sách bảo mật</Link>
            <Link to="#" className="hover:text-gold transition-colors">Điều khoản sử dụng</Link>
            <Link to="#" className="hover:text-gold transition-colors">Sơ đồ trang</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
