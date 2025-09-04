import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from "./contexts/LanguageContext";
import data from "./data.js";
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
   <>
    <ThemeProvider>
      <LanguageProvider>
         <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
                <div className=" relative min-h-screen bg-primary dark:bg-black text-black dark:text-white">
        
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProfileSection/>
        <ProjectsSection/>
        <FooterSection/>
                </div>

      </LanguageProvider>
    </ThemeProvider>
   </>
  );
}

export default App;
