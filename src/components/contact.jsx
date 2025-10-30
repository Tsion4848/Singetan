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
      phoneNum: "+251 912 663 660",
      emailAddr: "info@singetan.com",
      addressText: "Furii, Shaggar, Oromia, Ethiopia",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message",
      sendBtn: "Send Message",
      successMsg: "Thank you! Your message has been sent successfully.",
    },
    am: {
      title: "ከእኛ ጋር ይገናኙ",
      subtitle: "ከእርስዎ ሰማ ለመስማት እንወዳለን። ዛሬ ያግኙን።",
      phone: "ስልክ",
      email: "ኢሜይል",
      address: "አድራሻ",
      phoneNum: "+251 912 663 660",
      emailAddr: "info@singetan.com",
      addressText: "ፉሪ፣ ሸገር፣ ኦሮሚያ፣ ኢትዮጵያ",
      nameLabel: "ስም",
      namePlaceholder: "ስምዎ",
      emailLabel: "ኢሜይል",
      emailPlaceholder: "your@email.com",
      messageLabel: "መልእክት",
      messagePlaceholder: "መልእክትዎ",
      sendBtn: "መልእክት ላክ",
      successMsg: "አመሰግናለሁ! መልእክትዎ በተሳካ ሁኔታ ተልኩ።",
    },
    om: {
      title: "Waliin Quunnamaa",
      subtitle: "Dubbii keessan dhagalamuu barbaadna. Har'a waliin quunnamaa.",
      phone: "Bilbila",
      email: "Imeelii",
      address: "Teessoo",
      phoneNum: "+251 912 663 660",
      emailAddr: "info@singetan.com",
      addressText: "Furii, Shaggar, Oromiyaa, Itoophiyaa",
      nameLabel: "Maqaa",
      namePlaceholder: "Maqaa keessan",
      emailLabel: "Imeelii",
      emailPlaceholder: "your@email.com",
      messageLabel: "Ergaa",
      messagePlaceholder: "Ergaa keessan",
      sendBtn: "Ergaa Ergi",
      successMsg: "Galatasii! Ergaan keessan guutummaatti ergamee jira.",
    },
  };

  const t = translations[language];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-xl text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  {t.phone}
                </h3>
                <p className="mt-2 text-slate-600">{t.phoneNum}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  {t.email}
                </h3>
                <p className="mt-2 text-slate-600">{t.emailAddr}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  {t.address}
                </h3>
                <p className="mt-2 text-slate-600">{t.addressText}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-900"
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-900"
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-900"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                {t.sendBtn}
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  {t.successMsg}
                </div>
              )}
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
