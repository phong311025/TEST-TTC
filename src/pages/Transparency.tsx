import { Layout } from '../components/layout/Layout';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Transparency() {
  const tabs = ["TỔNG QUAN", "NGUỒN TIẾP NHẬN", "HOẠT ĐỘNG HỖ TRỢ", "BÁO CÁO", "VĂN BẢN"];
  
  return (
    <Layout>
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">CÔNG KHAI MINH BẠCH</span>
          <h1 className="heading-1 max-w-4xl mx-auto">
            Công khai để mỗi sự đồng hành<br/>
            đều tạo nên niềm tin
          </h1>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border-color bg-white sticky top-[100px] md:top-[124px] z-30">
        <div className="container-custom">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide pt-6">
            {tabs.map((tab, i) => (
              <button 
                key={i} 
                className={`pb-4 text-sm font-bold tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                  i === 0 ? 'text-primary border-primary' : 'text-text-secondary border-transparent hover:text-primary hover:border-border-color'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24 bg-bg-cream">
        <div className="container-custom">
          
          {/* Dashboard Module */}
          <div className="mb-20">
            <h2 className="heading-2 text-primary mb-10">Tổng quan hoạt động</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Tổng nguồn tài trợ", value: "--" },
                { label: "Tổng giá trị hỗ trợ", value: "--" },
                { label: "Số chương trình", value: "--" },
                { label: "Đối tượng được hỗ trợ", value: "--" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-border-color hover:border-gold transition-colors duration-300">
                  <span className="text-sm font-bold text-text-secondary uppercase tracking-wider block mb-4">{stat.label}</span>
                  <div className="font-heading font-bold text-4xl text-primary">{stat.value}</div>
                  <div className="text-xs text-text-secondary mt-2">Đang cập nhật dữ liệu...</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-secondary italic mt-6 text-center">
              * Các số liệu sẽ được cập nhật sau mỗi kỳ báo cáo tài chính.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl border border-border-color">
              <h3 className="heading-3 text-primary mb-6">Báo cáo mới nhất</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 border border-border-color rounded-xl hover:border-gold hover:bg-bg-light-green transition-all group cursor-pointer">
                    <div>
                      <div className="text-sm font-medium text-text-secondary mb-1">Tháng {12 - i}/2024</div>
                      <div className="font-heading font-bold text-primary">Báo cáo thu chi hoạt động Quỹ</div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 group-hover:text-gold transition-colors" />
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border-color text-center">
                <Link to="/van-ban" className="text-primary font-semibold hover:text-gold transition-colors text-sm uppercase tracking-wider">
                  Xem tất cả báo cáo
                </Link>
              </div>
            </div>

            <div className="bg-primary p-10 rounded-2xl text-white">
              <h3 className="heading-3 mb-6">Nguyên tắc tài chính</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Toàn vẹn nguồn tài trợ</h4>
                    <p className="text-white/70 text-sm">100% nguồn tài trợ có mục đích chỉ định được sử dụng đúng cho mục đích đó.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Kiểm toán độc lập</h4>
                    <p className="text-white/70 text-sm">Báo cáo tài chính thường niên được kiểm toán bởi đơn vị độc lập và công khai minh bạch.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
