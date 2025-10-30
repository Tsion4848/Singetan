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
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-teal-300 mb-8 text-balance">
          {t.subtitle}
        </p>
        <button className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105">
          {t.cta}
        </button>
      </div>
    </section>
  );
}
