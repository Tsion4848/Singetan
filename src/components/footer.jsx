import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer({ language }) {
  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      companyName: "Singetan Business Group",
      companyDesc:
        "Leading innovative business group recognized for excellence, integrity, and sustainable growth.",
      businessLines: "Business Lines",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      followUs: "Follow Us",
      stationery: "Stationery",
      cosmetics: "Cosmetics & Sanitary",
      cafe: "Cafe & Restaurant",
      wholesale: "Wholesale Distribution",
      coffee: "Coffee & Tea Wholesale",
      visionMission: "Vision & Mission",
      services: "Services",
      contact: "Contact",
      address: "Address: Furii, Shaggar, Oromia, Ethiopia",
      email: "Email: info@singetan.com",
      phone: "Phone: +251 912 663 660",
      copyright: `© ${currentYear} Singetan Business Group PLC. All rights reserved.`,
    },
    am: {
      companyName: "ሲንጌታን ንግድ ቡድን",
      companyDesc: "ልህቀት፣ አቋም እና ዘላቂ እድገት ተብለው የሚታወቁ መሪ ፈጠራ ያለው ንግድ ቡድን።",
      businessLines: "ንግድ መስመሮች",
      quickLinks: "ፈጣን ሊንኮች",
      contactInfo: "ግንኙነት መረጃ",
      followUs: "ይከተሉን",
      stationery: "ስታሽነሪ",
      cosmetics: "ኮስሜቲክስ እና ሳኒታሪ",
      cafe: "ካፌ እና ሬስቶራንት",
      wholesale: "ጅምላ ስርጭት",
      coffee: "ቡና እና ሻይ ጅምላ",
      visionMission: "ራዕይ እና ተልዕኮ",
      services: "አገልግሎቶች",
      contact: "ግንኙነት",
      address: "አድራሻ: ፉሪ፣ ሸገር፣ ኦሮሚያ፣ ኢትዮጵያ",
      email: "ኢሜይል: info@singetan.com",
      phone: "ስልክ: +251 912 663 660",
      copyright: `© ${currentYear} ሲንጌታን ንግድ ቡድን ፒ.ኤል.ሲ. ሁሉም መብቶች የተጠበቁ ናቸው።`,
    },
    om: {
      companyName: "Garee Daldalaa Singetan",
      companyDesc:
        "Garee daldalaa kalaqaa fi olaantummaa, qulqullinaa fi guddina itti fufiinsa qabu.",
      businessLines: "Sarara Daldalaa",
      quickLinks: "Liinkii Ariifaa",
      contactInfo: "Odeeffannoo Quunnamaa",
      followUs: "Nu Hordofaa",
      stationery: "Stationery",
      cosmetics: "Cosmetics & Sanitary",
      cafe: "Cafe & Restaurant",
      wholesale: "Gurgurtaa Jimla",
      coffee: "Buna & Shayi Jimla",
      visionMission: "Mul'ata fi Ergama",
      services: "Tajaajiloota",
      contact: "Quunnamaa",
      address: "Teessoo: Furii, Shaggar, Oromiyaa, Itoophiyaa",
      email: "Imeelii: info@singetan.com",
      phone: "Bilbila: +251 912 663 660",
      copyright: `© ${currentYear} Garee Daldalaa Singetan PLC. Midhaan hunduu ni eegamtu.`,
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t.companyName}</h3>
            <p className="text-slate-400 text-sm">{t.companyDesc}</p>
          </div>

          {/* Business Lines */}
          <div>
            <h4 className="font-semibold mb-4">{t.businessLines}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  {t.stationery}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  {t.cosmetics}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  {t.cafe}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  {t.wholesale}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  {t.coffee}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-slate-400 mb-6">
              <li>
                <a href="#vision" className="hover:text-teal-400 transition">
                  {t.visionMission}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition">
                  {t.contact}
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-4">{t.followUs}</h4>
            <div className="flex space-x-4">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition"
              >
                <Facebook size={20} />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition"
              >
                <Twitter size={20} />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition"
              >
                <Linkedin size={20} />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contactInfo}</h4>
            <p className="text-sm text-slate-400 mb-2">
              <span className="block">{t.address}</span>
              <span className="block">{t.email}</span>
              <span className="block">{t.phone}</span>
            </p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
