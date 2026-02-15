import { useState } from "react";
import { QuberLogo } from "../assets/images";

export default function Navbar() {
  const [active, setActive] = useState("Features");
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Features", id: "pricing" },
    { name: "Benefits", id: "benefits" },
    { name: "About us", id: "about" },
    { name: "Why Quber", id: "why-quber" },
    { name: "FAQs", id: "faqs" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMenuClick = (item) => {
    setActive(item.name);
    scrollToSection(item.id);
    setOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-10xl mx-auto px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <img
            src={QuberLogo}
            alt="Quber Logo"
            className="h-8 w-auto object-contain"
          />
          <span>
            Quber<span className="text-blue-600">Funded</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className={`
                font-medium transition whitespace-nowrap cursor-pointer
                ${
                  active === item.name
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }
            `}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Desktop buttons */}
          <button className="hidden md:block text-gray-700 font-medium cursor-pointer hover:text-gray-900">
            Register
          </button>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full cursor-pointer hover:bg-blue-700 font-medium">
            Login
          </button>

          {/* MOBILE HAMBURGER */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-4">
            {menu.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className={`text-left font-medium
                  ${active === item.name ? "text-gray-900" : "text-gray-600"}
                `}
              >
                {item.name}
              </button>
            ))}

            <hr />

            <button className="py-2 text-gray-700 font-medium">Register</button>

            <button className="bg-blue-600 text-white py-2 rounded-full">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
