import { useState } from "react";
import "./App2.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Calendar from "../Calendar/Calendar";
import AboutPage from "../AboutPage/AboutPage";
import AuthPage from "../AuthPage/AuthPage";
import LoginForm from "../../components/LoginForm/LoginForm";

function App() {
  const [user, setUser] = useState();
  return (
    <main>
        <NavBar user={user} setUser={setUser} />
        <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginForm />} />
        </Routes>
    </main>
  );
}

export default App;
