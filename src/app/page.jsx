"use client";

import { useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import VisionMission from "@/components/vision-mission";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [language, setLanguage] = useState("en");

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <VisionMission language={language} />
      <Services language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}
