import { NavLink } from "react-router";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Nosotros" },
    { to: "/services", label: "Servicios" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`bg-black border-b sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-zinc-700 shadow-lg shadow-black/50"
          : "border-zinc-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="JUV CAR Logo"
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand transition-all duration-300 group-hover:text-brand-dark">
                JUV CAR
              </span>
              <span className="text-xs text-zinc-400">Interiores de Cuero</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-all duration-300 hover:text-brand relative group ${
                    isActive ? "text-brand" : "text-zinc-300"
                  }`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-brand transition-colors duration-300 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "80px" }}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          className={`bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 transition-all duration-500 transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 px-6 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                      isActive
                        ? "text-brand bg-zinc-800/80 shadow-lg shadow-brand/20"
                        : "text-zinc-300 hover:text-brand hover:bg-zinc-800/50"
                    }`
                  }
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    <span className="text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
