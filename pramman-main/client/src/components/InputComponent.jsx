import React, { useState, useEffect, useRef } from "react";
// import { EyeCloseIcon, EyeIcon } from "../lib/icons";
import {FaEye as EyeIcon, FaEyeSlash as EyeCloseIcon} from "react-icons/fa"

export default function InputComponent(props) {
  const { label, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  function handleVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex flex-col items-start">
      <label htmlFor={rest.id} className="text-start text-lg font-normal mb-2">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={rest.id}
          type={
            rest.type === "password" && showPassword
              ? "text"
              : rest.type || "text"
          }
          placeholder={rest.placeholder}
          className={`w-full px-4 py-2 border hover:border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${rest.className}`}
          value={rest.value}
          onChange={rest.onChange}
        />
        {rest.type == "password" && (
          <TogglePasswordInput
            visibility={showPassword}
            onClick={handleVisibility}
          />
        )}
      </div>
    </div>
  );
}

const TogglePasswordInput = (props) => {
  const { visibility, onClick } = props;
  return (
    <div onClick={onClick} className="cursor-pointer">
      {visibility ? (
        <EyeCloseIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none" />
      ) : (
        <EyeIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none" />
      )}
    </div>
  );
};
