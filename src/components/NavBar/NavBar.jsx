import { Link } from "react-router-dom";
import "./NavBar.css";
import * as usersAPI from '../../utilities/users-api'

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-neutral-600 bg-opacity-50 px-6 py-6">
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

        <button className="text-lg font-extrabold text-white hover:text-neutral-200"
          onClick={() => usersAPI.googleLogin()}>Login with Google</button>

        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          to=""
        >
          Log Out
        </Link>
      </div>
    </nav>
  );
}
