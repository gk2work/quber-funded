export default function Hero() {
  return (
    <section className="relative bg-[#06090f] text-white overflow-hidden">
      {/* DARK BLUE LEFT GLOW */}
      <div className="absolute left-0 top-0 h-full w-[55%] bg-gradient-to-r from-[#071a3a] via-[#071a3a]/60 to-transparent pointer-events-none" />

      {/* CONTENT */}
      <div
        className="relative max-w-10xl mx-auto px-8 lg:px-12 pt-24 pb-28 grid md:grid-cols-2 gap-10 items-center
        bg-none
        md:bg-[url('/src/assets/images/desktop_monitor.svg')]
        md:bg-cover
        md:bg-center
        md:bg-no-repeat"
      >
        {/* TEXT */}
        <div className="z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-900/40 border border-blue-700 text-sm">
            Zero Competition. No Challenge
          </div>

          <h1 className="text-4xl md:text-[64px] font-semibold leading-[1.05]">
            Capital Without <br />
            Competition. Just <br />
            <span className="text-blue-500">Pure Performance.</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            Enter with $1000 and trade firm capital under clear performance
            guidelines. Scale up as you prove consistency.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-full">
            Get Funded →
          </button>
        </div>

        {/* spacer column */}
        <div />
      </div>

      {/* FLOOR SHADOW / BASE LINE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
