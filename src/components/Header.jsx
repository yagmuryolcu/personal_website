import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="flex justify-end items-center gap-4 p-4 bg-primary dark:bg-black text-black dark:text-white">
      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="relative w-14 h-7 rounded-full bg-pink-500 dark:bg-pink-600 transition-colors"
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 bg-yellow-300 rounded-full transition-transform ${
            theme === "dark" ? "translate-x-7" : ""
          }`}
        ></span>
      </button>
      <span className="text-sm font-medium">
        {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
      </span>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="text-pink-600 font-semibold hover:underline"
      >
        {language === "en" ? "TÜRKÇE'YE GEÇ" : "ENGLISH"}
      </button>
    </header>
  );
}
