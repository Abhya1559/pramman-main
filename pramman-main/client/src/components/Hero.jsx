export default function Hero() {
  return (
    <div className="px-4 sm:px-8 relative w-full h-screen bg-gray-100">
      {/* <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto ">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="font-bold text-3xl sm:text-4xl lg:text-6xl">
            <p className="block">A Powerful and Reliable</p>
            <p className="block">Solution for Digital</p>
            <p className="block">Certificates & Badges.</p>
          </div>
          <div className="mt-4 sm:mt-6 lg:mt-8 font-normal text-base sm:text-lg lg:text-[20px] text-gray-500">
            <h2 className="block">
              Do you want to create digital credentials like certificates &
              badges
            </h2>
            <h2 className="block">
              that are secure, easy to access, maintain and share? Praman Patra
              is
            </h2>
            <h2 className="block">what you need.</h2>
          </div>
          <div className="mt-4 sm:mt-6 lg:mt-8">
            <button className="border bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white hover:bg-orange-600">
              Book a demo
            </button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img src={r} alt="Hero Image" className="w-3/4 sm:w-1/2 lg:w-full" />
        </div>
      </div> */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div data-aos="fade-right" className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              A <span className="text-orange-500">Powerful</span> and{" "}
              <span className="text-orange-500">Reliable</span> Solution for{" "}
              <br />
              Digital Certificates & Badges.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Create secure, easy-to-access digital credentials for certificates
              and badges. Seamlessly share and maintain your achievements with
              confidence.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 bg-orange-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
                <a href="/bookdemo"> Book a Demo</a>
              </button>
              <button className="ml-4 px-6 py-3 bg-gray-200 text-gray-700 text-lg font-medium rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                <a href="/about">Learn More</a>
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Path to the uploaded image
                alt="Professional woman with digital badges"
                className="w-[500px] rounded-lg shadow-lg ml-24 hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-10">
              <div className="bg-white rounded-full p-4 shadow-lg border border-gray-200"></div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-10 left-0 transform -translate-x-32 translate-y-16 hover:scale-105 duration-500">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <h3 className="text-sm font-semibold text-gray-700">
                  Verified Digital Credentials
                </h3>
                <p className="text-xs text-gray-500">Trusted Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-orange-400 opacity-10 rounded-full w-64 h-64 absolute top-10 left-10"></div>
          <div className="bg-blue-400 opacity-10 rounded-full w-64 h-64 absolute bottom-10 right-10"></div>
        </div>
      </section>
    </div>
  );
}
