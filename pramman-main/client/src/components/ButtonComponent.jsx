import React, { useRef } from "react";

function ButtonComponent(props) {
  const { children, className, rest } = props;
  // const login = () => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const inputRef = useRef(null);

  //   const handleLogin = () => {
  //     setIsLoggedIn(true);
  //   };

  //   useRef(() => {
  //     if (isLoggedIn && inputRef.current) {
  //       inputRef.current.focus();
  //     }
  //   }, [isLoggedIn]);
  // };
  return (
    <button
      className={`px-8 py-2 rounded-lg w-full mb-4 bg-orange-400 text-white hover:bg-orange-700 hover:text-white flex justify-center items-center font-medium ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
