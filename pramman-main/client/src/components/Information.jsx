export default function Information() {
  const stats = [
    { id: 1, value: "93M+", description: "Credentials earned and managed" },
    { id: 2, value: "93M+", description: "Credentials earned and managed" },
    { id: 3, value: "93M+", description: "Credentials earned and managed" },
  ];

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* First Section */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white py-12 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Power of the Network
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Pramman is the network of choice where{" "}
            <span className="font-semibold">3,500+</span> certification,
            assessment, and training providers and employers issue their
            credentials. Empower earners to connect and grow through a catalog
            of <span className="font-semibold">90,000+</span> learnings,
            including <span className="font-semibold">95%</span> of the top IT
            certifications.
          </p>
        </div>
      </div>

      {/* Second Section */}
      {/* <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 sm:px-12 lg:px-20 mt-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Digital Credentials & Verified Skills <br /> Transform the Talent
            Marketplace
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90">
            Experience an integrated suite of solutions to accelerate your
            business in the competitive skills-based economy—whether you’re a
            learning or training provider looking for a trusted digital
            credentialing platform, or an employer looking to prepare your
            workforce for the future.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-white text-indigo-600 font-medium text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('/path/to/abstract-pattern.png')] bg-cover bg-center"></div>
      {/* </div> */}
      <div className=" py-16 px-6 sm:px-12 lg:px-20 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Digital Credentials & Verified Skills Transform the Talent
            Marketplace
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-black">
            Experience an integrated suite of solutions to accelerate your
            business in the competitive skills-based economy—whether you’re a
            learning or training provider looking for a trusted digital
            credentialing platform, or an employer looking to prepare your
            workforce for the future.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-white text-orange-600 font-medium text-lg px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      {/* <div className="flex justify-center items-center image-container bg-[url('/background.png')] bg-no-repeat bg-cover bg-center py-12">
        <div className="mt-36 mb-12">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-6">
            The Numbers Don’t Lie
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white shadow-md rounded-lg p-6 text-center border"
                >
                  <h2 className="text-orange-500 text-3xl font-bold">
                    {stat.value}
                  </h2>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 text-white py-16 mt-12 ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">The Numbers Don’t Lie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white text-orange-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-5xl font-extrabold">93M+</span>
                  <p className="mt-2 text-lg font-medium">
                    Credentials earned and managed
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
