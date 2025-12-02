export default function Hero({ language }) {
  const translations = {
    en: {
      title: "Singetan Business Group PLC",
      subtitle: "Excellence, Integrity & Sustainable Growth",
      cta: "Explore Our Services",
    },
    am: {
      title: "ሲንጌታን ንግድ ቡድን ኃ.የተ.የግ.ማህ",
      subtitle: "ልህቀት፣ አቋም እና ዘላቂ እድገት",
      cta: "አገልግሎቶቻችን ይመልከቱ",
    },
    om: {
      title: "Garee Daldalaa Singetan PLC",
      subtitle: "Qulqullinaa, Amanaa fi Guddina Itti Fufiinsa",
      cta: "Tajaajiloota Keenya Ilaalaa",
    },
  };

  const t = translations[language];

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Business Skyscraper"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-balance tracking-tight drop-shadow-lg">
            {t.title}
          </h1>
          <p className="text-xl md:text-3xl text-teal-100 mb-10 text-balance font-light">
            {t.subtitle}
          </p>
          <a
            href="#services"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 shadow-lg border border-teal-400/30 backdrop-blur-sm"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
