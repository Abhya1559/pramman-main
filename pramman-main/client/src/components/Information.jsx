import socialphone from "../assets/images/social.png";
const GrowWithNetwork = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h2 className="text-orange-500 text-lg font-semibold mb-2">
            Social Sharing
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-6">
            Grow with Network
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            When your learners showcase their digital credentials you issue,
            they become your brand ambassadors. It creates a viral network
            effect when they showcase their achievement, helping you reach more
            potential leads.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-orange-600 transition duration-300">
            Book a Demo →
          </button>
        </div>

        {/* Placeholder for Image Section */}
        <div className="relative">
          {/* Placeholder box */}

          <img src={socialphone} alt="" />
        </div>
      </div>
    </section>
  );
};

export default GrowWithNetwork;
