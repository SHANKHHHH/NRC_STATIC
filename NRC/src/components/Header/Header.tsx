import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/logo1.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Handle scroll when URL contains a hash on first load
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

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ): void => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      e.preventDefault();

      // Close mobile menu first
      setIsMenuOpen(false);

      // Wait for the layout to settle before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Wait for menu animation/layout shift to complete
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { label: "About Us", id: "about" },
    { label: "Our Services", id: "products" },
    { label: "Our Machineries", id: "machine" },
    { label: "Our Clients", id: "client" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <header className="bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_-4px_6px_-1px_rgba(0,0,0,0.1)] rounded-xl mx-2 md:mx-6 mt-4 px-4 py-4 z-50">

      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, id }) => (
            <a
              key={label}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-[#00AEEF] text-base font-semibold hover:text-[#007ba3] transition-all duration-300 relative group"
            >
              {label}
              <span className="block h-0.5 w-0 bg-[#007ba3] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4 py-4 rounded-lg bg-white shadow space-y-3">
          {navLinks.map(({ label, id }) => (
            <a
              key={label}
              href={`/#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="block text-[#00AEEF] font-medium text-base hover:text-[#007ba3]"
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
