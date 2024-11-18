import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import main from "../assets/images/main aurat.png";
import firstImage from "../assets/images/first.png";
import secondImage from "../assets/images/second.png";
import thirdImages from "../assets/images/third.png";
const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Go Digital with Certificates?",
      description:
        "Certificates are more than just pieces of paper; they validate achievements and qualifications",
      image: firstImage,
      date: "Nov 15, 2024",
    },
    {
      id: 2,
      title: "How Pramman Patra Works: A Seamless Process",
      description: " Discover how we make certificate management hassle-free!",
      image: secondImage,
      date: "Nov 10, 2024",
    },
    {
      id: 3,
      title: "Use Cases of Digital Certificates",
      description:
        "Pramman Patra caters to a wide range of industries, ensuring a robust and secure solution for everyone.",
      image: thirdImages,
      date: "Nov 8, 2024",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Featured Blog Section */}
      <section className=" container mx-auto  mt-8">
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-2">
            The Digital Evolution of Certificates
          </h2>
          <p className="text-gray-600 text-[2xl] mb-4">
            In today’s fast-paced world, certificates are more than just pieces
            of paper; they are proof of achievements, qualifications, and
            milestones. Yet, managing them has remained a cumbersome task. At
            Pramman-Patra, we aim to revolutionize this process by bringing
            certificates into the digital era.
          </p>
          <div className="max-w-7xl">
            <img
              className="w-full rounded-2xl"
              src={main}
              alt="Featured Blog"
            />
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="container mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold mb-4">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.date}</p>
                <p className="text-gray-700 mt-2">{blog.description}</p>
                <button className="mt-4 bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
