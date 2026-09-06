import { Link } from 'react-router-dom';
import { ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { mockPrograms } from '../../data/mock';
import { cn } from '../../lib/utils';

export function FeaturedProgramsSection() {
  const featured = mockPrograms[0];
  const others = mockPrograms.slice(1, 3);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow">CHƯƠNG TRÌNH</span>
            <h2 className="heading-2 text-primary">Những hành trình đang tạo nên thay đổi</h2>
          </div>
          <Link to="/ho-tro-tai-tro" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors group pb-1 border-b-2 border-transparent hover:border-gold whitespace-nowrap">
            XEM TẤT CẢ CHƯƠNG TRÌNH
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Featured Program */}
          <Link to={`/ho-tro-tai-tro?p=${featured.slug}`} className="col-span-1 lg:col-span-7 group block h-full">
            <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-gold text-primary-dark text-xs font-bold rounded-full mb-4">
                  {featured.status}
                </span>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">{featured.title}</h3>
                <p className="text-white/80 line-clamp-2 md:text-lg">{featured.description}</p>
              </div>
            </div>
          </Link>

          {/* Smaller Programs */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-8">
            {others.map((program) => (
              <Link key={program.id} to={`/ho-tro-tai-tro?p=${program.slug}`} className="group flex flex-col sm:flex-row gap-6 items-start h-full">
                <div className="w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center h-full">
                  <span className={cn(
                    "inline-block px-3 py-1 text-[10px] font-bold rounded-full mb-3 w-fit",
                    program.status === 'ĐANG NHẬN HỒ SƠ' ? 'bg-gold text-primary-dark' : 'bg-bg-light-green text-primary'
                  )}>
                    {program.status}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-gold transition-colors line-clamp-2">{program.title}</h3>
                  <p className="text-text-secondary text-sm line-clamp-2">{program.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
