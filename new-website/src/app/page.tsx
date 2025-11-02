"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurrentStatus from "@/components/CurrentStatus";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <Hero />
      <CurrentStatus />
      <Separator />
      <Achievements />
      <Separator />
      <Projects />
      <Separator />
      <Writing />
    </div>
  );
}
