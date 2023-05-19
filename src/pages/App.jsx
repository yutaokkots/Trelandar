import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Calendar from "./Calendar/Calendar";
import AboutPage from "./AboutPage/AboutPage";
import AuthPage from "./AuthPage/AuthPage";

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<AuthPage />} />

      </Routes>
    </main>
  );
}

export default App;
