import { Layout } from '../components/layout/Layout';
import { mockNews } from '../data/mock';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export function News() {
  const featured = mockNews[0];
  const list = mockNews.slice(1);

  return (
    <Layout>
      <section className="bg-white py-20 border-b border-border-color">
        <div className="container-custom text-center">
          <span className="eyebrow mx-auto justify-center">TIN TỨC & SỰ KIỆN</span>
          <h1 className="heading-1 text-primary max-w-3xl mx-auto">
            Cập nhật hoạt động<br/>từ DTDF
          </h1>
        </div>
      </section>

      <section className="py-24 bg-bg-cream">
        <div className="container-custom">
          
          {/* Featured Post */}
          <Link to={`/tin-tuc/${featured.slug}`} className="group block mb-20 bg-white rounded-2xl border border-border-color overflow-hidden hover:border-gold hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase bg-bg-light-green px-3 py-1 rounded-full">{featured.category}</span>
                  <span className="text-sm text-text-secondary flex items-center gap-1.5"><Clock className="w-4 h-4"/> {featured.date}</span>
                </div>
                <h2 className="heading-2 text-primary mb-6 group-hover:text-gold transition-colors">{featured.title}</h2>
                <p className="text-text-secondary text-lg mb-8">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-gold transition-colors">
                  ĐỌC BÀI VIẾT <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((news) => (
              <Link key={news.id} to={`/tin-tuc/${news.slug}`} className="group bg-white rounded-2xl border border-border-color overflow-hidden hover:border-gold hover:shadow-md transition-all duration-300 flex flex-col">
                <div className="aspect-[16/9] relative overflow-hidden shrink-0">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-[10px] font-bold text-primary tracking-wider uppercase bg-bg-light-green px-2 py-1 rounded-full">{news.category}</span>
                    <span className="text-xs text-text-secondary flex items-center gap-1.5"><Clock className="w-3 h-3"/> {news.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-text-secondary mb-6 line-clamp-3 flex-grow">{news.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-gold transition-colors mt-auto">
                    ĐỌC TIẾP <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-full border border-border-color text-text-secondary font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-border-color text-text-secondary font-bold flex items-center justify-center hover:border-primary hover:text-primary transition-colors">...</button>
          </div>

        </div>
      </section>
    </Layout>
  );
}
