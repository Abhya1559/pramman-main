import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Helpline() {
  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-b from-orange-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="py-12 lg:py-20 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-6 text-5xl font-bold text-center text-gray-800 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-10 lg:mb-14 text-lg text-center text-gray-600 dark:text-gray-400">
            Need help? Have feedback? We're here to assist you! Drop us a
            message, and we'll get back to you as soon as possible.
          </p>
          <form
            action="#"
            className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          >
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

            {/* Subject */}
            <div className="relative">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="How can we assist you?"
                required
              />
            </div>

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
