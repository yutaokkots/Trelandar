import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { useState } from "react";
import * as usersAPI from "../../utilities/users-api";
import * as usersService from "../../utilities/users-service";
import { AuthContext } from "../../pages/App";

export default function NavBar() {
  const { user, setUser } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id:
        "631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };

  function handleLogout() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav className="flex justify-between items-center bg-[#5e5768] px-6 py-6 h-[8vh] w-[100vw]">
      <div>
        <Link to="/">
          <img
            className="h-10 hover:scale-110"
            src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685126979/trelandar-fcedbecolor_fmv835.png"
          />
        </Link>
      </div>

      <div className="flex items-center mt-2">
        <Link
          className="text-lg font-extrabold text-[#fcdebe] hover:text-[#F3CFA8] pb-2 hover:border-b-2 border-[#fcdebe] transition-all duration-300"
          to="/"
        >
          Dashboard
        </Link>
        &nbsp; &nbsp;
        <Link
          className="text-lg font-extrabold text-[#fcdebe] hover:text-[#F3CFA8] pb-2 hover:border-b-2 border-[#fcdebe] transition-all duration-300"
          to="/about"
        >
          About
        </Link>
        &nbsp; &nbsp;
        <Link
          className={`text-lg font-extrabold text-[#fcdebe] pb-2 ${
            isHovered ? "hover:text-[#F3CFA8]" : ""
          }`}
          onClick={handleLogout}
          to=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <img
              className="h-6"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685129557/logout_copy_dhuta2.png"
            />
          ) : (
            <img
              className="h-6"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685128560/logout_acunb7.png"
            />
          )}
        </Link>
      </div>
    </nav>
  );
}
