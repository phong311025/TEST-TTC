import { Layout } from '../components/layout/Layout';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <Layout>
      {/* Hero Small */}
      <section className="bg-bg-light-green py-20 md:py-28 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <span className="eyebrow mx-auto justify-center">VỀ CHÚNG TÔI</span>
          <h1 className="heading-1 text-primary max-w-3xl mx-auto">
            Vì một nền giáo dục<br/>
            được nuôi dưỡng bằng Tâm
          </h1>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
      </section>

      {/* 01. Câu chuyện về Quỹ & 02. Tôn chỉ mục đích */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="text-gold font-heading font-bold text-lg mb-4 tracking-wider">01.</div>
              <h2 className="heading-2 text-primary mb-6">Câu chuyện về Quỹ</h2>
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                <p>
                  Quỹ Phát triển giáo dục Tâm - Tài - Chính là quỹ xã hội hoạt động không vì mục tiêu lợi nhuận. Chúng tôi tin rằng giáo dục là nền tảng vững chắc nhất để xây dựng một tương lai thịnh vượng.
                </p>
                <p>
                  Được thành lập với khát vọng kiến tạo môi trường học tập, nghiên cứu tốt nhất, Quỹ luôn đồng hành cùng các thế hệ sinh viên, giảng viên trên toàn quốc, đặc biệt là trong lĩnh vực kinh tế - tài chính.
                </p>
              </div>
            </div>
            
            <div>
              <div className="text-gold font-heading font-bold text-lg mb-4 tracking-wider">02.</div>
              <h2 className="heading-2 text-primary mb-6">Tôn chỉ, mục đích</h2>
              <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                <p>
                  Quỹ hướng tới việc hỗ trợ và khuyến khích phát triển hoạt động giáo dục và đào tạo chuyên ngành tài chính trên toàn quốc. Đồng thời, Quỹ đóng vai trò là "bà đỡ" cho các hoạt động đổi mới sáng tạo, nghiên cứu khoa học của sinh viên.
                </p>
                <ul className="list-disc pl-5 space-y-3 mt-4 text-primary font-medium">
                  <li>Hỗ trợ tài năng trẻ, sinh viên vượt khó.</li>
                  <li>Phát triển năng lực giảng viên.</li>
                  <li>Đầu tư cơ sở vật chất, nghiên cứu khoa học.</li>
                  <li>Thúc đẩy khởi nghiệp và đổi mới sáng tạo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Tâm - Tài - Chính */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container-custom">
          <div className="text-gold font-heading font-bold text-lg mb-4 tracking-wider">03.</div>
          <h2 className="heading-2 mb-16">Giá trị cốt lõi</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6">
                <span className="font-heading font-bold text-3xl text-gold">T</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">TÂM</h3>
              <p className="text-white/80 max-w-sm">Tận tâm với sự nghiệp giáo dục, lan tỏa tình yêu thương và trách nhiệm với cộng đồng.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6">
                <span className="font-heading font-bold text-3xl text-gold">T</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">TÀI</h3>
              <p className="text-white/80 max-w-sm">Trân trọng và nuôi dưỡng tri thức, năng lực, sự sáng tạo của mỗi cá nhân.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6">
                <span className="font-heading font-bold text-3xl text-gold">C</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">CHÍNH</h3>
              <p className="text-white/80 max-w-sm">Hoạt động dựa trên nền tảng của sự minh bạch, công khai và chính trực.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Nguyên tắc hoạt động & 05. Căn cứ pháp lý */}
      <section className="py-24 bg-bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Nguyên tắc */}
            <div>
              <div className="text-gold font-heading font-bold text-lg mb-4 tracking-wider">04.</div>
              <h2 className="heading-2 text-primary mb-8">Nguyên tắc hoạt động</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Không vì mục tiêu lợi nhuận",
                  "Tự nguyện tham gia",
                  "Hoạt động đúng tôn chỉ, mục đích",
                  "Công khai, minh bạch",
                  "Quản lý, sử dụng tài sản đúng quy định",
                  "Không phân chia tài sản trong quá trình hoạt động",
                  "Chịu trách nhiệm trước pháp luật"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                    </div>
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pháp lý */}
            <div>
              <div className="text-gold font-heading font-bold text-lg mb-4 tracking-wider">05.</div>
              <h2 className="heading-2 text-primary mb-8">Căn cứ pháp lý</h2>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-border-color shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bg-light-green rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <span className="block text-sm font-bold text-text-secondary tracking-widest uppercase">Quyết định</span>
                      <span className="block font-heading font-bold text-xl text-primary">Số 886/QĐ-BNV</span>
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-bg-light-green text-primary text-sm font-bold rounded-full mb-4">
                    Ngày ban hành: 03/11/2023
                  </div>
                  
                  <p className="text-text-secondary text-lg mb-8">
                    Về việc cấp Giấy phép thành lập và công nhận Điều lệ Quỹ Phát triển giáo dục Tâm - Tài - Chính.
                  </p>
                  
                  <Link to="/van-ban" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
                    XEM VĂN BẢN
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
