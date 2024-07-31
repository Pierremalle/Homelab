import { createContext, useState } from "react";
import { useEffect } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`app ${isDarkMode ? "dark" : ""}`}>{children}</div>
    </DarkModeContext.Provider>
  );
}
