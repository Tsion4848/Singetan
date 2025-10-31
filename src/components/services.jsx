export default function Services({ language }) {
  const translations = {
    en: {
      title: "Our Business Lines",
      services: [
        {
          name: "Stationery",
          description: "Premium office and school supplies for all your needs",
          icon: "📝",
        },
        {
          name: "Cosmetics & Sanitary",
          description: "High-quality personal care and sanitary products",
          icon: "💄",
        },
        {
          name: "Cafe & Restaurant",
          description: "Delicious food and beverages in a welcoming atmosphere",
          icon: "☕",
        },
        {
          name: "Wholesale Distribution",
          description: "Groceries - Comprehensive wholesale solutions",
          icon: "📦",
        },
        {
          name: "Coffee & Tea Wholesale",
          description:
            "Premium quality coffee and tea for businesses and retailers",
          icon: "🍵",
        },
      ],
    },
    am: {
      title: "የእኛ ንግድ መስመሮች",
      services: [
        {
          name: "ስታሽነሪ",
          description: "ከፍተኛ ጥራት ያለው ቢሮ እና ትምህርት ቤት አቅርቦቶች",
          icon: "📝",
        },
        {
          name: "ኮስሜቲክስ እና ሳኒታሪ",
          description: "ከፍተኛ ጥራት ያለው ግላዊ እንክብካቤ እና ሳኒታሪ ምርቶች",
          icon: "💄",
        },
        {
          name: "ካፌ እና ሬስቶራንት",
          description: "ምግብ እና መጠጦች በደህና ሁኔታ",
          icon: "☕",
        },
        {
          name: "ጅምላ ስርጭት",
          description: "የመጠጥ ምርቶች ጅምላ - ሁሉን ያካተተ ጅምላ መፍትሄዎች",
          icon: "📦",
        },
        {
          name: "ቡና እና ሻይ ጅምላ",
          description: "ከፍተኛ ጥራት ያለው ቡና እና ሻይ ለንግድ እና ነጋዴዎች",
          icon: "🍵",
        },
      ],
    },
    om: {
      title: "Sarara Daldalaa Keenya",
      services: [
        {
          name: "Stationery",
          description: "Midhaa ofisaa fi barnoota qulqullina gaarii",
          icon: "📝",
        },
        {
          name: "Cosmetics & Sanitary",
          description: "Midhaa midhaa jidha fi sanitary qulqullina olaanaa",
          icon: "💄",
        },
        {
          name: "Cafe & Restaurant",
          description: "Nyaata fi dhugaatii midhaa haala jaalala keessatti",
          icon: "☕",
        },
        {
          name: "Gurgurtaa Jimla",
          description: "Ye metet mirtoch jimla - Furmaata jimla guutuu",
          icon: "📦",
        },
        {
          name: "Buna & Shayi Jimla",
          description:
            "Buna fi shayi qulqullina olaanaa daldaltoota fi gurgurtoota",
          icon: "🍵",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section
      id="services"
      className="py-10 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition transform text-center border-t-4 border-teal-500"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
