import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Product",
    items: [
      { title: "Overview", path: "/overview" },
      { title: "Features", path: "/features" },
      { title: "Tutorials", path: "/tutorials" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", path: "/about" },
      { title: "Careers", path: "/careers" },
      { title: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", path: "/blog" },
      { title: "Help Center", path: "/helpline" },
      { title: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Typography variant="h4" className="text-orange-500 font-bold mb-4">
              <Link to="/">Pramman-Patra</Link>
            </Typography>
            <Typography className="text-gray-600 leading-relaxed">
              Empowering your digital identity with efficiency, security, and
              trust. Your credentials, redefined.
            </Typography>
          </div>

          {/* Link Sections */}
          {LINKS.map(({ title, items }) => (
            <div key={title}>
              <Typography
                variant="h6"
                className="text-gray-800 font-semibold mb-4"
              >
                {title}
              </Typography>
              <ul className="space-y-2">
                {items.map(({ title, path }) => (
                  <li key={title}>
                    <Link to={path}>
                      <Typography
                        as="a"
                        href="#"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        {title}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col items-center md:flex-row md:justify-between">
          <Typography className="text-gray-600 text-center md:text-left">
            &copy; {currentYear} Pramman-Patra. All rights reserved.
          </Typography>
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* Social Icons */}
            {[
              { icon: "github", url: "https://github.com" },
              { icon: "twitter", url: "https://twitter.com" },
              { icon: "linkedin", url: "https://linkedin.com" },
              { icon: "instagram", url: "https://instagram.com" },
            ].map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
                className="text-gray-600 hover:text-orange-500 transition"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="..." />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
