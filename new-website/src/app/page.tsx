"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurrentStatus from "@/components/CurrentStatus";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Separator from "@/components/Separator";

type Theme = {
  primary: string;
  secondary: string;
  background: string;
};

const DEFAULT_THEME: Theme = {
  primary: "#6B7280",
  secondary: "#4B5563", 
  background: "#1F2937"
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const saved = localStorage.getItem("pokemonTheme");
    if (saved) {
      try {
        setTheme(JSON.parse(saved));
      } catch {
        localStorage.removeItem("pokemonTheme");
      }
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("pokemonTheme", JSON.stringify(newTheme));
  };

  const handleHomeClick = () => {
    // For now, just scroll to top - can be expanded later
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-500 text-white"
      style={{ backgroundColor: theme.background }}
    >
      <Header 
        onHomeClick={handleHomeClick} 
        onThemeChange={handleThemeChange}
        currentTheme={theme}
      />
      
      <Hero />
      <Separator />
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