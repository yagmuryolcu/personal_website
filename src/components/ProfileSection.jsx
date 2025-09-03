import React from 'react';
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import data from '../data.js';

const ProfileSection = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const profileData = data[language].profileSection;

  const bgColor = theme === "dark" ? "#2A262B" : "#F4F4F4";
  const textColor = theme === "dark" ? "white" : "black";
  const cardBgColor =theme === "dark" ? "#525252" : "#FFFFFF";

  const InfoRow = ({ label, value, darkMode }) => (
  <div className="flex justify-between py-3 font-inter">
    <span
      className={`text-sm font-semibold`}
      style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
    >
      {label}
    </span>
    <span
      className={`text-sm font-semibold`}
      style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
    >
      {value}
    </span>
  </div>
);
  return (
    <section 
      className="py-16 px-8 transition-all duration-300 relative"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
       
       
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          {profileData.title}
        </h2>
        
        {/* Profile Content */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto items-start">
          
          {/* Sol taraf - Basic Information */}
          <div className="flex-1 font-playfair">
            <div 
              className="p-8 rounded-2xl shadow-2xl"
              style={{ backgroundColor: cardBgColor }}
            >
              <h3 
                className="text-xl font-bold mb-6 pb-2 "
                style={{
                  color: "#E91E63",
                  borderBottomColor: "#E91E63"
                }}
              >
                {profileData.basicInfo.title}
              </h3>
              
              {/* Basic Information Details */}
              <div className="space-y-1 ">
                {profileData.basicInfo.fields.map((field, index) => (
                  <InfoRow 
                    key={index}
                    label={field.label} 
                    value={field.value} 
                     darkMode={theme === "dark"}

                  />
                ))}
              </div>
            </div>
          </div>
          
           <div className="flex-1">
            <div className="p-8">
              <div className="relative mb-6">
                {/* Mavi rectangular arka plan */}
                <div 
                  className="absolute -left-2 -bottom-1 w-21 h-4 rounded-md"
                  style={{ backgroundColor: "#82BBFF" }}
                ></div>
                {/* Başlık */}
                <h3 className="relative text-xl font-normal font-playfair text-white z-10" style={{ color:  theme === "dark" ?"#D9D9D9" : "#000000" }}>

                  {profileData.aboutMe.title}
                </h3>
              </div>
              
              <p className="leading-relaxed text-base" style={{ color:  theme === "dark" ?"#D9D9D9" : "#000000" }}>
                {profileData.aboutMe.description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;