import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
export default function Helpline() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select");

  const options = [
    "Association",
    "Corporate L&D",
    "Educational Institution",
    "Higher Education",
    "LMS / LXP",
    "Product Certification Provider",
    "Training Provider",
    "Other",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-b from-orange-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="py-12 lg:py-20 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-6 text-5xl font-bold text-center text-gray-800 dark:text-white">
            Request a Demo Now!
          </h2>
          <form
            action="#"
            className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          >
            {/* name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@example.com"
                required
              />
            </div>
            {/* Company */}
            <div className="relative">
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Company Name
              </label>
              <input
                type="name"
                id="name"
                className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your company name"
                required
              />
            </div>
            {/* dropdown */}
            <div className="w-full">
              {/* Label */}
              <label
                htmlFor="industry-dropdown"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Industry<span className="text-red-500">*</span>
              </label>

              {/* Dropdown Button */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer border border-gray-300 rounded-md shadow-sm bg-white px-4 py-2 flex justify-between items-center"
              >
                <span className="text-gray-700">{selectedOption}</span>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <ul className="absolute z-10 mt-2  bg-white border border-gray-200 rounded-md shadow-lg max-h-48  overflow-y-auto">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* next */}

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Leave your message here..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <section className="">
              <div className="flex gap-2 mb-2 translate-x-28">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="bg-orange-500"
                />
                <h5>
                  I have read and accept the{" "}
                  <span className="text-orange-500">Terms&Condition</span>
                </h5>
              </div>
              <div className="flex gap-2 translate-x-28">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="bg-orange-500"
                />
                <h5>
                  I would like to receieve daily newslettesr from{" "}
                  <span className="text-orange-500">Pramman-patra</span>
                </h5>
              </div>
            </section>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-600 transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
