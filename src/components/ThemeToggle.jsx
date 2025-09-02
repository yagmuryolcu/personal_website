import { useTheme } from "../contexts/ThemeContext";
import { Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
        style={{ 
          backgroundColor: theme === "light" ? "#E92577" : "#000000"
        }}
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <span
            className="inline-block h-4 w-4 rounded-full shadow transform transition-transform duration-200 translate-x-6"
            style={{ backgroundColor: "#FFE86E" }}
          />
        ) : (
          <Moon className="absolute top-1/2 transform -translate-y-1/2 left-1 w-4 h-4 transition-all duration-300" 
               style={{ color: "#FFE86E", fill: "#FFE86E" }} />
        )}
      </button>

      <span style={{ color: "#777777", fontFamily: "Inter"  }} className="text-s font-medium uppercase tracking-wide">
        {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
      </span>
    </div>
  );
};

export default ThemeToggle;