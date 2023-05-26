import { useState, useContext } from "react";
import * as usersService from "../../utilities/users-service";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../pages/App'

export default function LoginForm() {

  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // loginForm from google OAuth
  async function responseMessage(response){
      try{
        const user = await usersService.googleSignUp(response);
        console.log(user)
        // make sure that if(user) is a good way to evaluate 
        
        if (user){
            setUser(user)
            navigate('/');
        }
      }catch(error){
        console.log(error)
      }

  }


        /// this is the response from google sign-in:  response.credential ->
  // {
  //   "iss": "https://accounts.google.com",
  //   "nbf": 1684887262,
  //   "aud": "631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com",
  //   "sub": "106260137045428068564",
  //   "email": "bty2023team@gmail.com",
  //   "email_verified": true,
  //   "azp": "631686074418-1le8qmndti40js1ug00u2nmiepgibdpk.apps.googleusercontent.com",
  //   "name": "Better Than Yesterday",
  //   "picture": "https://lh3.googleusercontent.com/a/AGNmyxadTHPxRxHHT2U0t6HHuntwHrQDjK5OGp22Jllc=s96-c",
  //   "given_name": "Better",
  //   "family_name": "Than Yesterday",
  //   "iat": 1684887562,
  //   "exp": 1684891162,
  //   "jti": "9fa8c7351e26d6f3b9e021c2f72854b9cffe2fc9"   
  // }


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
