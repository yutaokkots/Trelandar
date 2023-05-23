import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { GoogleLogin } from "@react-oauth/google";
import * as usersAPI from "../../utilities/users-api";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const responseMessage = (response) => {
    console.log(response);
    usersAPI.googleLogin(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <form
          className="bg-white bg-opacity-95 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-80"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="font-display flex justify-center font-extrabold text-neutral-500 text-xl pb-5">
            Login
          </h2>
          <label className="block text-neutral-500 font-bold mb-2 pt-2">
            Email
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-neutral-500 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            placeholder="Yuta@gmail.com"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label className="block text-neutral-500 font-bold mb-2 pt-2">
            Password
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-neutral-500 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-4">
            <button
              type="submit"
              className="border bg-white bg-opacity-50 text-white rounded-lg mb-4 py-2 px-4 hover:bg-neutral-300"
            >
              <span className="font-display text-neutral-500">Log In</span>
            </button>
          </div>
          <hr />
          <div className="flex justify-center pt-4">
            <GoogleLogin
              // type="icon"
              shape="circle"
              onSuccess={responseMessage}
              onError={errorMessage}
            />
          </div>
          <div className="flex justify-center pt-3 text-neutral-400">
            <p className="error-message">&nbsp;{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
