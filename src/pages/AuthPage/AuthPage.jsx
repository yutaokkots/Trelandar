import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/diw7vmgum/image/upload/v1684882312/wallpaperflare.com_wallpaper_1_copy_arjyft.jpg)",
      }}
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="pr-60">
            <h1 className="bg-gradient-to-r from-neutral-300 via-cyan-100 to-blue-200 bg-clip-text text-transparent text-6xl font-black ">
              Trelander
            </h1>
            <h2 className="flex justify-center mt-10 font-bold text-white text-2xl ">
              <TypeAnimation
                sequence={[
                  "Strength in your Week.",
                  2000,
                  "Sched out your work.",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {show ? (
            <SignUpForm setUser={setUser} />
          ) : (
            <LoginForm setUser={setUser} />
          )}
          <p
            className={`flex justify-center text-white ${show ? "hidden" : ""}`}
          >
            Don't have an account yet?{" "}
            <a className="cursor-pointer" onClick={() => setShow(true)}>
              <span className=" pl-2 text-white hover:underline">Sign Up</span>
            </a>
          </p>
          <div className="flex justify-center">
            {show && (
              <p className="text-white">
                Already have an account?{" "}
                <a className="cursor-pointer" onClick={() => setShow(false)}>
                  <span className="text-white hover:underline">Login </span>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
