import React, { useState } from "react";

// import { GitIcon, GoogleIcon } from "../lib/icons";
import { Link, useNavigate } from "react-router-dom";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Email", email);
    console.log("Password", password);

    try {
      const response = await fetch("http://127.0.0.1:5000", {
        method: "POST",
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <p className="text-3xl font-bold text-center ">
        Hii,Welcome to Praman Patra
      </p>
      <InputComponent
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
        id="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2 " />
          <label htmlFor="rememberMe" className="m-1">
            Remember me
          </label>
        </div>
        <label
          htmlFor="forgotPassword"
          className="cursor-pointer text-orange-400 hover:text-blue-500"
        >
          Forgot Password?
        </label>
      </div>
      <ButtonComponent>Login</ButtonComponent>
      <div className="flex justify-center">
        {/* <GoogleIcon className="w-8 " />
        <GitIcon className="w-8" /> */}
      </div>

      <p className="flex justify-center text-center">
        Don't have an account?
        <Link
          to="/auth/register"
          className="px-2 underline text-orange-400 hover:text-blue-500"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
