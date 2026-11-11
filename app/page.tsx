import MotionProvider from "@/components/providers/MotionProvider";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/Whyus";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <MotionProvider>
      <main className="relative min-h-screen bg-[#050507] text-zinc-100 selection:bg-[#0EA5E9] selection:text-white">
        
        {/* Hluboká modrá záře nahoře na pozadí */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0EA5E9]/10 blur-[160px] pointer-events-none rounded-full" />

        {/* Jemná mřížka přes celé pozadí */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        {/* Samotný obsah webu */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <WhyUs />
          <Work />
          <Process />
          <Contact />
        </div>
      </main>
    </MotionProvider>
  );
}