export default function PerformanceSteps() {
  const steps = [
    {
      number: "01",
      title: "Secure Your Allocation",
      description:
        "Get access to a $50,000 structured funded account by activating your $15,000 capital exit. No complex evaluation stages.",
    },
    {
      number: "02",
      title: "Strategy-Based Execution",
      description:
        "Trades are executed by our expert team through a managed copy-trading system, aligned with defined risk controls and strict capital protection parameters.",
    },
    {
      number: "03",
      title: "Earn from Performance",
      description:
        "Profit generated from the funded capital is distributed based on performance metrics. The stronger the results, the greater the returns.",
    },
  ];

  return (
    <section
      id="why-quber"
      className="bg-white py-20 border-t border-b border-gray-200"
    >
      <div className="max-w-10xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Performance
              <br />
              Earned. Capital
              <br />
              Unlocked.
            </h2>
          </div>

          {/* Right - Description & Button */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Quber Funded, discipline meets opportunity. Meet the
              objectives, respect the risk model, and earn real payouts backed
              by structured capital allocation.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 w-fit">
              Get Funded with Quber →
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
