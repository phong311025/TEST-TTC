export function ImpactJourneySection() {
  const steps = [
    { title: "TRI THỨC", desc: "Khơi dậy tiềm năng" },
    { title: "CƠ HỘI", desc: "Tạo bệ phóng vững chắc" },
    { title: "PHÁT TRIỂN", desc: "Hoàn thiện năng lực" },
    { title: "LAN TỎA", desc: "Đóng góp cho xã hội" }
  ];

  return (
    <section className="py-24 bg-bg-light-green relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="heading-2 text-primary mb-6">Mỗi đóng góp là một cơ hội được mở ra</h2>
          <p className="text-text-secondary text-lg">
            Hành trình của chúng tôi là vòng tuần hoàn của sự sẻ chia, nơi giáo dục là nền tảng để tạo ra những thay đổi bền vững cho thế hệ tương lai.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border-color -translate-y-1/2 z-0">
            <div className="absolute top-0 left-0 h-full bg-gold w-1/2 opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gold flex items-center justify-center font-heading font-bold text-primary text-xl mb-6 shadow-sm">
                  0{idx + 1}
                </div>
                <h4 className="font-heading font-bold text-xl text-primary mb-2">{step.title}</h4>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
