import { Target, Eye } from "lucide-react";

export default function AboutUs({ language }) {
  const translations = {
    en: {
      title: "About Singetan Business Group",
      subtitle: "Building the future of Ethiopian commerce",
      story:
        "Founded in 2017 by Mr. Addisu Katama Jote, Singetan Business Group PLC has grown into a dynamic and diversified company. We are committed to delivering excellence across all our business lines, from essential supplies to lifestyle services. Our foundation is built on integrity, customer satisfaction, and a deep-rooted commitment to sustainable growth within our community.",
      visionTitle: "Our Vision",
      visionText:
        "To be a leading and innovative business group recognized for excellence, integrity, and sustainable growth, empowering our stakeholders and making a positive impact.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver high-quality products and services through efficient management and dedicated teamwork, fostering long-term relationships with clients and partners.",
    },
    am: {
      title: "ስለ ሲንጌታን ንግድ ቡድን",
      subtitle: "የኢትዮጵያን የንግድ የወደፊት ጊዜ መገንባት",
      story:
        "በ2017 በአቶ አዲሱ ከተማ ጆቴ የተመሰረተው ሲንጌታን ቢዝነስ ግሩፕ ኃ/የተ/የግ/ማህበር ወደ ተለዋዋጭ እና የተለያየ ኩባንያ አድጓል። ከቢሮ እቃዎች እስከ የህይወት ዘይቤ አገልግሎቶች ድረስ በሁሉም የንግድ መስመሮቻችን የላቀ ደረጃን ለማድረስ ቁርጠኞች ነን።",
      visionTitle: "ራዕይ",
      visionText:
        "በላቀ፣ በአቋም እና በዘላቂ እድገት፣ ባለድርሻዎቻችንን በማብቃት እና በማህበረሰባችን ውስጥ አወንታዊ ተፅእኖ በመፍጠር መሪ መሆን።",
      missionTitle: "ተልዕኮ",
      missionText:
        "ከፍተኛ ጥራት ያላቸውን ምርቶች እና አገልግሎቶችን በብቃት አስተዳደር እና በቡድን ለመስራት፣ ከደንበኞች እና አጋሮች ጋር የረጅም ጊዜ ግንኙነቶችን በማጎልበት።",
    },
    om: {
      title: "Waa'ee Garee Daldalaa Singetan",
      subtitle: "Gara fuulduraa daldala Itoophiyaa ijaaruu",
      story:
        "Bara 2017tti Obbo Addisuu Katamaa Joteetiin, Garee Daldalaa Singetan PLC gara dhaabbata dinamikii fi garaagaraatti guddateera. Sarara daldalaa keenya hunda keessatti, meeshaalee barbaachisoo irraa kaasee hanga tajaajila jireenyaatti, olaantummaa fiduuf kutannoo qabna.",
      visionTitle: "Mul'ata",
      visionText:
        "Garee daldalaa adda duree fi kalaqaan hojjetamee fi olaantummaa, qulqullinaa fi guddina itti fufiinsa qabu ta'uu.",
      missionTitle: "Ergama",
      missionText:
        "Hoggansa gahumsa qabuu fi hojii gareetiin oomishaalee fi tajaajiloota qulqullina olaanaa qaban dhiyeessuu.",
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full z-0 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-0 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
              alt="Office Meeting"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-8 -left-8 z-20 bg-white p-6 rounded-xl shadow-xl border-l-4 border-teal-500 hidden md:block">
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">
                Established
              </p>
              <p className="text-4xl font-bold text-slate-900">2017</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <span className="text-teal-600 font-bold tracking-wide uppercase text-sm">
              {t.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t.story}</p>
          </div>
        </div>

        {/* Vision & Mission - Emphasized Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card - Teal Theme */}
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 lg:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{t.visionTitle}</h3>
              <p className="text-teal-50 text-lg leading-relaxed font-medium">
                {t.visionText}
              </p>
            </div>
          </div>

          {/* Mission Card - Dark Slate Theme */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 lg:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <Target className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{t.missionTitle}</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                {t.missionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
