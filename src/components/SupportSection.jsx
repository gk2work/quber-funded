export default function SupportSection() {
  const features = [
    {
      icon: "🎧",
      title: "24/7 Support",
      description:
        "Need help? Get your requests solved quickly via support team",
    },
    {
      icon: "👥",
      title: "Community",
      description: "Join the conversations on our worldwide QUBER communities",
    },
    {
      icon: "📚",
      title: "Academy",
      description: "Learn Forex Trading and crypto for free",
    },
  ];

  return (
    <section className="bg-[#06090f] text-white py-16">
      <div className="max-w-10xl mx-auto px-8 lg:px-12">
        <p className="text-center text-blue-500 text-sm font-semibold mb-4">
          Always by your side
        </p>
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">
          Be the first to use our Quber funded
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Get faster, safer, more affordable cloud object storage with
          <br />
          no central point of failure
        </p>

        {/* Blue Background Section */}
        <div className="bg-blue-600 rounded-3xl py-12 px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
