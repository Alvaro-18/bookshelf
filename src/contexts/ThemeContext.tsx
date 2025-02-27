import {createContext, useState, ReactNode, useEffect} from "react";

enum Theme {
  light = "light",
  dark = "dark",
}

interface ThemeContextType {
  theme: Theme;
  switchTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.light,
  switchTheme: () => {},
});

interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({children}: ThemeContextProviderProps) {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme || Theme.light);

  function switchTheme() {
    theme == "light" ? setTheme(Theme.dark) : setTheme(Theme.light);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
