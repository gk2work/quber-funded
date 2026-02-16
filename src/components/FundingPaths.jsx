import {
  Hash,
  RiskControl,
  LiveFunded,
  GrowthScale,
} from "../assets/images/index";

export default function FundingPaths() {
  const features = [
    {
      title: "Evaluation Framework",
      description:
        "Clear price targets, defined drawdown limits, and transparent rules designed to test real trading discipline.",
      icon: Hash,
      position: "left",
    },
    {
      title: "Live Funded Stage",
      description:
        "Move from evaluation to real capital allocation and start earning on performance — not promises.",
      icon: LiveFunded,
      position: "left",
    },
    {
      title: "Risk Control System",
      description:
        "Advanced risk parameters that protect capital while allowing serious traders to grow consistently.",
      icon: RiskControl,
      position: "right",
    },
    {
      title: "Growth & Scaling",
      description:
        "Unlock higher funding tiers and increased capital as you demonstrate stable, responsible performance.",
      icon: GrowthScale,
      position: "right",
    },
  ];

  return (
    <section id="benefits" className="bg-[#06090f] text-white py-20">
      <div className="max-w-10xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold mb-2">
            Built for Performance-Driven Traders
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Multiple Funding Paths
            <br />
            One Powerful Platform.
          </h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Features */}
            <div className="space-y-12">
              {features
                .filter((f) => f.position === "left")
                .map((feature, index) => (
                  <div key={index} className="text-right">
                    <div className="flex items-start justify-end gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <img src={feature.icon} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Center - Mobile Mockup */}
            <div className="flex justify-center">
              <div className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
                <div className="bg-[#0a1628] h-full rounded-[2.5rem] p-6 overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-gray-400">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Exchange Header */}
                  <div className="text-center mb-6">
                    <p className="text-gray-400 text-sm mb-4">Exchange</p>

                    {/* Crypto Cards */}
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                          <span className="text-white font-semibold">ETH</span>
                        </div>
                        <span className="text-xs text-gray-500">••••••</span>
                      </div>

                      <div className="bg-gray-800/50 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                          <span className="text-white font-semibold">BTC</span>
                        </div>
                        <span className="text-xs text-gray-500">••••••</span>
                      </div>

                      <div className="bg-gray-800/50 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                          <span className="text-white font-semibold">
                            Ethereum
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">••••••</span>
                      </div>
                    </div>

                    {/* Portfolio Value */}
                    <div className="mt-6 bg-gray-800/30 p-4 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-500 text-2xl">💰</span>
                        <div className="text-right">
                          <p className="text-white font-bold">0.010%</p>
                          <p className="text-xs text-gray-500">Change rate</p>
                        </div>
                        <span className="text-gray-400">$**</span>
                      </div>
                    </div>

                    {/* Terms Link */}
                    <p className="text-xs text-blue-400 mt-4">
                      Click here for Terms & Conditions.
                      <br />
                      For this transaction fee will be taken
                    </p>

                    {/* Exchange Button */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl mt-4 font-semibold">
                      Exchange now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12">
              {features
                .filter((f) => f.position === "right")
                .map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <img src={feature.icon} alt="" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
