// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Homescreen/Home";
import Navbar from "./pages/Home/Navbar";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`w-full ${dark ? "dark" : ""}`}>
      <Router>
        <div>
          <Navbar setDark={setDark} dark={dark} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
