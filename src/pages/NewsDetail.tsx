import { Layout } from '../components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { mockNews } from '../data/mock';
import { Clock, ChevronLeft, Share2 } from 'lucide-react';

export function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  // Find news or fallback to first one if not found (for demo)
  const news = mockNews.find(n => n.slug === slug) || mockNews[0];
  const related = mockNews.filter(n => n.id !== news.id).slice(0, 3);

  return (
    <Layout>
      <section className="bg-white py-12 md:py-20 border-b border-border-color">
        <div className="container-custom max-w-4xl">
          <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 font-medium text-sm">
            <ChevronLeft className="w-4 h-4" /> TRỞ VỀ DANH SÁCH TIN
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold text-primary tracking-wider uppercase bg-bg-light-green px-3 py-1 rounded-full">{news.category}</span>
            <span className="text-sm text-text-secondary flex items-center gap-1.5"><Clock className="w-4 h-4"/> {news.date}</span>
          </div>
          
          <h1 className="heading-2 text-primary mb-8">{news.title}</h1>
          <p className="text-xl text-text-secondary leading-relaxed font-medium mb-12">
            {news.excerpt}
          </p>
          
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12">
            <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-text-secondary prose-a:text-gold max-w-none">
            <p>
              Đây là nội dung bài viết mẫu. Trong thực tế, nội dung này sẽ được lấy từ CMS. Quỹ Phát triển giáo dục Tâm - Tài - Chính luôn nỗ lực mang đến những giá trị tốt nhất cho cộng đồng thông qua các hoạt động thiết thực.
            </p>
            <h3>Tầm nhìn và sứ mệnh</h3>
            <p>
              Chúng tôi tin rằng mọi sự đồng hành đều có thể trở thành một cơ hội học tập, nghiên cứu và phát triển cho những người trẻ. Sự chung tay của cộng đồng là nguồn động lực to lớn giúp Quỹ hoàn thành sứ mệnh của mình.
            </p>
            <p>
              Việc vận động tài trợ, quyên góp tiền, hiện vật hoặc công sức phải hoàn toàn trên cơ sở tự nguyện. Không đặt ra mức đóng góp tối thiểu mang tính bắt buộc.
            </p>
            <blockquote>
              "Giáo dục là vũ khí mạnh nhất mà người ta có thể sử dụng để thay đổi thế giới."
            </blockquote>
            <p>
              Chi tiết về các chương trình sẽ tiếp tục được cập nhật trong thời gian tới. Quý vị có thể theo dõi thường xuyên trên website để không bỏ lỡ các thông tin quan trọng.
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border-color flex justify-between items-center">
            <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">Chia sẻ bài viết</div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-bg-light-green text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-24 bg-bg-cream">
        <div className="container-custom">
          <h2 className="heading-3 text-primary mb-12 text-center">Tin tức liên quan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link key={item.id} to={`/tin-tuc/${item.slug}`} className="group bg-white rounded-2xl border border-border-color overflow-hidden hover:border-gold hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-[10px] font-bold text-primary tracking-wider uppercase bg-bg-light-green px-2 py-1 rounded-full">{item.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
