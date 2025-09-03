import data from "../data.js";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { projectsSection } = data[language];

  const getProjectBg = (index) => {
    if (theme === "dark") {
      if (index === 0) return "#2D3235";
      if (index === 1) return "#495351";
      return "#484148";
    } else {
      if (index === 0) return "#DDEEFE";
      if (index === 1) return "#D9F6F1";
      return "white";
    }
  };

  const sectionBgColor = theme === "dark" ? "#484148" : "#FFFFFF";
  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <section
      className="py-16 transition-colors duration-500 relative overflow-hidden "
      style={{ backgroundColor: sectionBgColor, color: textColor }}
    >
      <div className="px-16  ">
        <h2 className="text-center  font-medium font-inter text-5xl font-bold mb-10" style={{ color: textColor }}>
          {projectsSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {projectsSection.items.map((project, index) => (
            <div
              key={project.id}
              className="rounded-lg px-8 py-5 flex flex-col justify-between transition-colors duration-500 min-h-[580px] h-full"
              style={{
                backgroundColor: getProjectBg(index),
                color: textColor,
              }}
            >
              {/* Başlık & Açıklama */}
              <div>
                <h3 className="text-3xl mb-7 mt-8 font-semibold mb-2" style={{ color: textColor }}>
                  {project.title}
                </h3>
                <p className="text-2xl font-inter font-normal mb-7"   style={{ color: textColor, maxWidth: '490px' }}
>
                  {project.description}
                </p>
                
                {/* Teknoloji Etiketleri */}
                <div className="flex flex-wrap gap-3 mb-10 mt-8 justify-start " style={{ maxWidth: '280px' }}>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full font-playfair font-bold text-l tracking-[0.05em] transition-colors inline-block whitespace-nowrap"
                      style={{
                        backgroundColor: theme === "dark" ? "#525252" : "#FFFFFF",
                        color: theme === "dark" ? "#FFFFFF" : "#000000",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link kısmı */}
                <div className="flex justify-between text-xl font-semibold mb-6  md:mb-6 md:text-xl">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline" 
                    style={{ color: textColor }}
                  >
                    {project.githubLink}
                  </a>
                  <a 
                    href={project.appUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline" 
                    style={{ color: textColor }}
                  >
                    {project.demoLink}
                  </a>
                </div>
              </div>

              {/* Laptop Görseli */}
              <div className="relative -mb-8 md:-mb-16 -mx-4 md:-mx-8 mt-2">
                <img
                  src={new URL(`../assets/${projectsSection.compimage}`, import.meta.url).href}
                  alt="Computer mockup"
                  className="w-full h-auto"
                />

                <div className="absolute top-[5%] left-[14%] w-[72%] h-[78%] overflow-hidden rounded-sm">
                  <img
                    src={new URL(`../assets/${project.image}`, import.meta.url).href}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      console.error(`Proje resmi yüklenemedi: ${project.image}`);
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}