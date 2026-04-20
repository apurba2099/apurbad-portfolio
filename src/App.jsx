import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Project from "./pages/Project/Project.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Archive from "./pages/Archive/Archive.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { useTheme } from "./context/ThemeContext.jsx";
import "./index.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <i className="fa-solid fa-sun"></i>
      ) : (
        <i className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      <Navigation />
    </ThemeProvider>
  );
}
