import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AboutUs from "./components/about";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <AboutUs language={language} />
      {/* Note: I removed VisionMission here because it is now inside AboutUs for better layout */}
      <Services language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}

export default App;
