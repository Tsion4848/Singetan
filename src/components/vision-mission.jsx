export default function VisionMission({ language }) {
  const translations = {
    en: {
      visionTitle: "Our Vision",
      visionText:
        "To be a leading and innovative business group recognized for excellence, integrity, and sustainable growth, empowering our stakeholders and making a positive impact in our community.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver high-quality products and services through efficient management and dedicated teamwork, fostering long-term relationships with clients and partners, while continuously seeking growth and development opportunities.",
    },
    am: {
      visionTitle: "ራዕይ",
      visionText:
        "በላቀ፣ በአቋም እና በዘላቂ እድገት፣ ባለድርሻዎቻችንን በማብቃት እና በማህበረሰባችን ውስጥ አወንታዊ ተፅእኖ በመፍጠር መሪ እና ፈጠራ ያለው የንግድ ቡድን ለመሆን።",
      missionTitle: "ተልዕኮ",
      missionText:
        "ከፍተኛ ጥራት ያላቸውን ምርቶች እና አገልግሎቶችን በብቃት አስተዳደር እና በቡድን ለመስራት ፣ከደንበኞች እና አጋሮች ጋር የረጅም ጊዜ ግንኙነቶችን በማጎልበት ፣የእድገት እና የእድገት እድሎችን ያለማቋረጥ መፈለግ።",
    },
    om: {
      visionTitle: "Mul'ata",
      visionText:
        "Garee daldalaa adda duree fi kalaqaan hojjetamee fi olaantummaa, qulqullinaa fi guddina itti fufiinsa qabu ta'uu, qooda fudhattoota keenya humneessuu fi hawaasa keenya keessatti dhiibbaa gaarii uumuu.",
      missionTitle: "Ergama",
      missionText:
        "Hoggansa gahumsa qabuu fi hojii gareetiin oomishaalee fi tajaajiloota qulqullina olaanaa qaban dhiyeessuu, maamiltootaa fi michoota waliin hariiroo yeroo dheeraa guddisuu, akkasumas carraa guddinaa fi misoomaa itti fufiinsaan barbaaduu.",
    },
  };

  const t = translations[language];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {t.visionTitle}
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {t.missionTitle}
              </h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t.missionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
