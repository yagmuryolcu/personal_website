import React from "react";
import data from "../data.js";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";


export default function HeroSection() {
 const { theme } = useTheme();
  const { language } = useLanguage();
  
  const hero = data[language].heroSection;

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-white dark:bg-black text-black dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{hero.greeting}</h1>
      <p className="text-center mb-6">{hero.intro}</p>

      <img
        src={new URL(`../assets/${hero.profileImage}`, import.meta.url).href}
        alt="profile"
        className="w-40 h-40 rounded-full mb-6"
      />

      <div className="flex gap-4 mb-6">
        {hero.socials.map((s, i) => (
          <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
            <img
              src={new URL(`../assets/${s.logo}`, import.meta.url).href}
              alt={s.alt_text}
              className="w-8 h-8"
            />
          </a>
        ))}
      </div>

      <p
        className="text-center"
        dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
      />
    </section>
  );
}
