import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function TargetAudienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const audiences = [
    {
      title: "SINH VIÊN XUẤT SẮC",
      desc: "Sinh viên đạt kết quả cao trong các cuộc thi nghiên cứu, sáng tạo khoa học, kỳ thi quốc gia, quốc tế hoặc đạt thành tích xuất sắc trong học tập."
    },
    {
      title: "SINH VIÊN CÓ HOÀN CẢNH ĐẶC BIỆT",
      desc: "Sinh viên cần sự hỗ trợ để tiếp tục học tập và phát triển."
    },
    {
      title: "GIẢNG VIÊN",
      desc: "Giảng viên có thành tích xuất sắc hoặc nhiều đóng góp trong giảng dạy và đào tạo."
    },
    {
      title: "NGHIÊN CỨU – HỘI THẢO",
      desc: "Các công trình nghiên cứu khoa học; hội thảo, tọa đàm chia sẻ kinh nghiệm giảng dạy, học tập và định hướng nghề nghiệp."
    },
    {
      title: "CƠ SỞ VẬT CHẤT",
      desc: "Các hoạt động xây dựng cơ sở vật chất phục vụ nghiên cứu khoa học, giảng dạy và đào tạo."
    },
    {
      title: "KHỞI NGHIỆP & ĐỔI MỚI SÁNG TẠO",
      desc: "Các chương trình hỗ trợ hoạt động khởi nghiệp và đổi mới sáng tạo cho sinh viên."
    }
  ];

  return (
    <section className="py-24 bg-bg-cream">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-40">
              <span className="eyebrow">ĐỐI TƯỢNG HỖ TRỢ</span>
              <h2 className="heading-2 text-primary mb-6">Ai có thể đồng hành và nhận hỗ trợ từ Quỹ?</h2>
              <p className="text-text-secondary text-lg mb-8">
                Chúng tôi hướng đến những cá nhân và tập thể có tinh thần vươn lên, đóng góp thiết thực cho sự phát triển của giáo dục và xã hội.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col space-y-4">
              {audiences.map((item, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "border rounded-2xl overflow-hidden transition-colors duration-300 bg-white",
                    openIndex === idx ? "border-gold shadow-sm" : "border-border-color hover:border-gold/50"
                  )}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-heading font-bold text-lg">0{idx + 1}</span>
                      <h3 className="font-heading font-bold text-lg md:text-xl text-primary">{item.title}</h3>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-primary transition-transform duration-300",
                      openIndex === idx ? "rotate-180" : ""
                    )} />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-text-secondary pl-14">
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
