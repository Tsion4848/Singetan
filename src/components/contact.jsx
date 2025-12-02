"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact({ language }) {
  const translations = {
    en: {
      title: "Get In Touch",
      subtitle: "We'd love to hear from you. Contact us today.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      phoneNumbers: ["+251 912 663 660", "0911752862", "0981800600"],
      emailAddr: "info@singetan.com",
      addresses: [
        "Nifas Silk Lafto Sub-city, Haile Garment, behind CBE Kotari Branch, Addis Ababa",
        "Sheger, Furi Sub-city, Around Jemo 3 Square",
      ],
    },
    am: {
      title: "ከእኛ ጋር ይገናኙ",
      subtitle: "ከእርስዎ ለመስማት እንወዳለን። ዛሬ ያግኙን።",
      phone: "ስልክ",
      email: "ኢሜይል",
      address: "አድራሻ",
      phoneNumbers: ["+251 912 663 660", "0911752862", "0981800600"],
      emailAddr: "info@singetan.com",
      addresses: [
        "ንፋስ ስልክ ላፍቶ ክ/ከተማ፣ ሀይሌ ጋርመንት፣ ከኢትዮጵያ ንግድ ባንክ ኮተሪ ቅርንጫፍ ጀርባ",
        "ሸገር፣ ፉሪ ክፍለ ከተማ፣ ከጀሞ 3 አደባባይ አካባቢ",
      ],
    },
    om: {
      title: "Waliin Quunnamaa",
      subtitle: "Dubbii keessan dhagalamuu barbaadna. Har'a waliin quunnamaa.",
      phone: "Bilbila",
      email: "Imeelii",
      address: "Teessoo",
      phoneNumbers: ["+251 912 663 660", "0911752862", "0981800600"],
      emailAddr: "info@singetan.com",
      addresses: [
        "K/magaalaa Nifas Silk Lafto, Haile Garment, Baankii Daldalaa Itoophiyaa damee Kotari duuba",
        "Shaggar, Kutaa magaalaa Furii, Naannoo Jemo 3 Square",
      ],
    },
  };

  const t = translations[language];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">{t.title}</h2>
          <p className="text-xl text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-900/50 rounded-full text-teal-400 mb-6 mx-auto">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">{t.phone}</h3>
            <div className="text-center text-slate-300 space-y-1">
              {t.phoneNumbers.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-900/50 rounded-full text-blue-400 mb-6 mx-auto">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">{t.email}</h3>
            <p className="text-center text-slate-300">{t.emailAddr}</p>
          </div>

          {/* Address */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition duration-300">
            <div className="flex items-center justify-center w-14 h-14 bg-purple-900/50 rounded-full text-purple-400 mb-6 mx-auto">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">{t.address}</h3>
            <div className="text-center text-slate-300 space-y-4">
              {t.addresses.map((address, idx) => (
                <p key={idx} className="leading-relaxed">
                  {address}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
