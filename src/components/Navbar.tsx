import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// Assuming 'qd.png' is the correct file for the logo
// If you are using the 'qd.jpg' you uploaded, you'd change 'logo' to point to that file.
import logo from "../assets/qd.png";

// --- Custom Tailwind Colors (Must be defined in tailwind.config.js) ---
// --qb-navy: #151928;
// --qb-gold: #D4AF37; // A classic, rich gold color
// --coral: #FF7F50; // Assuming this is defined in your tailwind config
// ---------------------------------------------------------------------

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    // { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          <a
            href="#"
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            {/* Logo Container: Responsive sizing */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white shadow-lg border-2 border-qb-gold flex-shrink-0">
              <img
                src={logo}
                alt="QuardByte Logo"
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            {/* Brand Name: Responsive text size */}
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black tracking-tight">
              QuardraByte
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-coral transition-colors font-semibold text-sm lg:text-base xl:text-lg whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-coral text-white px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 rounded-lg font-semibold text-sm lg:text-base hover:bg-coral/90 transition-all whitespace-nowrap"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-qb-navy p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-coral transition-colors font-medium text-base sm:text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-qb-gold text-white px-6 py-2.5 sm:py-3 rounded-lg text-center font-semibold text-base sm:text-lg hover:bg-qb-gold/90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
