import { useState } from "react";
import PricingCard from "./PricingCard";
import FeatureItem from "./FeatureItem";
import { Cash, Circle, Hand } from "../../assets/images";
import RippleButton from "../ui/RippleButton";

export default function PricingSection() {
  const badges = [
    { text: "No Complicated rules", icon: Circle },
    { text: "No challenges", icon: Hand },
    { text: "One day payouts", icon: Cash },
  ];

  const plans = [
    {
      id: "standard",
      title: "Standard",
      price: "5,000",
      fee: "169",
      originalFee: "299",
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
    {
      id: "recommended",
      title: "Recommended",
      price: "10,000",
      fee: "329",
      originalFee: "599",
      highlighted: true,
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
    {
      id: "pro",
      title: "Pro",
      price: "25,000",
      fee: "829",
      originalFee: "1499",
      features: [
        "No challenge, No Consistency",
        "10% Max drawdown",
        "5 % Daily drawdown",
        "70% Profit Split",
        "Instant Payout , Weekly Thereafter.",
        "Unlimited Trading Period",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-[#f6f8fc] to-[#e9eef8] py-24"
    >
      <div className="max-w-10xl mx-auto px-8 lg:px-12 text-center">
        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {badges.map(({ text, icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-sm text-blue-600 font-medium"
            >
              <img src={icon} className="w-6 h-6" />
              {text}
            </div>
          ))}
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900">
          <span className="text-blue-600">Choose</span> your <br />
          trading account
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          Choose your funding level. Trade our capital, keep your share of
          profits, and grow through a transparent, rule-based evaluation system.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <PricingCard
              key={p.id}
              {...p}
              selected={selectedPlan === p.id}
              onSelect={() => setSelectedPlan(p.id)}
            />
          ))}
        </div>

        {/* BECOME A PARTNER */}
        <div
          className="mt-14 rounded-3xl bg-white/80 backdrop-blur p-8 shadow-sm border border-blue-200
                        flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          {/* LEFT */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-900">
              Become a <span className="text-blue-600">Partner</span>
            </h3>
            <p className="text-gray-600 mt-2 max-w-sm text-sm">
              Earn smart, scalable income with attractive commissions and
              recurring earnings from every active trader you onboard.
            </p>
          </div>

          {/* MIDDLE FEATURES */}
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm">Attractive Revenue Share</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-sm">Instant Payouts</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="text-sm">
                Recurring Income With Scalable Model.
              </span>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <RippleButton className="bg-blue-600 text-white hover:bg-blue-400 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2">
            Call Now
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
