import { mockPartners } from '../../data/mock';

export function PartnersSection() {
  return (
    <section className="py-24 bg-white border-b border-border-color">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-primary">Đối tác đồng hành</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {mockPartners.map((partner) => (
            <div key={partner.id} className="w-full max-w-[160px] h-20 flex items-center justify-center p-4">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded text-sm text-text-secondary font-medium">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
