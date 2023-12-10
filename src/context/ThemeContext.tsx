import { FC, ReactNode, createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleMode: () => {},
});

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  const toggleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
