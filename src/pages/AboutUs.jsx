export default function AboutUs() {
  return (
    <section className="bg-[#06090f] text-white min-h-screen py-20">
      <div className="max-w-12xl mx-auto px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
        <p className="text-gray-400 text-sm mb-12">
          QUBER Funded - Empowering Vision, Financing Excellence
        </p>

        <div className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              At QUBER Funded, we have reimagined the landscape of professional
              trading. Our mission is to bridge the gap between talent and
              capital, providing high-caliber traders with the liquidity and
              infrastructure necessary to command the markets with absolute
              freedom.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              The Ecosystem of Success
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Whether your expertise lies in high-frequency FX scalping, the
              strategic volatility of Indices, or the complex dynamics of
              Commodities, QUBER Funded provides a sophisticated
              institutional-grade environment. By trading through our dedicated
              brokerage, you gain access to ultra-low latency execution and a
              seamless, secure payout architecture designed for the modern
              professional.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              More Than a Prop Firm & Your Strategic Partner
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are not merely a capital provider; we are the catalyst for your
              professional evolution. Our ecosystem is engineered to transform
              consistency into scalable wealth and raw ambition into realized
              achievement.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">
                    Transparent Mandates:
                  </span>{" "}
                  Clear, concise funding rules with no hidden hurdles.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">
                    Instant Onboarding:
                  </span>{" "}
                  Immediate account deployment to get you into the markets
                  without delay.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">
                    Global Infrastructure:
                  </span>{" "}
                  Round-the-clock support and world-class technology.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Access Institutional Capital
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Secure the funding your strategy deserves and trade with
              real-world liquidity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Execute with Precision
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leverage our advanced proprietary platform and experience the
              pinnacle of execution power.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors cursor-pointer">
              Get Funded Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
