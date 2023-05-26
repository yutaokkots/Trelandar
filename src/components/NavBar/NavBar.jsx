import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext } from 'react'
import * as usersAPI from "../../utilities/users-api";
import * as usersService from '../../utilities/users-service'
import { AuthContext } from '../../pages/App'

export default function NavBar() {
  const { user, setUser } = useContext(AuthContext)

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

  function handleLogout(){
      usersService.logOut()
      setUser(null)
  }

  return (
    <nav className="flex justify-between bg-[#928779] px-6 py-6 h-[8vh] w-[100vw]">
      <div>
        <a href="/">
          <img className="h-8" src="" />
        </a>
      </div>

      <div>
        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/"
        >
          Dashboard
        </Link>
        &nbsp; &nbsp;
        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/about"
        >
          About
        </Link>
        &nbsp; &nbsp;
        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/login"
        >
          Log in
        </Link>
        &nbsp; &nbsp;
        {/* <button className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/auth/login"
          onClick={() => usersAPI.googleLogin()}>Login with Google</button> */}
        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/auth/google"
        >
          LOG IN
        </Link>
        &nbsp; &nbsp;
        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          onClick={handleLogout}
          to=""
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}
