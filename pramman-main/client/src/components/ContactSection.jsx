export default function ContactSection() {
  return (
    <div className="mt-12">
      <div className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-16 px-8 rounded-lg shadow-lg overflow-hidden">
        {/* Background Elements */}
        <div
          className="absolute inset-0 opacity-30 bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-md">
            Ready to get started?
          </h2>
          <p className="text-lg font-medium mb-6 drop-shadow-sm">
            Take the first step toward a brighter future with our solutions.
          </p>
          <button className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Talk to Sales
          </button>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
}
