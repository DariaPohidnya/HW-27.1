import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import "../src/index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header className="header">
        <div className="logo">🌐 My SPA</div>
        <nav className="nav">
          <Link to="/">Головна</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/about">Про мене</Link>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Темна" : "☀️ Світла"}
        </button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
