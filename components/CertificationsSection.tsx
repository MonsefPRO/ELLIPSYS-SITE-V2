const CertificationsSection = () => {
  const certifications = [
    { logo: '/6.png' },
    { logo: '/3.jpg' },
    { logo: '/ecolab.png' }
  ];

  return (
    <section className="py-6 md:py-10 bg-white/30 backdrop-blur-md border-y border-slate-100/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24">
          <div className="text-center">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">Certifications & Normes</h2>
            <div className="mt-2 mx-auto w-8 h-0.5 bg-brand-orange-500 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center gap-12 md:gap-20">
            {certifications.map((cert, index) => (
              <div key={index} className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center hover:scale-110 transition-transform duration-500">
                <img src={cert.logo} alt="Certification" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
