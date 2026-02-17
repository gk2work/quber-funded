import {
  AboutUsHeaderBg,
  AboutUsHeaderOverlay,
  AboutUsIllustration,
} from "../assets/images/index";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative bg-[#0a1628] text-white h-[300px] flex items-center justify-center">
        {/* Blue gradient background layer */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={AboutUsHeaderBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Building columns overlay layer */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={AboutUsHeaderOverlay}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <h1 className="relative text-5xl md:text-6xl font-bold z-10">
          About Us
        </h1>
      </section>

      {/* Content Section - White Background */}
      <section className="bg-white pt-16 pb-0">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2
              className="text-[56px] font-bold leading-[120%] tracking-[-0.04em] max-w-[1033px] mx-auto text-[#0a1628]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Empowering Vision. Backing{" "}
              <span className="text-blue-600">Real Traders.</span>
            </h2>
            <p
              className="text-[40px] font-normal leading-[140%] tracking-[0%] max-w-[882px] mx-auto mt-6 text-gray-600"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our mission is simple give disciplined traders the funding,
              structure, and infrastructure they need to scale confidently.
            </p>
          </div>

          {/* Blue Card Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-3xl p-10 md:p-12 mb-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side */}
              <div className="flex items-center gap-4">
                <div className="max-w-[482px]">
                  <p
                    className="text-[36px] font-normal leading-[140%] tracking-[0%]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Trade With Our Dedicated Tier-1 Liquidity Partner
                  </p>
                </div>
              </div>

              {/* Right side - Two hoverable items */}
              <div className="flex flex-col gap-4 max-w-[252px]">
                {/* Item 1 - Backed By Real Capital */}
                <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="bg-blue-500 rounded-full p-2 group-hover:bg-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 4.08-3.05 7.44-7 7.93v2.02c5.05-.5 9-4.76 9-9.95s-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[29px] font-bold leading-[140%] tracking-[-0.02em] group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Backed By Real Capital
                    </p>
                  </div>
                </div>

                {/* Item 2 - Built For Real Traders */}
                <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100">
                  <div className="bg-blue-500/50 rounded-full p-2 group-hover:bg-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[29px] font-bold leading-[140%] tracking-[-0.02em] group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Built For Real Traders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext */}
          <p
            className="text-center text-gray-400 text-[18px] font-normal leading-[140%] tracking-[0%] max-w-[642px] mx-auto mb-16"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            From FX scalping to Indices and Commodities, QUBER Funded operates
            inside a structured, real-market environment.
          </p>

          {/* Why Choose Section */}
          <div className="mb-16">
            <h2
              className="text-[56px] font-bold leading-[120%] tracking-[-0.04em] max-w-[684px] mx-auto text-center text-[#0a1628] mb-12"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Why Choose <span className="text-blue-600">Quber Funded</span>
            </h2>

            {/* Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={AboutUsIllustration}
                alt="Trader working"
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 text-center max-w-[968px] mx-auto">
              <div className="relative">
                <p
                  className="text-[48px] font-bold leading-[120%] tracking-[-0.04em]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span className="text-[#0a1628]">In a market </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    full{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    of{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    hype{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    and{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    unclear{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    terms,{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    Quber{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    Funded{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    delivers{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    structure,{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    transparency,{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    and{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    a{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    professional{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    trading{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    environment{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    backed{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    by{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    institutional-grade{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    infrastructure{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    and{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    clearly{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    defined{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    risk{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    rules.
                  </span>
                </p>
              </div>

              <div className="relative">
                <p
                  className="text-[48px] font-bold leading-[120%] tracking-[-0.04em]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    We{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    offer{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    real{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    capital{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    with{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    strict{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    risk{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    management{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    and{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    performance-based{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    payouts{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    no{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    exaggerated{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    promises,{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    only{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    disciplined{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    growth{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    for{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    serious{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    traders{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    who{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    value{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    consistency{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    and{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    long-term{" "}
                  </span>
                  <span className="text-gray-300 hover:text-[#0a1628] transition-colors duration-200 cursor-default">
                    scaling.
                  </span>
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    92%
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Trader Payout
                    <br />
                    Satisfaction Rate
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    18+
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Years of Combined
                    <br />
                    Market Experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    $3.5M+
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Capital Allocated
                    <br />
                    to Traders
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    800+
                  </p>
                  <p className="text-gray-600 text-sm leading-tight">
                    Global Trading
                    <br />
                    Accounts Created
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Full Width */}
        <div className="bg-[#000510] text-white py-16 text-center overflow-hidden">
          <div className="space-y-4 max-w-[973px] mx-auto px-6">
            <h2
              className="text-[100px] font-extrabold leading-[120%] tracking-[-0.06em] animate-slide-in-left-continuous whitespace-nowrap"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              We don't sell <span className="text-blue-400">dreams.</span>
            </h2>
            <h2
              className="text-[100px] font-extrabold leading-[120%] tracking-[-0.06em] animate-slide-in-right-continuous whitespace-nowrap"
              style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800 }}
            >
              We fund <span className="text-blue-400">performance.</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
