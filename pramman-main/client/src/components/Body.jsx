import monitor from "../assets/images/monitor.png";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center p-4 sm:p-6">
      {/* <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        <h1>A Comprehensive Digital Credential</h1>
        <h1>Management Software</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-center">
        <div className="p-4 sm:p-6 space-y-6">
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              1
            </span>
            <div>
              <h2 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                Analyze and track
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Monitor views, social media shares, website clicks, and other
                metrics to gauge the impact of digital credentials on your
                learning programs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              2
            </span>
            <div>
              <h2 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                Automate & reduce effort
              </h2>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              3
            </span>
            <div>
              <h2 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                WhiteLabel & customize credentials
              </h2>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              4
            </span>
            <div>
              <h2 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                Enable your recipients to share
              </h2>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-orange-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
              5
            </span>
            <div>
              <h2 className="font-bold text-lg sm:text-2xl lg:text-3xl">
                Integrate with your system
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={monitor}
            alt="Dashboard Display"
            className="w-3/4 sm:w-2/3 lg:w-full object-contain"
          />
        </div>
      </div> */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              A Comprehensive Digital Credential Management Software
            </h2>
            <ul className="space-y-6">
              {[
                {
                  id: 1,
                  title: "Analyze and track",
                  description:
                    "Monitor views, social media shares, website clicks, and other metrics to gauge the impact of digital credentials.",
                },
                {
                  id: 2,
                  title: "Automate & reduce effort",
                  description:
                    "Streamline the process of issuing and managing digital credentials.",
                },
                {
                  id: 3,
                  title: "WhiteLabel & customize credentials",
                  description:
                    "Tailor credentials to your brand with personalized designs and features.",
                },
                {
                  id: 4,
                  title: "Enable your recipients to share",
                  description:
                    "Empower users to share credentials on social platforms with ease.",
                },
                {
                  id: 5,
                  title: "Integrate with your system",
                  description:
                    "Seamlessly integrate credentialing tools into your existing platform.",
                },
              ].map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-4"
                  data-aos="fade-up"
                >
                  <span className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white font-bold rounded-full">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div
              data-aos="fade-left"
              className="relative z-10 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={monitor}
                alt="Digital Credential Dashboard"
                className="w-full"
              />
            </div>
            {/* Background Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-400 opacity-10 rounded-full transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full transform translate-x-20 translate-y-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
