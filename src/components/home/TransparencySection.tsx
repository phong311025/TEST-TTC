import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Download } from 'lucide-react';

export function TransparencySection() {
  const principles = [
    {
      title: "TỰ NGUYỆN",
      desc: "Không đặt mức đóng góp tối thiểu mang tính bắt buộc."
    },
    {
      title: "CÔNG KHAI",
      desc: "Công khai mục đích và kết quả vận động tài trợ."
    },
    {
      title: "MINH BẠCH",
      desc: "Công khai việc quản lý và sử dụng nguồn tài trợ."
    },
    {
      title: "GIÁM SÁT",
      desc: "Hoạt động chịu sự kiểm tra, giám sát theo quy định."
    }
  ];

  const docs = [
    "Báo cáo hoạt động",
    "Báo cáo tài chính",
    "Danh sách các khoản tài trợ",
    "Kết quả sử dụng nguồn tài trợ",
    "Văn bản pháp lý"
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Content */}
          <div className="col-span-1 lg:col-span-7">
            <h2 className="heading-2 text-white mb-6">Minh bạch tạo dựng niềm tin</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-2xl">
              Mọi hoạt động vận động, tiếp nhận, quản lý và sử dụng nguồn tài trợ của Quỹ được thực hiện trên nguyên tắc tự nguyện, công khai, minh bạch và tuân thủ quy định pháp luật.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {principles.map((p, i) => (
                <div key={i} className="border-t border-white/20 pt-6">
                  <span className="text-gold font-heading font-bold text-sm mb-2 block tracking-widest">0{i+1}</span>
                  <h4 className="font-heading font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-white/70 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/minh-bach-tai-chinh" className="inline-flex items-center gap-2 bg-gold text-primary-dark font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:text-primary transition-colors">
              XEM BÁO CÁO CÔNG KHAI
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Panel */}
          <div className="col-span-1 lg:col-span-5">
            <div className="bg-primary-dark p-8 md:p-10 rounded-2xl border border-white/10">
              <h3 className="font-heading font-bold text-2xl text-gold mb-8">Tài liệu công khai</h3>
              
              <ul className="space-y-4">
                {docs.map((doc, idx) => (
                  <li key={idx}>
                    <Link to="/minh-bach-tai-chinh" className="group flex items-center justify-between p-4 bg-primary rounded-xl border border-white/5 hover:border-gold/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-gold/70" />
                        <span className="font-medium text-white/90 group-hover:text-white">{doc}</span>
                      </div>
                      <Download className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center text-sm text-white/50 italic">
                Cập nhật định kỳ theo quy định.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
