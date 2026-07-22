import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Attractions from "@/components/sections/Attractions";
import GoKart from "@/components/sections/GoKart";
import Seasonal from "@/components/sections/Seasonal";
import Safety from "@/components/sections/Safety";
import Timeline from "@/components/sections/Timeline";
import Countdown from "@/components/sections/Countdown";
import Contact from "@/components/sections/Contact";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Intro />
          <Attractions />
          <GoKart />
          <Seasonal />
          <Safety />
          <Timeline />
          <Countdown />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
