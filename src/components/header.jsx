"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    am: {
      home: "ዋና ገጽ",
      about: "ስለ ኛ",
      services: "አገልግሎቶች",
      contact: "ግንኙነት",
    },
    om: {
      home: "Muka",
      about: "Waa'uu Keenya",
      services: "Tajaajiloota",
      contact: "Quunnamtii",
    },
  };

  const t = translations[language];

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center font-bold text-lg">
              SB
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold">Singetan</h1>
              <p className="text-xs text-teal-300">Business Group</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="hover:text-teal-400 transition">
              {t.home}
            </a>
            <a href="#about" className="hover:text-teal-400 transition">
              {t.about}
            </a>
            <a href="#services" className="hover:text-teal-400 transition">
              {t.services}
            </a>
            <a href="#contact" className="hover:text-teal-400 transition">
              {t.contact}
            </a>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-slate-700 text-white px-3 py-2 rounded text-sm border border-teal-400 cursor-pointer"
            >
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
              <option value="om">Afaan Oromo</option>
            </select>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-slate-700 pt-4">
            <a href="#home" className="hover:text-teal-400 transition block">
              {t.home}
            </a>
            <a href="#about" className="hover:text-teal-400 transition block">
              {t.about}
            </a>
            <a
              href="#services"
              className="hover:text-teal-400 transition block"
            >
              {t.services}
            </a>
            <a href="#contact" className="hover:text-teal-400 transition block">
              {t.contact}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
