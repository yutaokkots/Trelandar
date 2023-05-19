import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import AboutPage from "./AboutPage/AboutPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route />
        <Route /> */}
      </Routes>
    </main>
  );
}

export default App;
