import { ArrowRight } from "lucide-react";

export default function Services({ language }) {
  const translations = {
    en: {
      title: "Our Business Lines",
      subtitle: "Diverse sectors, one standard of excellence.",
      services: [
        {
          name: "Ethio Telecom Partnership",
          description:
            "Exclusive distributor for Telebirr, airtime, SIM cards, and mobile devices.",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", // Tech/Telecom abstract
        },
        {
          name: "Stationery Supplies",
          description:
            "Premium office and school supplies including aesthetic notebooks, pens, and organizers.",
          image:
            "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2073&auto=format&fit=crop", // Pastel Stationery (Matches your image)
        },
        {
          name: "Cosmetics & Sanitary",
          description:
            "High-quality personal care, makeup, and sanitary products for modern needs.",
          image:
            "https://www.finalsu.com/site-upload/site-images/buyuk/1623357321-kozmetik-ve-hijyen-urunleri.jpg", // Cosmetics Flatlay (Matches your image)
        },
        {
          name: "Cafe & Restaurant",
          description:
            "Serving delicious food, burgers, and beverages in a welcoming atmosphere.",
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop", // Burgers/Food (Matches your image)
        },
        {
          name: "Wholesale Distribution",
          description:
            "Comprehensive wholesale solutions for groceries and daily essentials.",
          image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop", // Grocery Cart (Matches your image)
        },
        {
          name: "Coffee & Tea Wholesale",
          description:
            "Export-quality coffee beans and tea blends for businesses and retailers.",
          image:
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop", // Coffee Aesthetic (Matches your image)
        },
      ],
    },
    am: {
      title: "የእኛ ንግድ መስመሮች",
      subtitle: "የተለያዩ ዘርፎች፣ አንድ የጥራት ደረጃ።",
      services: [
        {
          name: "የኢትዮ ቴሌኮም አጋርነት",
          description:
            "እንደ ቴሌብር፣ የአየር ሰዓት፣ ሲም ካርዶች ያሉ የኢትዮ ቴሌኮም ምርቶች ልዩ አከፋፋይ።",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "ስቴሽነሪ",
          description: "ከፍተኛ ጥራት ያለው ቢሮ እና ትምህርት ቤት አቅርቦቶች።",
          image:
            "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2073&auto=format&fit=crop",
        },
        {
          name: "ኮስሞቲክስ እና ሳኒታሪ",
          description: "ከፍተኛ ጥራት ያለው ግላዊ እንክብካቤ እና ሳኒታሪ ምርቶች።",
          image:
            "https://www.finalsu.com/site-upload/site-images/buyuk/1623357321-kozmetik-ve-hijyen-urunleri.jpg",
        },
        {
          name: "ካፌ እና ሬስቶራንት",
          description: "ምግብ እና መጠጦች በደህና ሁኔታ።",
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
        },
        {
          name: "ጅምላ ስርጭት",
          description: "የመጠጥ ምርቶች እና የምግብ ሸቀጦች ጅምላ ስርጭት።",
          image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
        },
        {
          name: "ቡና እና ሻይ ጅምላ",
          description: "ከፍተኛ ጥራት ያለው ቡና እና ሻይ ለንግድ እና ነጋዴዎች።",
          image:
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
        },
      ],
    },
    om: {
      title: "Sarara Daldalaa Keenya",
      subtitle: "Dameewwan garaagaraa, sadarkaa qulqullina tokko.",
      services: [
        {
          name: "Walta'iinsa Itiyo-Telekoom",
          description:
            "Raabsaa addaa oomishaalee Itiyo-Telekoom kanneen akka Telebirr, yeroo bilbilaa, fi kaardii SIM.",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Stationery",
          description: "Midhaa ofisaa fi barnoota qulqullina gaarii.",
          image:
            "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2073&auto=format&fit=crop",
        },
        {
          name: "Cosmetics & Sanitary",
          description: "Midhaa midhaa jidha fi sanitary qulqullina olaanaa.",
          image:
            "https://www.finalsu.com/site-upload/site-images/buyuk/1623357321-kozmetik-ve-hijyen-urunleri.jpg",
        },
        {
          name: "Cafe & Restaurant",
          description: "Nyaata fi dhugaatii midhaa haala jaalala keessatti.",
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
        },
        {
          name: "Gurgurtaa Jimla",
          description: "Ye metet mirtoch jimla - Furmaata jimla guutuu.",
          image:
            "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
        },
        {
          name: "Buna & Shayi Jimla",
          description:
            "Buna fi shayi qulqullina olaanaa daldaltoota fi gurgurtoota.",
          image:
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                {/* <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
