import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const { theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const bgColor = theme === "dark" ? "#2A262B" : "#F4F4F4";
  const textColor = theme === "dark" ? "white" : "black";

  return (
    <header
      style={{ backgroundColor: bgColor, color: textColor }}
      className="p-4 transition-colors duration-300"
    >
      <div className="flex justify-end items-center gap-6">
        {/* Dark/Light Mode Toggle */}
        <ThemeToggle />

        {/* Dil değiştirme butonu */}
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded bg-transparent text-sm font-medium transition-colors duration-300 flex items-center"
        >
          {language === "en" ? (
            <>
              <span
                style={{
                  color: "#EA2678",
                  fontFamily: 'Inter',
                  fontWeight: "600"
                }}
              >
                TÜRKÇE
              </span>
              <span
                style={{
                  color: "#777777",
                  fontFamily: 'Inter',
                  marginLeft: "2px"
                }}
              >
                'YE GEÇ
              </span>
            </>
          ) : (
            <span
              style={{
                color: "#EA2678",
                fontFamily: 'Inter',
                fontWeight: "600"
              }}
            >
              SWITCH TO ENGLISH
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
