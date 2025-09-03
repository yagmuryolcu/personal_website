import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import data from "../data.js";

export default function Footerection() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const cta = data[language].ctaSection;

  const bgColor = theme === "dark" ? "#484148" : "#FFFFFF";
  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";

  // Link renkleri
  const linkColors = {
    github: theme === "dark" ? "#1769FF" : "#82BBFF",
    blog: theme === "dark" ? "#FFFFFF" : "#0A0A14",
    linkedin: theme === "dark" ? "#0077B5" : "#419CCB",
    email: theme === "dark" ? "#AF0C48" : "#EA2678",
  };
  
  return (
    <section
      className="py-8 md:py-16 px-4 md:px-6 lg:px-12 transition-colors duration-500 font-inter"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex justify-center">
        <div className="max-w-4xl w-full flex ml-0 md:ml-55 flex-col md:flex-row justify-between items-center gap-8 md:gap-12 break-words">
          
          {/* Başlık ve dekoratif kutu */}
          <div className="relative md:w-1/2 flex flex-col items-center md:items-start">
            {/* Başlık */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center md:text-left relative z-10">
              {cta.title}
            </h2>

            {/* Mavi dekoratif şekil title'ın altında */}
            <div
              className="absolute mb-1 mt-4 md:mt-7 ml-0 md:ml-25 w-32 md:w-55 h-3 md:h-4 rounded-xl"
              style={{ backgroundColor: "#82BBFF", zIndex: 0 }}
            ></div>
          </div>

          {/* Sosyal Linkler */}
          <div className="flex flex-col space-y-2 md:w-1/2 items-center md:items-start">
            {cta.socialLinks.map((link, index) => {
              let color = textColor;
              if (link.name.toLowerCase().includes("github")) color = linkColors.github;
              else if (link.name.toLowerCase().includes("blog")) color = linkColors.blog;
              else if (link.name.toLowerCase().includes("linkedin")) color = linkColors.linkedin;
              else if (link.name.toLowerCase().includes("email")) color = linkColors.email;

              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color }}
                  className="transition-colors text-lg md:text-xl hover:underline font-inter font-medium"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}