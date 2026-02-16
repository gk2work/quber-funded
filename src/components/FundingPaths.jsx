import {
  Hash,
  RiskControl,
  LiveFunded,
  GrowthScale,
  Mobile,
} from "../assets/images/index";

export default function FundingPaths() {
  const features = [
    {
      title: "Evaluation Framework",
      description:
        "Clear price targets, defined drawdown limits, and transparent rules designed to test real trading discipline.",
      icon: Hash,
      position: "top-left",
    },
    {
      title: "Live Funded Stage",
      description:
        "Move from evaluation to real capital allocation and start earning on performance — not promises.",
      icon: LiveFunded,
      position: "bottom-left",
    },
    {
      title: "Risk Control System",
      description:
        "Advanced risk parameters that protect capital while allowing serious traders to grow consistently.",
      icon: RiskControl,
      position: "top-right",
    },
    {
      title: "Growth & Scaling",
      description:
        "Unlock higher funding tiers and increased capital as you demonstrate stable, responsible performance.",
      icon: GrowthScale,
      position: "bottom-right",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed-1 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-delayed-2 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-delayed-3 {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .icon-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <section
        id="benefits"
        className="bg-[#06090f] text-white py-20 relative overflow-hidden"
      >
        {/* Background circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-10xl mx-auto px-4 lg:px-12 relative z-10">
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

          <div className="relative w-full max-w-[1100px] xl:max-w-[1200px] mx-auto">
            <div className="flex justify-center items-center">
              {/* Center Mobile Image Container */}
              <div className="relative inline-block">
                {/* Mobile Image - Responsive sizing */}
                <img
                  src={Mobile}
                  alt="Trading Platform Mobile App"
                  className="w-[350px] lg:w-[550px] xl:w-[650px] h-auto object-contain drop-shadow-2xl relative z-10"
                />

                {/* Top Left Icon - Positioned on circle */}
                <div className="absolute top-[15%] left-[8%] z-20 hidden lg:block animate-float">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                    <img
                      src={features[0].icon}
                      alt=""
                      className="w-6 h-6 xl:w-7 xl:h-7"
                    />
                  </div>
                </div>

                {/* Bottom Left Icon - Positioned on circle */}
                <div className="absolute bottom-[25%] left-[8%] z-20 hidden lg:block animate-float-delayed-1">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                    <img
                      src={features[1].icon}
                      alt=""
                      className="w-6 h-6 xl:w-7 xl:h-7"
                    />
                  </div>
                </div>

                {/* Top Right Icon - Positioned on circle */}
                <div className="absolute top-[15%] right-[8%] z-20 hidden lg:block animate-float-delayed-2">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                    <img
                      src={features[2].icon}
                      alt=""
                      className="w-6 h-6 xl:w-7 xl:h-7"
                    />
                  </div>
                </div>

                {/* Bottom Right Icon - Positioned on circle */}
                <div className="absolute bottom-[25%] right-[8%] z-20 hidden lg:block animate-float-delayed-3">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-blue-600 flex items-center justify-center icon-glow hover:scale-110 transition-transform duration-300">
                    <img
                      src={features[3].icon}
                      alt=""
                      className="w-6 h-6 xl:w-7 xl:h-7"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Text - Positioned much closer to icons */}
            <div className="hidden lg:block">
              {/* Top Left Text */}
              <div className="absolute top-[12%] left-[50px] xl:left-[80px] w-[150px] xl:w-[190px] text-right">
                <h3 className="text-sm xl:text-base font-bold mb-1">
                  {features[0].title}
                </h3>
                <p className="text-gray-400 text-[10px] xl:text-[11px] leading-relaxed">
                  {features[0].description}
                </p>
              </div>

              {/* Bottom Left Text */}
              <div className="absolute bottom-[22%] left-[50px] xl:left-[80px] w-[150px] xl:w-[190px] text-right">
                <h3 className="text-sm xl:text-base font-bold mb-1">
                  {features[1].title}
                </h3>
                <p className="text-gray-400 text-[10px] xl:text-[11px] leading-relaxed">
                  {features[1].description}
                </p>
              </div>

              {/* Top Right Text */}
              <div className="absolute top-[12%] right-[50px] xl:right-[80px] w-[150px] xl:w-[190px] text-left">
                <h3 className="text-sm xl:text-base font-bold mb-1">
                  {features[2].title}
                </h3>
                <p className="text-gray-400 text-[10px] xl:text-[11px] leading-relaxed">
                  {features[2].description}
                </p>
              </div>

              {/* Bottom Right Text */}
              <div className="absolute bottom-[22%] right-[50px] xl:right-[80px] w-[150px] xl:w-[190px] text-left">
                <h3 className="text-sm xl:text-base font-bold mb-1">
                  {features[3].title}
                </h3>
                <p className="text-gray-400 text-[10px] xl:text-[11px] leading-relaxed">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View - Features Below */}
          <div className="lg:hidden mt-12 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                  <img src={feature.icon} alt="" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
