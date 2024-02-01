import { createContext, useState } from "react";
import "./main.scss";
import TopBar from "./components/TopBar/TopBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Brands from "./components/Brands/Brands";
import FancyDrop from "./components/FancyDrop/FancyDrop";
import CreateNFT from "./components/CreateNFT/CreateNFT";
import Creators from "./components/Creators/Creators";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "./components/Footer/Footer";
import { gradientBlueBG, gradientPurpleBG } from "./assets";
import LazyLoad from "react-lazy-load";

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
        <FancyDrop />
        <CreateNFT />
        <Creators />
        <JoinUs />
        <Footer />

        <LazyLoad className="gradientPurpleBG">
          <img src={gradientPurpleBG} alt="gradientPurpleBG" />
        </LazyLoad>

        <LazyLoad className="gradientBlueBG">
          <img src={gradientBlueBG} alt="gradientBlueBG" />
        </LazyLoad>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
