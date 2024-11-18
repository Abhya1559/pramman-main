import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="scroll-smooth bg-white px-4 py-4 shadow top-0 sticky backdrop-blur-lg backdrop-filter bg-opacity-30 z-[999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/">Pramman-Patra</a>
        </div>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 text-gray-800 font-medium absolute md:relative md:flex-row md:top-0 top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="md:inline-block text-center p-2 md:p-0">
            <a href="/" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li className="md:inline-block text-center p-2 md:p-0">
            <a href="/about" className="hover:text-gray-500">
              About
            </a>
          </li>
          <li className="md:inline-block text-center p-2 md:p-0">
            <a href="/pricing" className="hover:text-gray-500">
              Pricing
            </a>
          </li>
          <li className="md:inline-block text-center p-2 md:p-0">
            <a href="/blog" className="hover:text-gray-500">
              Blog
            </a>
          </li>
          <li className="md:inline-block text-center p-2 md:p-0">
            <a href="/bookdemo" className="hover:text-gray-500">
              Request a demo
            </a>
          </li>
        </ul>

        {/* Right: Button */}
        <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </nav>
  );
}
