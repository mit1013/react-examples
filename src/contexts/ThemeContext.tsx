import { useContext, createContext, useState, FC, ReactNode } from "react";

type ThemeContextModel = {
  theme: string;
  toggleTheme: () => void;
};

/* use partial to allow context to initialise as an empty object */
export const ThemeContext = createContext<Partial<ThemeContextModel>>({});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
