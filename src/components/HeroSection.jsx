import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import data from '../data.js';

const HeroSection = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();   
  const heroData = data[language].heroSection; 

  const bgColor = theme === "dark" ? "#2A262B" : "#F4F4F4";
  const textColor = theme === "dark" ? "white" : "black";

return (
    <section
      style={{ backgroundColor: bgColor, color: textColor }}
      className="relative flex flex-col items-center justify-center min-h-[85vh] p-8 transition-all duration-300 overflow-visible"
    >
      {/* Dekoratif Şekilleri tanımlandırdım*/}
      
      
      {/* Sağ alt - pembe kısım */}
  <div
  className="absolute bottom-40  -right-12 w-40 h-12 rounded-3xl "
  style={{ backgroundColor: "#EA2678" }}
></div>
  
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Sol taraf - Text Content */}
          <div className="flex-1 max-w-2xl space-y-6">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight font-thin">
              {heroData.greeting}
            </h1>
            
            <div className="relative">
      <p 
        className="text-2xl -top-4 lg:text-3xl xl:text-4xl font-medium leading-relaxed font-medium relative z-10"
        style={{ color: textColor}}
      >
        {heroData.intro}
      </p>

      <div 
      className="absolute top-5  -left-3 w-32 h-8 rounded-lg "
      style={{ backgroundColor: "#E91E63" }}
    ></div>
    </div>
            
            {/* CTA Button */}
                  
        <div className="pt-4 font-inter">
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: textColor }}>
            {heroData.cta.beforeFreelancing}
            <span className="font-thin" style={{ color: "#E91E63" }}>
              {heroData.cta.freelancing}
            </span>
            {heroData.cta.betweenText}
            <span className="font-thin" style={{ color: "#E91E63" }}>
              {heroData.cta.services}
            </span>
            {heroData.cta.afterServices}
            <a 
              href={`mailto:${heroData.cta.email}`}
              className="font-thin  hover:underline transition-all duration-300"
              style={{ color: "#E91E63" }}
            >
              {heroData.cta.email}
            </a>
          </p>
        </div>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex gap-5 pt-6">
              {heroData.socials.map((s, i) => (
                <a 
                  key={i} 
                  href={s.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-13 h-13 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ 
                    color: theme === "dark" ? "#FFFFFF": "#3A3A3A" ,
                  }}
                >
                  <img
                    src={new URL(`../assets/${s.logo}`, import.meta.url).href}
                    alt={s.alt_text}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Sağ taraf - Profile Image */}
          <div className="flex-1 flex  -top-5  -left-20 justify-center lg:justify-end relative">
            
            {/* Profil resmi arkasındaki dekoratif şekiller */}
            <div className="relative">
              {/* Ana pembe background shape */}
              <div 
                className="absolute -top-5 -left-5 w-72 h-80 rounded-3xl  "
                style={{ backgroundColor: "#E91E63" }}
              ></div>
              
          
              
              {/* Profile Image */}
              <img
                src={new URL(`../assets/${heroData.profileImage}`, import.meta.url).href}
                alt="profile"
                className="relative   -top-1 -bottom-2 z-10 w-72 h-80 object-cover rounded-3xl shadow-2xl transform transition-transform duration-300"
                style={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
              />
              
             
            </div>
          </div>
        </div>
      </div>
        <div
      className="absolute -bottom-16 right-55 w-32 h-32 rounded-full border-18"
      style={{ 
      
        borderColor:  theme === "dark" ? "#525252" : "#D9D9D9",
        borderBottomColor: "transparent"
      }}
    ></div>
    </section>
  );
};

export default HeroSection;