import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { usePortfolioData } from "../hooks/usePortfolioData";

const SkillsSection = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { data } = usePortfolioData();
const skillsData = data?.[language]?.skillsSection;

  const bgColor = theme === "dark" ? "#484148" : "#FFFFFF";
  const textColor = theme === "dark" ? "white" : "black";


  const skillColors = [
        "#ffffffff", // Java
    "#F7DF1E", // JavaScript - Sarı
    "#ffffffff  ", // React - Koyu gri/siyah
    "#9864edff", // Redux - Mor
    "#ffffffff", // PHP
    "#1689d6ff", // VS Code - Mavi
    "#000000ff" , // Figma - Siyah
    "#000000ff ", //tailwind Koyu gri/siyah
    "#ffffffff", // Postman
    "#3ea5eaff", // sql
    "#763891 ", //c#
    "#ffffffff", // Python


  ];

  return (
    <section 
      className="py-16 px-8 transition-all duration-300 relative overflow-hidden"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
        
<div
  className="absolute -top-16 right-55 w-32 h-32 rounded-full "
  style={{
    borderTopColor: theme === "dark" ? "#525252" : "#D9D9D9",
    borderRightColor: theme === "dark" ? "#525252" : "#D9D9D9",
    borderLeftColor: theme === "dark" ? "#525252" : "#D9D9D9",
    borderBottomColor: theme === "dark" ? "#525252" : "#D9D9D9",
    borderWidth: "18px",
    borderStyle: "solid",
  }}
></div>
 
      <div className="container mx-auto max-w-6xl mb-20">
        {/* Başlık kısmı */}
        <h2 className="text-4xl lg:text-5xl font-medium font-inter text-center mb-18">
          {skillsData.title}
        </h2>
                      {/*  her skill için kart oluşturdum*/}

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-15">
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
                className="text-sm lg:text-base font-medium text-center break-words"
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
        className="absolute bottom-14 -left-12 w-32 h-12 rounded-3xl "
        style={{ backgroundColor: "#525252" }}
      ></div>
      <div 
      className="absolute -bottom-16 -right-17 w-32 h-32 rounded-full border-18"
        style={{ 
          borderColor: "#E91E63",
          backgroundColor: "transparent"
        }}
      ></div>
    </section>
  );
};

export default SkillsSection;