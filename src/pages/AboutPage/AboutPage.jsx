import React from "react";

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#FCDEBE] h-screen">
        <div className="flex flex-col">
          <h1 className="flex justify-center font-bold text-5xl text-[#5e5768] py-16">
            About Us
          </h1>
          <div className="flex justify-center rounded-full bg-slate-300 bg-opacity-50 mx-60 px-6 py-10">
            <p className="text-[#5e5768]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
