import { QuberLogo, PlayStore, AppStore } from "../assets/images";

export default function Footer() {
  return (
    <footer className="bg-[#06090f] text-white border-t border-gray-800 py-12">
      <div className="max-w-10xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left Half - Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={QuberLogo} alt="Quber Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">
                Quber<span className="text-blue-500">Funded</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              A performance-based funded platform providing real trading
              opportunities, transparent rules, and scalable profit
              opportunities. Built for disciplined traders focused on long-term
              consistency.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
              >
                <span>in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
              >
                <span>X</span>
              </a>
            </div>
          </div>

          {/* Right Half - Links, Pages, Download App */}
          <div className="grid grid-cols-3 gap-8">
            {/* Links */}
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Why Quber
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Disclosures
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Latest News
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="font-bold mb-4">Download app</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={PlayStore}
                    alt="Get it on Google Play"
                    className="h-11 w-36 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={AppStore}
                    alt="Download on the App Store"
                    className="h-11 w-36 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright ©2026 Quber Funded. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
