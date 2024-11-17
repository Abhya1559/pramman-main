import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InputComponent from "../InputComponent";
import { Link } from "react-router-dom";
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formErrors, setFormErrors] = useState({});

  // const form_errors = {
  //   name: false,
  //   email: false,
  //   password: false,
  // }

  useEffect(() => {
    const errors = {};

    if (password !== confirmPassword) {
      errors.password = "Passwords don't match";
    }

    setFormErrors(errors);
  }, [password, confirmPassword]);

  return (
    <div className="min-w-80">
      <h1 className="text-center pb-3 mb-2 border-b text-xl font-semibold ">
        Welcome to Pramman Patra
      </h1>
      <form action="" className="space-y-2">
        <InputComponent
          id="name"
          type="name"
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <InputComponent
          id="confirm-password"
          type="password"
          label="Confirm Password"
          placeholder="Enter your password again"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {formErrors.password && (
          <p className="text-red-500">{formErrors.password}</p>
        )}
        <ButtonComponent>Register</ButtonComponent>

        <p className="flex justify-center text-center">
          Already have an account?
          <Link
            to="/auth/login"
            className="px-2 underline text-orange-400 hover:text-blue-500"
          >
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
}
