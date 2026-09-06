import { Layout } from '../components/layout/Layout';
import { Filter, ArrowRight } from 'lucide-react';
import { mockPrograms } from '../data/mock';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Programs() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const filters = ['Tất cả', 'Sinh viên', 'Giảng viên', 'Nghiên cứu', 'Khởi nghiệp', 'Cơ sở vật chất'];

  const filteredPrograms = activeFilter === 'Tất cả' 
    ? mockPrograms 
    : mockPrograms.filter(p => p.category === activeFilter);

  return (
    <Layout>
      <section className="bg-white py-20 border-b border-border-color">
        <div className="container-custom text-center">
          <span className="eyebrow mx-auto justify-center">CHƯƠNG TRÌNH HỖ TRỢ</span>
          <h1 className="heading-1 text-primary max-w-3xl mx-auto mb-6">
            Đầu tư cho tri thức<br/>Kiến tạo tương lai
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Các chương trình học bổng, tài trợ nghiên cứu và hỗ trợ giáo dục đang được triển khai bởi Quỹ Phát triển giáo dục Tâm - Tài - Chính.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg-light-green min-h-screen">
        <div className="container-custom">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full border-b border-border-color">
              <Filter className="w-5 h-5 text-text-secondary mr-2 shrink-0 hidden md:block" />
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeFilter === f 
                      ? 'text-primary border-primary' 
                      : 'text-text-secondary border-transparent hover:text-primary hover:border-border-color'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Program List */}
          <div className="flex flex-col gap-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
                <div key={program.id} className="bg-white rounded-2xl border border-border-color hover:border-gold hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
                  <div className="w-full md:w-2/5 xl:w-1/3 aspect-[4/3] md:aspect-auto relative overflow-hidden shrink-0">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className={cn(
                        "inline-block px-4 py-1.5 text-xs font-bold rounded-full shadow-sm",
                        program.status === 'ĐANG NHẬN HỒ SƠ' ? 'bg-gold text-primary-dark' : 'bg-white text-primary'
                      )}>
                        {program.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10 flex flex-col w-full md:w-3/5 xl:w-2/3">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-primary tracking-wider uppercase bg-bg-light-green px-3 py-1 rounded-full">{program.category}</span>
                    </div>
                    
                    <h3 className="heading-3 text-primary mb-4 group-hover:text-gold transition-colors">{program.title}</h3>
                    <p className="text-text-secondary text-lg mb-6 line-clamp-2">{program.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-border-color mt-auto">
                      <div>
                        <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Đối tượng</span>
                        <span className="text-sm font-medium text-primary">{program.targetAudience}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Thời gian</span>
                        <span className="text-sm font-medium text-primary">{program.duration}</span>
                      </div>
                    </div>
                    
                    <div>
                      <Link to={`/ho-tro-tai-tro?p=${program.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
                        XEM CHI TIẾT
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center text-text-secondary bg-white rounded-2xl border border-dashed border-border-color">
                <p className="text-lg font-medium">Chưa có chương trình trong mục này.</p>
                <p>Nội dung đang được cập nhật.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
