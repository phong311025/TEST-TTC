import { Layout } from '../components/layout/Layout';
import { ArrowRight, Clock, MapPin, Mail, Phone, Globe } from 'lucide-react';

export function Contact() {
  return (
    <Layout>
      <section className="bg-bg-light-green py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <span className="eyebrow mx-auto justify-center">LIÊN HỆ</span>
          <h1 className="heading-1 text-primary">Kết nối với chúng tôi</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Info */}
            <div>
              <div className="mb-12">
                <h2 className="heading-2 text-primary mb-4">QUỸ PHÁT TRIỂN GIÁO DỤC<br/>TÂM - TÀI - CHÍNH</h2>
                <p className="text-text-secondary text-lg">Dedication - Talent - Integrity<br/>Education Development Foundation</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-bg-light-green rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary mb-2">Trụ sở chính</h4>
                    <p className="text-text-secondary leading-relaxed">
                      Học viện Tài chính,<br/>
                      số 58 phố Lê Văn Hiến,<br/>
                      phường Đức Thắng,<br/>
                      quận Bắc Từ Liêm,<br/>
                      thành phố Hà Nội.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-bg-light-green rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary mb-2">Điện thoại</h4>
                    <p className="text-text-secondary">[ĐANG CẬP NHẬT]</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-bg-light-green rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary mb-2">Email</h4>
                    <p className="text-text-secondary">[ĐANG CẬP NHẬT]</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-bg-light-green rounded-full flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary mb-2">Website</h4>
                    <p className="text-text-secondary">[ĐANG CẬP NHẬT]</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-primary text-white rounded-2xl">
                <h4 className="font-heading font-bold text-xl mb-4 text-gold">Đồng hành cùng Quỹ</h4>
                <p className="text-white/80 mb-6">Mọi sự đóng góp đều được trân trọng và sử dụng minh bạch vì mục tiêu phát triển giáo dục.</p>
                <div className="font-medium">
                  <div className="text-white/60 text-sm mb-1 uppercase tracking-wider">Thông tin chuyển khoản</div>
                  <div className="text-lg">[ĐANG CẬP NHẬT]</div>
                </div>
              </div>
            </div>

            {/* Right Map Placeholder */}
            <div className="h-[500px] lg:h-auto bg-gray-100 rounded-2xl border border-border-color overflow-hidden relative group">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-12 h-12 text-primary/30 mb-4" />
                <h3 className="font-heading font-bold text-xl text-primary mb-2">Bản đồ vị trí</h3>
                <p className="text-text-secondary">Học viện Tài chính, 58 Lê Văn Hiến, Hà Nội</p>
                <button className="mt-6 px-6 py-2.5 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
                  Mở trên Google Maps
                </button>
              </div>
              {/* Optional: Add an actual iframe map here if desired */}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
