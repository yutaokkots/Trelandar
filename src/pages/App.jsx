import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Calendar from "./Calendar/Calendar";
import AboutPage from "./AboutPage/AboutPage";
import AuthPage from "./AuthPage/AuthPage";
import LoginForm from "../components/LoginForm/LoginForm";
import * as usersService from "../utilities/users-service";
import Footer from "../components/Footer/Footer";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(usersService.getUser());

  useEffect(() => {
    setUser(usersService.getUser());
  }, []);

  // function updateUser(userState){
  //     setUser(userState)
  //   }

  return (
    <main>
      <AuthContext.Provider value={{ user, setUser }}>
        {user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </>
        ) : (
          <>
            <AuthPage setUser={setUser} />
          </>
        )}
      </AuthContext.Provider>
      <Footer />
    </main>
  );
}

export default App;
