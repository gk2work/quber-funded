import { Link } from "react-router-dom";
import { QuberLogo, PlayStore, AppStore } from "../assets/images";
import ScrollReveal from "./shared/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-[#06090f] text-white border-t border-gray-800 py-12">
      <div className="max-w-8xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Left Half - Logo & Description */}
          <ScrollReveal direction="left" delay={0}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={QuberLogo} alt="Quber Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">
                  Quber<span className="text-blue-500">Funded</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
                A performance-based funded account platform empowering traders
                with real capital, fair rules, and scalable payouts. Built for
                consistency. Designed for growth.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/quberfunded?igsh=MXRhaTM1MnFkdWUwMA=="
                  target="_blank"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  <span>in</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  <span>in</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Half - Links, Pages, Download App */}
          <ScrollReveal direction="right" delay={100}>
            <div className="grid grid-cols-3 gap-8">
              {/* Links */}
              <div>
                <h3 className="font-bold mb-4">Links</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="#pricing" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#benefits" className="hover:text-white">
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
                    <a href="#faqs" className="hover:text-white">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pages */}
              <div>
                <h3 className="font-bold mb-4">Other Pages</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link to="/about-us" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className="hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="hover:text-white">
                      Privacy Policy
                    </Link>
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
          </ScrollReveal>
        </div>

        {/* Legal & Regulatory Framework */}
        <ScrollReveal direction="up" delay={200}>
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="font-bold text-lg mb-4">
              Legal & Regulatory Framework
            </h3>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                <span className="font-semibold text-white">License:</span> QUBER
                CAPITAL LLC is a duly incorporated entity under the Limited
                Liabilities Act, Chapter 151 of the Revised Laws of Saint
                Vincent and the Grenadines 2009 (Company Registration No. 4289
                LLC 2025). Our global operations are headquartered at Suite 305,
                Griffith Corporate Centre, Beachmont, Kingstown, Saint Vincent
                and the Grenadines.
              </p>
              <p>
                <span className="font-semibold text-white">
                  Authentic Market Execution:
                </span>{" "}
                Unlike traditional prop firms, QUBER CAPITAL LLC facilitates
                access to genuine trading accounts through our proprietary
                infrastructure. Every transaction is executed within live
                financial markets. We do not engage in, nor do we offer,
                simulated environments or virtual trading programs. Every
                account within our ecosystem is backed by real-time liquidity,
                subject to actual market execution, and carries tangible market
                risk.
              </p>
              <p>
                <span className="font-semibold text-white">Risk Mandate:</span>{" "}
                Participation in financial markets involves substantial risk and
                may not be appropriate for every investor. We strongly advise
                all participants to conduct rigorous due diligence and ensure a
                comprehensive understanding of market exposure before engaging
                in live trading activities.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <ScrollReveal direction="fade" delay={300}>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Copyright ©2026 Quber Funded. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
