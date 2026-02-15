import FeatureItem from "./FeatureItem";

export default function PricingCard({
    title,
    price,
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
        cursor-pointer rounded-3xl p-8 transition-all duration-300 border
        
        ${active
                    ? "border-blue-600 bg-gradient-to-b from-blue-50 to-blue-100 shadow-xl scale-[1.02]"
                    : "border-transparent bg-white/80 hover:border-blue-400 hover:shadow-lg"
                }
      `}
        >

            <h3 className="text-lg font-semibold text-gray-800">
                {title}
            </h3>

            <div className="mt-4 text-4xl font-bold text-gray-900">
                ${price}
            </div>

            <div className="mt-6 space-y-3">
                {features.map((f, i) => (
                    <FeatureItem key={i} text={f.text} icon={f.icon} />
                ))}
            </div>

            <button
                className={`
          mt-8 w-full py-3 rounded-full font-medium transition
          ${active
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-black/70 text-gray-800 hover:bg-gray-100"
                    }
        `}
            >
                Get Funded
            </button>

        </div>
    );
}
