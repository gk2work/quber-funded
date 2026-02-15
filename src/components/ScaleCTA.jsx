export default function ScaleCTA() {
  return (
    <section className="bg-[#06090f] text-white py-20">
      <div className="max-w-10xl mx-auto px-8 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-blue-500">Scale Beyond</span>
          <br />
          Your Own Capital?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Quber Funded gives disciplined traders access to structured funding,
          designed for performance, not gimmicks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Contact us!
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 justify-center">
            Get Funded →
          </button>
        </div>
      </div>
    </section>
  );
}
