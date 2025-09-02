import { useTheme } from "../contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "#2A262B" : "#F4F4F4";
  const textColor = theme === "dark" ? "white" : "black";

  return (
    <section
      style={{ backgroundColor: bgColor, color: textColor }}
      className="flex flex-col items-center justify-center min-h-[70vh] p-8 transition-colors duration-300"
    >
    
    </section>
  );
};

export default HeroSection;
