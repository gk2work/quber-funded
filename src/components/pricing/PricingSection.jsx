import { useState } from "react";
import PricingCard from "./PricingCard";
import FeatureItem from "./FeatureItem";
import {
    Cash,
    Circle,
    Hand,
    Integration,
    Users,
    Contact
} from "../../assets/images";

export default function PricingSection() {

    const badges = [
        { text: "No Complicated rules", icon: Circle },
        { text: "No challenges", icon: Hand },
        { text: "One day payouts", icon: Cash },
    ];

    const plans = [
        {
            id: "starter",
            title: "Starter",
            price: "10,000",
            features: [
                { text: "Up to 5,000 customers", icon: Users },
                { text: "Unlimited integrations", icon: Integration },
                { text: "Unlimited users", icon: Users },
            ],
        },
        {
            id: "recommended",
            title: "Recommended",
            price: "25,000",
            highlighted: true,
            features: [
                { text: "Up to 5,000 customers", icon: Users },
                { text: "Unlimited integrations", icon: Integration },
                { text: "Unlimited users", icon: Users },
            ],
        },
        {
            id: "standard",
            title: "Standard",
            price: "3,000",
            features: [
                { text: "Up to 5,000 customers", icon: Users },
                { text: "Unlimited integrations", icon: Integration },
                { text: "Unlimited users", icon: Users },
            ],
        },
    ];

    const [selectedPlan, setSelectedPlan] = useState("recommended");

    return (
        <section className="bg-gradient-to-b from-[#f6f8fc] to-[#e9eef8] py-24">

            <div className="max-w-12xl mx-auto px-6 text-center">

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

                <p className="mt-5 text-gray-600 max-w-xl mx-auto">
                    Choose your funding level. Trade our capital, keep your share of
                    profits and grow through a transparent system.
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

                {/* ENTERPRISE — FULLY MATCHED */}
                <div className="mt-14 rounded-3xl bg-white/80 backdrop-blur p-8 shadow-sm
                        flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                    {/* LEFT */}
                    <div className="text-left">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Enterprise
                        </h3>
                        <p className="text-gray-600 mt-2 max-w-sm">
                            Need something that fits your needs a bit better? Let's chat!
                        </p>
                    </div>

                    {/* MIDDLE FEATURES */}
                    <div className="space-y-3 text-left">
                        <FeatureItem icon={Contact} text="Unlimited contacts" />
                        <FeatureItem icon={Integration} text="Unlimited integrations" />
                        <FeatureItem icon={Users} text="Unlimited users" />
                    </div>

                    {/* RIGHT BUTTON */}
                    <button className="bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 transition">
                        Call Now
                    </button>

                </div>

            </div>
        </section>
    );
}
