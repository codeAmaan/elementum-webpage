import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ's", href: "#faqs" },
];

const linkClasses =
  "font-medium text-gray-900 transition-colors duration-200 hover:text-gray-500";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative z-50 w-full bg-white px-6 py-6 md:px-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-primary text-3xl font-normal tracking-wide text-gray-900"
        >
          Elementum
        </a>

        {/* Desktop Navigation */}
        <div className="font-secondary hidden items-center space-x-10 text-sm font-medium md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={linkClasses}>
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="text-gray-900 transition-colors hover:text-gray-600 focus:outline-none md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="font-secondary absolute left-0 top-full z-40 flex w-full flex-col space-y-4 border-b border-gray-100 bg-white px-8 py-6 text-base font-medium shadow-lg md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-gray-900 transition-colors hover:text-gray-500"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;