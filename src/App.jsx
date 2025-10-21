import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Project from "./pages/Project/Project.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Archive from "./pages/Archive/Archive.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      <Navigation />
    </>
  );
}
