import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Calendar from "./Calendar/Calendar";
import AboutPage from "./AboutPage/AboutPage";
import AuthPage from "./AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState();
  return (
    <main>
      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
