import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";
import { GoogleLogin } from "@react-oauth/google";
import * as usersAPI from "../../utilities/users-api";

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const responseMessage = (response) => {
    console.log(response);
    console.log(response.credential)
    usersAPI.googleLogin(response);

  };

  const errorMessage = (error) => {
    console.log(error);
  };

  // create an error response for when user passwords do not match

  const handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
          const { error, confirm, ...data } = formData;
          console.log(data)
          console.log(formData)
          if (passwordConfirm(formData)){
              const user = await signUp(data);
              setUser(user);
          } else {
            throw new Error('Please use matching passwords')
          }
      } catch (error) {
          setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
      }
    };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  function passwordConfirm(formData) {
    if (formData.password != formData.confirm) {
      return false
    } else {
      return true
    }
  }

  const disable = formData.password !== formData.confirm;

  return (
    <div className="flex justify-center items-center">
      <div className="form-container">
        <form
          className="bg-white shadow-md bg-opacity-95 rounded-lg px-8 pt-6 pb-8 mb-4 w-80"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="font-display flex justify-center font-extrabold text-neutral-500 text-xl pb-5">
            Create Account
          </h2>
          <label className="block text-neutral-500 font-bold mb-2 pt-2">
            Username
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-neutral-500 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="First name last name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="block text-neutral-500 font-bold mb-2 pt-2">
            Email
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-neutral-500 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="email address"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="block text-neutral-500 font-bold mb-2 pt-2">
            Confirm Password
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-neutral-500 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-4">
            <button
              type="submit"
              className="border bg-white bg-opacity-50 text-white rounded-lg mb-4 py-2 px-4 hover:bg-neutral-300"
            >
              <span className="font-display text-neutral-500">Sign Up</span>
            </button>
          </div>
          <hr />
          <div className="flex justify-center pt-4">
            <GoogleLogin
              // type="icon"
              text="signup_with"
              shape="circle"
              onSuccess={responseMessage}
              onError={errorMessage}
            />
          </div>
          <div className="flex justify-center text-neutral-400 pt-3">
            <p className="error-message">&nbsp;{formData.error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
