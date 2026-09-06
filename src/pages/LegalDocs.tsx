import { Layout } from '../components/layout/Layout';
import { Download, FileText, Filter } from 'lucide-react';
import { mockDocuments } from '../data/mock';
import { useState } from 'react';

export function LegalDocs() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const filters = ['Tất cả', 'Quyết định', 'Điều lệ', 'Báo cáo', 'Công khai'];

  const filteredDocs = activeFilter === 'Tất cả' 
    ? mockDocuments 
    : mockDocuments.filter(d => d.category === activeFilter);

  return (
    <Layout>
      <section className="bg-bg-light-green py-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <span className="eyebrow">MINH BẠCH & TRÁCH NHIỆM</span>
          <h1 className="heading-1 text-primary">Văn bản pháp lý</h1>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl">
            Danh sách các quyết định, điều lệ và tài liệu công khai liên quan đến tổ chức và hoạt động của Quỹ Phát triển giáo dục Tâm - Tài - Chính.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="w-5 h-5 text-text-secondary mr-2 shrink-0" />
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeFilter === f 
                      ? 'bg-primary text-white' 
                      : 'bg-bg-light-green text-primary hover:bg-gold hover:text-primary-dark'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Document List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => (
                <div key={doc.id} className="bg-white p-8 rounded-2xl border border-border-color hover:border-gold hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-3 py-1 bg-bg-light-green text-primary text-xs font-bold rounded-full">
                      {doc.category}
                    </span>
                    <span className="text-sm font-medium text-text-secondary">{doc.date}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <h3 className="font-heading font-bold text-xl text-primary">{doc.title}</h3>
                  </div>
                  
                  <div className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wider">
                    Cơ quan ban hành: <span className="text-primary">{doc.authority}</span>
                  </div>
                  
                  <p className="text-text-secondary mb-8 flex-grow">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-border-color mt-auto">
                    <button className="flex-1 bg-bg-light-green text-primary font-semibold py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors text-sm">
                      XEM VĂN BẢN
                    </button>
                    <button className="flex-1 bg-white border border-border-color text-primary font-semibold py-2.5 rounded-full hover:border-gold hover:text-gold transition-colors text-sm flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" /> TẢI PDF
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-text-secondary bg-bg-light-green rounded-2xl border border-dashed border-border-color">
                <FileText className="w-12 h-12 mx-auto mb-4 text-primary/20" />
                <p className="text-lg font-medium">Chưa có văn bản trong mục này.</p>
                <p>Nội dung đang được cập nhật.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
