import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="relative py-32 bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop" 
          alt="Đồng hành cùng quỹ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-1 mb-6">Cùng chúng tôi đầu tư<br/>cho một thế hệ tương lai</h2>
          <p className="text-white/80 text-lg md:text-xl mb-12">
            Mỗi sự đồng hành đều có thể trở thành một cơ hội học tập, nghiên cứu và phát triển cho những người trẻ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/lien-he" className="w-full sm:w-auto bg-gold text-primary-dark font-bold px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-colors text-center">
              TÌM HIỂU CÁCH ĐỒNG HÀNH
            </Link>
            <Link to="/lien-he" className="w-full sm:w-auto bg-transparent border border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-colors text-center">
              LIÊN HỆ VỚI QUỸ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
