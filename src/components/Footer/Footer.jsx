import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col footer footer-center p-8 bg-[#5e5768]">
      <div className="text-center text-md text-[#fcdebe]">
        <p>Trelander</p>
        <p>Copyright © 2023 - All rights reserved</p>
      </div>
      <div>
        <div className="flex justify-center items-center pt-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="group"
            aria-label="LevelUpLounge github page"
            href="https://github.com/yutaokkots/Trelandar"
          >
            <img
              className="h-10 hover:-translate-y-2"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685476844/github_hkqo9x.png"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
