import { createContext, useEffect, useState } from "react";
import "./main.scss";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import { gradientBlueBG, gradientPurpleBG } from "./assets";
import LazyLoad from "react-lazy-load";
import { Route, Routes, useLocation } from "react-router-dom";
import Router from "./Router";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <TopBar />
                <Router />
                <Footer />
              </>
            }
          />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Home />} />
        </Routes>

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
