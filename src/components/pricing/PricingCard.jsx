export default function PricingCard({
  title,
  price,
  fee,
  originalFee,
  features,
  highlighted,
  selected,
  onSelect,
}) {
  const active = selected;

  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer rounded-3xl p-8 transition-all duration-300 border relative
        
        ${
          active
            ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white shadow-2xl scale-[1.05]"
            : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg"
        }
      `}
    >
      {/* LABEL */}
      <div
        className={`
                absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold
                ${active ? "bg-black text-white" : "bg-gray-700 text-white"}
            `}
      >
        {title}
      </div>

      {/* PRICE */}
      <div className="mt-8 text-5xl font-bold text-blue-600">${price}</div>

      {/* FEE */}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <span className="text-2xl font-bold text-gray-900">${fee}</span>
        <span className="text-sm text-gray-500">Fees</span>
        <span className="text-lg text-red-500 line-through ml-2">
          ${originalFee}
        </span>
      </div>

      {/* FEATURES */}
      <div className="mt-8 space-y-3 text-left">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-gray-700 text-sm">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button
        className={`
          mt-8 w-full py-3 rounded-full font-medium transition
          ${
            active
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border-2 border-gray-800 text-gray-800 hover:bg-gray-50"
          }
        `}
      >
        Get Funded
      </button>
    </div>
  );
}
