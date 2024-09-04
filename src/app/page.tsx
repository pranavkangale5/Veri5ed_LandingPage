"use client";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <HeroSection />
        <HomePage />
        <Footer />
      </main>
    </>
  );
}
