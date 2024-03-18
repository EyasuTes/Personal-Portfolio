import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [roll, setRoll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 70);
    const rolltimer = setTimeout(() => {
      setRoll(true);
    }, 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(rolltimer);
    };
  }, []);
  return (
    <ThemeContext.Provider
      value={{ setRoll, roll, loaded, setLoaded, darkTheme, setDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
