import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-[55%] relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sinh viên học tập" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative background box */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-border-color rounded-2xl z-0 hidden md:block"></div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[45%]">
              <span className="eyebrow">VỀ CHÚNG TÔI</span>
              <h2 className="heading-2 text-primary mb-6">
                Lan tỏa giá trị giáo dục<br/>
                từ Tâm – bằng Tài – với Chính trực
              </h2>
              
              <div className="space-y-6 text-text-secondary text-lg mb-10">
                <p>
                  Quỹ Phát triển giáo dục Tâm - Tài - Chính là quỹ xã hội hoạt động không vì mục tiêu lợi nhuận, hướng tới hỗ trợ và khuyến khích sự phát triển của giáo dục, đào tạo, nghiên cứu khoa học và đổi mới sáng tạo.
                </p>
                <p>
                  Quỹ đồng hành cùng những sinh viên có thành tích nổi bật, những sinh viên cần sự trợ giúp, các giảng viên có nhiều đóng góp cho giáo dục và các chương trình nghiên cứu – đào tạo có giá trị.
                </p>
              </div>
              
              <Link to="/gioi-thieu" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors group pb-1 border-b-2 border-primary hover:border-gold">
                TÌM HIỂU VỀ QUỸ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="w-full py-12 md:h-[150px] md:py-0 bg-bg-cream flex items-center">
        <div className="container-custom flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 bg-white border border-gold/30 p-6 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-bg-light-green rounded-lg flex items-center justify-center text-primary font-bold shrink-0">T</div>
            <div>
              <h4 className="text-primary font-bold text-sm mb-1">TÂM</h4>
              <p className="text-[12px] text-text-secondary leading-tight">Tận tâm với giáo dục và sứ mệnh phụng sự cộng đồng.</p>
            </div>
          </div>
          <div className="flex-1 bg-white border border-gold/30 p-6 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-bg-light-green rounded-lg flex items-center justify-center text-primary font-bold shrink-0">T</div>
            <div>
              <h4 className="text-primary font-bold text-sm mb-1">TÀI</h4>
              <p className="text-[12px] text-text-secondary leading-tight">Nuôi dưỡng tri thức, năng lực và khả năng sáng tạo.</p>
            </div>
          </div>
          <div className="flex-1 bg-white border border-gold/30 p-6 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-bg-light-green rounded-lg flex items-center justify-center text-primary font-bold shrink-0">C</div>
            <div>
              <h4 className="text-primary font-bold text-sm mb-1">CHÍNH</h4>
              <p className="text-[12px] text-text-secondary leading-tight">Minh bạch, trách nhiệm và chính trực trong mọi hoạt động.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
