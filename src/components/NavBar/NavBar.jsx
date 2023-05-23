import { Link } from "react-router-dom";
import "./NavBar.css";
import * as usersAPI from '../../utilities/users-api'
import { GoogleLogin } from '@react-oauth/google';


export default function NavBar() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
  }

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

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

        {/* <button className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/auth/login"
          onClick={() => usersAPI.googleLogin()}>Login with Google</button> */}

        <Link
          className="text-lg font-extrabold text-white hover:text-neutral-200"
          to="/auth/google"
          >LOG IN</Link>

          {/* <>
          <script src="https://accounts.google.com/gsi/client" async defer></script>
            <div id="g_id_onload"
              data-client_id="631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com"
              data-login_uri="http://localhost:5173"
              data-auto_prompt="false">
            </div>
            <div className="g_id_signin"
              data-type="standard"
              data-size="large"
              data-theme="outline"
              data-text="sign_in_with"
              data-shape="rectangular"
              data-logo_alignment="left">
            </div>
          </> */}

          {/* <GoogleLogin /> */}
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

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
