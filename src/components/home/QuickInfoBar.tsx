export function QuickInfoBar() {
  const infos = [
    {
      title: "Ngày thành lập",
      value: "03/11/2023"
    },
    {
      title: "Quyết định công nhận",
      value: "886/QĐ-BNV"
    },
    {
      title: "Tên viết tắt",
      value: "DTDF"
    },
    {
      title: "Loại hình hoạt động",
      value: "PHI LỢI NHUẬN"
    }
  ];

  return (
    <section className="w-full bg-white border-y border-[#DFE8E4] py-6 md:py-0 md:h-[80px] relative z-20">
      <div className="container-custom h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full divide-y md:divide-y-0 md:divide-x divide-[#DFE8E4]">
          {infos.map((info, idx) => (
            <div key={idx} className="flex flex-col justify-center px-6 py-4 md:py-0">
              <div className="text-[10px] uppercase font-bold text-text-secondary mb-1">{info.title}</div>
              <div className="text-primary font-bold tracking-wide">{info.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
