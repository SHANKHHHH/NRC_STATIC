import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/logo1.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (sectionId === "about") {
      e.preventDefault();
      setIsMenuOpen(false);
      window.location.href = "/companydetails";
      return;
    }

    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();
      setIsMenuOpen(false);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      e.preventDefault();
      setIsMenuOpen(false);
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { label: "About Us", id: "about" },
    { label: "Our Products", id: "products" },
    { label: "Our Machineries", id: "machine" },
    { label: "Our Clients", id: "client" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <header
      className="relative bg-white h-20 rounded-2xl shadow-lg mx-3 lg:mx-6 mt-4 px-5 z-50"
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo with Text */}
        <a href="/" className="flex items-center h-full space-x-2">
          <img
            src={logo}
            alt="logo"
            className="h-full max-h-full w-auto object-contain"
          />
          <span className="text-[#00AEEF] font-bold text-lg whitespace-nowrap">
            NR CONTAINERS
          </span>
        </a>

        {/* Desktop Navigation - now only visible on lg and up */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map(({ label, id }) => (
            <a
              key={label}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-[#00AEEF] font-medium text-[15px] hover:text-[#007ba3] relative transition-all duration-300 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#007ba3] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Icon - visible below lg */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu - visible below lg */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white mt-2 px-6 py-4 rounded-b-2xl shadow-md lg:hidden z-40 space-y-4 animate-fade-in-down">
          {navLinks.map(({ label, id }) => (
            <a
              key={label}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="block text-[#00AEEF] font-medium text-base hover:text-[#007ba3] transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
