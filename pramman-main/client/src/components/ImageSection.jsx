import card from "../assets/images/card.png";
import card1 from "../assets/images/card (1).png";
import card2 from "../assets/images/card (2).png";

export default function ImageSection() {
  const cards = [
    {
      img: card,
      title: "Digital Badges",
      description:
        "Reward achievements, encourage skills and showcase expertise with Open Badge Standards.",
      linkText: "Book a demo",
    },
    {
      img: card1,
      title: "Digital Certificates",
      description:
        "Issue secure, tamper-proof certificates with bank-level security for your achievements.",
      linkText: "Book a demo",
    },
    {
      img: card2,
      title: "Recognition Tools",
      description:
        "Empower professionals with tools to display verified skills and credentials.",
      linkText: "Learn more",
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-20 py-12 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500">
                {card.title}
              </h3>
              <p className="mt-3 text-gray-600">{card.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium"
              >
                {card.linkText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
