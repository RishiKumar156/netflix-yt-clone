import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block  w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
      <div className="fixed top-0 w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[550px] rounded-sm mx-auto bg-black/75 text-white">
          <div className="max-w-[350px] mx-auto py-16">
            <h1 className="font-semibold text-2xl">Sign In</h1>
            {error ? (
              <p className="text-white bg-red-500 font-semibold text-sm p-2 w-full rounded-sm my-2">
                {error}
              </p>
            ) : null}
            <form
              onSubmit={LoginUser}
              className="flex flex-col w-full h-full py-6 justify-evenly"
            >
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="p-3 my-2 rounded-sm bg-gray-700"
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-3 my-2 rounded-sm bg-gray-700"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
              />
              <button className="bg-red-600 py-3 my-6 font-semibold text-white rounded-sm">
                Sign In
              </button>
              <div className="flex justify-between text-gray-600 ">
                <p className="mr-2">
                  <input type="checkbox" /> Remember Me
                </p>
                <p>Need Help ?</p>
              </div>
              <p className="py-8">
                {" "}
                <span className="text-sm text-gray-600 mr-2">
                  Already subscribed to Netflix ?
                </span>{" "}
                <Link to={"/signUp"}>Sing Up</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
