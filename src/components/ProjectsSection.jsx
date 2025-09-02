import data from "../data.js";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { projectsSection } = data[language];

 const getProjectBg = (index) => {
  if (theme === "dark") {
    if (index === 0) return "bg-[#2D3235]";
    if (index === 1) return "bg-[#495351]";
    return "bg-[#484148]";
  } else {
    if (index === 0) return "bg-[#DDEEFE]";
    if (index === 1) return "bg-[#D9F6F1]";
    return "bg-white";
  }
};
// BURAYA GERİ DÖN !!!

  return (
    <section className="py-16 transition-colors duration-500">
      <h2 className="text-center text-2xl font-bold mb-10">
        {projectsSection.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectsSection.items.map((project, index) => (
          <div
            key={project.id}
            className={`rounded-lg p-6 flex flex-col justify-between transition-colors duration-500 text-gray-800 dark:text-gray-200 ${getProjectBg(
              index
            )}`}
          >
            {/* Başlık & Açıklama */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              {/* Teknoloji Etiketleri */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full shadow text-sm transition-colors
                    ${
                      theme === "dark"
                        ? "bg-[#525252] text-white" 
                    : "bg-[#FFFFFF] text-black"}
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Linkler */}
              <div className="flex justify-between text-sm font-medium mb-6">
                <a href="#" className="hover:underline">
                  {project.githubLink}
                </a>
                <a href="#" className="hover:underline">
                  {project.demoLink}
                </a>
              </div>
            </div>

            {/* Görsel */}
            <div className="mt-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
