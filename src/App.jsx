// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Homescreen/Home";
import Navbar from "./pages/Home/Navbar";
import { useThemeContext } from "./context/contex";
export default function App() {
  const { darkTheme } = useThemeContext();

  return (
    <div className={`w-full ${darkTheme ? "dark" : ""} `}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
