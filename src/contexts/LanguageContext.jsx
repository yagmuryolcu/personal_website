import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "tr" : "en";

      // dile göre toast mesajı
      const message =
        newLang === "tr"
          ? "Tebrikler! Diliniz Türkçe olarak değiştirildi !"
          : "Congratulations! Your language has been changed to English !";
toast(message, {
  position: "top-left",
  autoClose: 3000,
  pauseOnHover: true,
 style: {
          backgroundColor: "#fbf6f8ff",            
          color: "#000000",                     
          fontWeight: "500",
        },
  progressStyle: {
    background: "#EA2678", 
  },
});
     
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
