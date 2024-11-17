import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import founder from "../assets/images/founders.jpg";
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      {/* Header Section */}
      <div className="bg-orange-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold bg-opacity-10">
          About Pramman-Patra
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We are transforming the way certificates are managed. With
          Pramman-Patra, your certificates are secure, easily accessible, and
          never misplaced again.
        </p>
      </div>

      {/* Company Journey Section */}
      <div className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-col space-y-8">
            {/* Left to right */}
            <div className="flex items-center justify-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <span>2021</span>
              </div>
              <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="font-semibold">Founded Pramman-Patra</h3>
                <p className="text-gray-600">
                  Started with a mission to digitize certificates and make them
                  accessible online.
                </p>
              </div>
              <div className="invisible w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <span>2021</span>
              </div>
            </div>

            {/* Right to left */}
            <div className="flex items-center justify-start space-x-4">
              <div className="invisible w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <span>2022</span>
              </div>
              <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="font-semibold">Launched Platform</h3>
                <p className="text-gray-600">
                  Introduced the platform for schools, organizations, and
                  businesses to issue digital certificates.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {/* Main container */}
        <div className="flex flex-col lg:flex-row items-center bg-white p-8 lg:p-16 gap-8 rounded-lg shadow-lg max-w-5xl">
          {/* Left: Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While in college, my friend Mausam and I faced a common
              problem—losing important certificates. Whether it was for
              graduation or achievements, physical certificates were often
              misplaced or damaged. Frustrated by this, we realized there had to
              be a better solution.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We came up with the idea for Pramman-Patra, a platform that
              securely stores certificates online, ensuring they are always
              accessible and never lost. Our goal is to help institutions,
              companies, and individuals manage certificates more efficiently
              and avoid the stress we experienced.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img
              src={founder}
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* What Sets Us Apart Section */}
      <div className="bg-gray-50 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What Sets Us Apart
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold text-xl">Convenience</h3>
            <p className="text-gray-600">
              Instant access to certificates from anywhere, at any time.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl">Security</h3>
            <p className="text-gray-600">
              Robust encryption ensures your certificates are safe from
              tampering.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-xl">Efficiency</h3>
            <p className="text-gray-600">
              Save time and resources with streamlined certificate management.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-orange-500 py-16 text-white text-center">
        <h2 className="text-3xl font-semibold">
          Ready to digitize your certificates?
        </h2>
        <p className="mt-4 text-lg">
          Join us and experience the future of certificate management.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-700 hover:text-white">
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
