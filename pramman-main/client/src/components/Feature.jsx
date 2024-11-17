import anchor from "../assets/images/anchor.png";
import download from "../assets/images/download (1).png";
import download2 from "../assets/images/download (2).png";

export default function Feature() {
  const resources = [
    {
      image: anchor,
      title: "PVH: Creating a Culture of Learning",
      description:
        "Digital credentials translate training into career success for earners, driving demand and...",
      tags: ["Read", "Know", "Case Study"],
    },
    {
      image: download,
      title:
        "Empowering future tech talent by identifying gaps, mapping needs, and bridging them through learning.",
      description:
        "Relying on verifiable skills and credentials is the most accurate and scalable way to...",
      tags: ["Read", "Know", "Case Study"],
    },
    {
      image: download2,
      title: "Johnson Controls: Building Brand Confidence",
      description:
        "Attract, engage, and retain talent effectively with verified digital credentials. Make...",
      tags: ["Read", "Know", "Case Study"],
    },
  ];

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-10 text-gray-800">
          Featured Resource
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="font-bold text-lg text-gray-800 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {resource.title}
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-600 rounded-full px-3 py-1 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Transition */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-900 bg-opacity-50 transition-opacity duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
