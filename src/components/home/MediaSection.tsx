import { PlayCircle } from 'lucide-react';

export function MediaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <span className="eyebrow">THƯ VIỆN</span>
          <h2 className="heading-2 text-primary">Những câu chuyện được kể bằng hình ảnh</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video */}
          <div className="col-span-1 lg:col-span-2 relative rounded-2xl overflow-hidden aspect-video bg-bg-light-green group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-10 h-10 text-primary ml-1" />
              </div>
            </div>
            {/* Placeholder Image */}
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <span className="text-gold font-bold text-xs tracking-wider uppercase mb-2 block">Phóng sự</span>
              <h3 className="font-heading font-bold text-xl md:text-2xl">Hành trình mang tri thức đến những tài năng trẻ</h3>
            </div>
          </div>

          {/* List Videos */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 group cursor-pointer h-1/3">
                <div className="w-1/2 relative rounded-xl overflow-hidden bg-bg-light-green shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <PlayCircle className="w-5 h-5 text-primary ml-0.5" />
                    </div>
                  </div>
                  <img 
                    src={`https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&sig=${item}`} 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                  <h4 className="font-heading font-bold text-primary text-sm sm:text-base group-hover:text-gold transition-colors line-clamp-3">
                    [Đang cập nhật] Tiêu đề video hoạt động Quỹ số {item}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
