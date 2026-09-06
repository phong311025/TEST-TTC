import { GraduationCap, HeartHandshake, Microscope, Lightbulb, Building2, UserCheck } from 'lucide-react';

export function FocusAreasSection() {
  const areas = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary group-hover:text-gold transition-colors" strokeWidth={1.5} />,
      title: "HỌC BỔNG & THÀNH TÍCH HỌC TẬP",
      desc: "Hỗ trợ sinh viên có thành tích học tập xuất sắc hoặc đạt kết quả cao trong các kỳ thi."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary group-hover:text-gold transition-colors" strokeWidth={1.5} />,
      title: "SINH VIÊN CẦN HỖ TRỢ",
      desc: "Đồng hành với sinh viên có hoàn cảnh đặc biệt, cần sự trợ giúp."
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary group-hover:text-gold transition-colors" strokeWidth={1.5} />,
      title: "NGHIÊN CỨU KHOA HỌC",
      desc: "Hỗ trợ công trình nghiên cứu, cuộc thi sáng tạo khoa học, hội thảo và tọa đàm chuyên môn."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary group-hover:text-gold transition-colors" strokeWidth={1.5} />,
      title: "PHÁT TRIỂN GIẢNG VIÊN",
      desc: "Hỗ trợ, tài trợ cho giảng viên có thành tích xuất sắc và nhiều đóng góp trong giảng dạy, đào tạo."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary group-hover:text-gold transition-colors" strokeWidth={1.5} />,
      title: "KHỞI NGHIỆP & ĐỔI MỚI SÁNG TẠO",
      desc: "Khuyến khích các hoạt động khởi nghiệp và đổi mới sáng tạo dành cho sinh viên."
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary group-hover:text-gold transition-colors" strokeWidth={1.5} />,
      title: "CƠ SỞ VẬT CHẤT GIÁO DỤC",
      desc: "Hỗ trợ cơ sở vật chất phục vụ nghiên cứu khoa học, giảng dạy và đào tạo."
    }
  ];

  return (
    <section className="py-24 bg-bg-light-green">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mx-auto justify-center">LĨNH VỰC HOẠT ĐỘNG</span>
          <h2 className="heading-2 text-primary">
            Đầu tư cho tri thức<br/>
            Tạo dựng giá trị bền vững
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-2xl border border-border-color hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-bg-light-green flex items-center justify-center mb-6">
                {area.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-3 leading-tight">{area.title}</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
