import myImage from "../assets/images/6333040.jpg";
import { Outlet } from "react-router-dom";

export default function AuthComponent() {
  return (
    <div className="flex min-h-screen">
      {/* Left Part */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg hover:shadow-slate-600">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center text-white p-8">
        <img
          src={myImage}
          alt="Heyy Welcome to my login page"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
