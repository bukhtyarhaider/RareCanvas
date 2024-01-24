import { createContext, useState } from "react";
import "./main.scss";
import TopBar from "./components/TopBar/TopBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Brands from "./components/Brands/Brands";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <TopBar />
        <HeroSection />
        <Brands />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
