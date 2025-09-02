import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import data from '../data.js';

const SkillsSection = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const skillsData = data[language].skillsSection;

  const bgColor = theme === "dark" ? "#484148" : "#FFFFFF";
  const textColor = theme === "dark" ? "white" : "black";


  const skillColors = [
    "#F7DF1E", // JavaScript - Sarı
    "#0f0f0fee", // React - Koyu gri/siyah
    "#9864edff", // Redux - Mor
    "#000000ff", // Node - Yeşil
    "#1689d6ff", // VS Code - Mavi
    "#000000ff"  // Figma - Siyah
  ];

  return (
    <section 
      className="py-16 px-8 transition-all duration-300 relative"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
        <div
  className="absolute -top-16 right-55 w-32 h-32 rounded-full border-18 "
  style={{ 
     borderColor:  theme === "dark" ? "#525252" : "#D9D9D9",
    borderTopColor: "transparent"
  }}
></div>
 
      <div className="container mx-auto max-w-6xl">
        {/* Başlık kısmı */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          {skillsData.title}
        </h2>
                      {/*  her skill için kart oluşturdum*/}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skillsData.skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* skill ksımının arka plan renkleri*/}
              <div 
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-3xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                style={{ backgroundColor: skillColors[index] }}
              >
                <img
                  src={new URL(`../assets/${skill.icon}`, import.meta.url).href}
                  alt={skill.name}
                  className="w-14 h-14 lg:w-18 lg:h-18 object-contain"
                  onError={(e) => {
                    console.log(`Image not found: ${skill.icon}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Skill Name */}
              <span 
                className="text-sm lg:text-base font-medium text-center"
                style={{ color: textColor }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
        {/* sol alttaki şekil */}
      <div
        className="absolute bottom-5 -left-12 w-30 h-10 rounded-3xl "
        style={{ backgroundColor: "#525252" }}
      ></div>
    </section>
  );
};

export default SkillsSection;