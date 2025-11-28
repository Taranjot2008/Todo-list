// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkState, setDarkState] = useState(() => {
    // initialize from localStorage if available
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkState));
  }, [darkState]);

  return (
    <ThemeContext.Provider value={{ darkState, setDarkState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext }