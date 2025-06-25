import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function ThemeProvider({ children }) {
  const [primaryColor, setPrimaryColorState] = useState("#2a5751");

  useEffect(() => {
    const saved = localStorage.getItem("primaryColor");
    if (saved) setPrimaryColorState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--primary-hover", adjustHover(primaryColor));
    document.documentElement.style.setProperty("--primary-foreground", getTextColor(primaryColor));
  }, [primaryColor]);

  const setPrimaryColor = (color) => {
    setPrimaryColorState(color);
    localStorage.setItem("primaryColor", color);
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

// auto adjust the hovers base on the picked color
function adjustHover(hex) {
  const amt = 40;
  const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.slice(1).substr(i, 2), 16));
  return (
    "#" +
    [r, g, b]
      .map(x => Math.max(0, x - amt).toString(16).padStart(2, "0"))
      .join("")
  );
}

// auto adjust the text color base on the picked color
function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
}

export { ThemeProvider, useTheme };
