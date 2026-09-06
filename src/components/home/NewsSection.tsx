import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { mockNews } from '../../data/mock';

export function NewsSection() {
  const featured = mockNews[0];
  const others = mockNews.slice(1, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow">TIN NỔI BẬT</span>
            <h2 className="heading-2 text-primary">Câu chuyện từ những giá trị được trao đi</h2>
          </div>
          <Link to="/tin-tuc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors group pb-1 border-b-2 border-transparent hover:border-gold whitespace-nowrap">
            XEM TẤT CẢ TIN TỨC
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large News */}
          <Link to={`/tin-tuc/${featured.slug}`} className="col-span-1 lg:col-span-7 group block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-primary tracking-wider uppercase bg-bg-light-green px-3 py-1 rounded-full">{featured.category}</span>
              <span className="text-sm text-text-secondary flex items-center gap-1.5"><Clock className="w-4 h-4"/> {featured.date}</span>
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4 group-hover:text-gold transition-colors leading-tight">
              {featured.title}
            </h3>
            <p className="text-text-secondary text-lg line-clamp-3 mb-6">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-gold transition-colors">
              ĐỌC TIẾP <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Smaller News List */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8 lg:gap-10">
            {others.map((news) => (
              <Link key={news.id} to={`/tin-tuc/${news.slug}`} className="group flex gap-6 items-start">
                <div className="w-1/3 aspect-video rounded-xl overflow-hidden shrink-0">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-2/3 flex flex-col">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{news.category}</span>
                    <span className="text-xs text-text-secondary">{news.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2">{news.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
