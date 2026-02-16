import { useState } from "react";

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
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onSelect();
  };

  return (
    <div className="relative pt-6">
      {/* Top Label Tab */}
      <div
        className={`
          absolute top-0 left-1/2 -translate-x-1/2 z-10
          px-12 py-1 rounded-t-3xl text-sm font-semibold text-white
          ${
            active ? "bg-blue-600" : highlighted ? "bg-gray-800" : "bg-gray-600"
          }
        `}
        style={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      >
        {title}
      </div>

      {/* Card Container with Border */}
      <div
        onClick={handleClick}
        className={`
          relative rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden
          ${active ? "shadow-2xl scale-[1.02]" : "hover:shadow-lg"}
        `}
      >
        {/* Ripple Effect */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-blue-400 opacity-75 animate-ripple pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: "20px",
              height: "20px",
              transform: "translate(-50%, -50%)",
              animation: "ripple 0.6s ease-out",
            }}
          />
        ))}

        {/* Gradient Border Wrapper */}
        {active && (
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(180deg, #1D60E5 0%, #8FB5FF 100%)",
              padding: "2px",
            }}
          >
            <div
              className="w-full h-full rounded-3xl"
              style={{
                background:
                  "linear-gradient(180deg, #FCFBFA 40.35%, #D9E8FF 100%)",
              }}
            />
          </div>
        )}

        {/* Inner Card Content */}
        <div
          className={`
            relative rounded-3xl p-8 pt-12 transition-all duration-300
            ${
              active
                ? "bg-transparent"
                : "bg-white hover:bg-[linear-gradient(180deg,#FCFBFA_40.35%,#D9E8FF_100%)] border-2 border-gray-200"
            }
          `}
        >
          {/* PRICE */}
          <div className="mt-2 text-5xl font-bold text-blue-600">${price}</div>

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
              <div
                key={i}
                className="flex items-start gap-3 text-gray-700 text-sm"
              >
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
                  : "border-2 border-gray-800 text-gray-800 hover:bg-blue-600 hover:text-white hover:outline-none hover:border-blue-600"
              }
            `}
          >
            Get Funded
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 20px;
            height: 20px;
            opacity: 0.75;
          }
          100% {
            width: 500px;
            height: 500px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
