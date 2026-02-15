import { useState } from "react";
import { QuberLogo } from "../assets/images";

export default function Navbar() {
  const [active, setActive] = useState("Features");
  const [open, setOpen] = useState(false);

  const menu = ["Features", "Benefits", "About us", "Why Quber", "FAQs"];

  return (
    <header className="bg-gray-100 sticky top-0 z-50">
      <div className="max-w-12xl mx-auto px-6 py-4 flex items-center justify-between">
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
        <nav
          className="
    hidden md:flex
    gap-4 lg:gap-8
    text-sm lg:text-base
    text-gray-700
"
        >
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                font-medium transition whitespace-nowrap cursor-pointer
                ${
                  active === item
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }
            `}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Desktop buttons */}
          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer">
            Login
          </button>

          <button className="hidden md:block cursor-pointer">Register</button>

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
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className={`text-left font-medium
                  ${active === item ? "text-blue-600" : "text-gray-700"}
                `}
              >
                {item}
              </button>
            ))}

            <hr />

            <button className="bg-blue-600 text-white py-2 rounded-full">
              Login
            </button>

            <button className="py-2">Register</button>
          </div>
        </div>
      )}
    </header>
  );
}
