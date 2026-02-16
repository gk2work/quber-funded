import {
  Card1,
  CapitalAllocate,
  CapitalProtection,
  ExpertTrade,
} from "../assets/images";

export default function CapitalAllocation() {
  const features = [
    {
      icon: CapitalAllocate,
      title: "Capital Allocation",
    },
    {
      icon: ExpertTrade,
      title: "Expert Trade Execution",
    },
    {
      icon: CapitalProtection,
      title: "Capital Protection Framework",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#06090f] text-white py-20 relative overflow-hidden"
    >
      <div className="max-w-10xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Crypto Cards Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={Card1}
              alt="Crypto Cards"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gray-500 text-sm mb-6 tracking-wide uppercase">
              Structured Capital Allocation
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Access Funded Capital.
              <br />
              Earn Through Managed
              <br />
              Performance.
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Quber Funded gives you structured access to institutional-grade
              trading capital, executed by experienced professionals under
              disciplined risk controls.
            </p>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3 className="font-medium text-lg text-white">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
