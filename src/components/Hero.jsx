import { DesktopMonitor } from "../assets/images";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#000000] text-white overflow-hidden min-h-[600px]"
    >
      {/* CONTENT */}
      <div className="relative max-w-10xl mx-auto px-8 lg:px-12 pt-20 pb-24 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-md bg-gray-800/60 text-sm text-gray-300">
            Zero Competition. No Challenge
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Capital Without
            <br />
            Competition. Just
            <br />
            <span className="text-blue-500">Pure Performance.</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg text-base">
            Enter with $1000 and trade firm capital under clear performance
            guidelines. Scale up as you prove consistency.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition">
            Get Funded
            <span>→</span>
          </button>
        </div>

        {/* DESKTOP MONITOR IMAGE */}
        <div className="relative z-10 hidden md:block">
          <img
            src={DesktopMonitor}
            alt="Trading Dashboard"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none" />
    </section>
  );
}
