import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from "./contexts/LanguageContext";
import data from "./data.js";


function App() {
  return (
   <>
    <ThemeProvider>
      <LanguageProvider>
                <div className="min-h-screen bg-primary dark:bg-black text-black dark:text-white">

        <Header />
        <HeroSection />
                </div>

      </LanguageProvider>
    </ThemeProvider>
   </>
  );
}

export default App;
