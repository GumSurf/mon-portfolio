"use client";

import HeroSection from "@/components/home/hero";
/* import ServicesSection from "@/components/home/Services";
import ProjectsSection from "@/components/home/Projects";
import ContactSection from "@/components/home/Contact"; */

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* GLOBAL BACKGROUND FX (future move → layout.tsx possible) */}
      <div className="relative overflow-hidden">
        
        <main className="mx-auto flex min-h-screen flex-col">

          <HeroSection />

        </main>
      </div>
    </div>
  );
}