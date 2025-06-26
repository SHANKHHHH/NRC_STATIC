import { useEffect } from "react";
import { Link } from "react-router-dom";

// Define types for footer links and sections
type FooterLink = {
  name: string;
  path: string;
  section?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerData: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/", section: "about" },
      { name: "Services", path: "/", section: "products" }, // ✅ updated from 'services'
    ],
  },
  {
    title: "Contact Us",
    links: [{ name: "Email us", path: "mailto:info@nrcontainers.com" }],
  },
  {
    title: "More",
    links: [
      { name: "Company details", path: "/companydetails" },
    ],
  },
];

const Footer = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: string,
    path: string
  ) => {
    const currentPath = window.location.pathname;
    const targetPath = path.split("#")[0];

    if (currentPath !== targetPath && targetPath === "/") {
      // Navigate to '/' first, then scroll after short delay
      e.preventDefault();
      window.location.href = `/#${section}`;
      return;
    }

    e.preventDefault();

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${section}`;
      }
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#008fc4] to-[#006b9f] text-white font-montserrat py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-base font-medium pb-6">
          {footerData.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
              {section.links.map((link, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-200 hover:text-white transition-colors duration-200 my-1"
                >
                  {link.path.startsWith("mailto:") ? (
                    <a href={link.path}>{link.name}</a>
                  ) : link.path.startsWith("/") && link.section ? (
                    <Link
                      to={link.path}
                      onClick={(e) =>
                        handleScrollToSection(e, link.section!, link.path)
                      }
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link to={link.path}>{link.name}</Link>
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-300 pt-6">
          &copy; {new Date().getFullYear()} NR Containers Pvt Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
