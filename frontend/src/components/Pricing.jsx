import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Pricing() {
  const navigate = useNavigate();

  const {
    user,
    setShowAuthModal,
  } = useAuth();

  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "AI Dashboard",
        "Basic Analytics",
        "1 Team Member",
        "Community Support",
      ],
      available: true,
    },
    {
      name: "Pro",
      price: "$49",
      popular: true,
      available: false,
      features: [
        "Advanced AI Tools",
        "Automation Workflows",
        "Unlimited Team Members",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "$99",
      available: false,
      features: [
        "Custom AI Agents",
        "Dedicated Infrastructure",
        "Advanced Security",
        "24/7 Support",
      ],
    },
  ];

  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-black text-white px-5 sm:px-10 lg:px-20 py-20 lg:py-24"
    >
      <div className="text-center">
        <p className="text-violet-500 font-medium mb-4">
          PRICING
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold">
          Simple pricing for startups.
        </h2>

        <p className="text-[#b3b3b3] mt-6 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
          Choose a plan that fits your startup stage
          and scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "bg-violet-600 border-violet-500 lg:scale-105 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
                : "bg-[#111] border-[#2a2a2a]"
            }`}
          >
            {plan.popular && (
              <p className="mb-5 inline-block px-4 py-1 rounded-full bg-white text-black text-sm font-medium">
                Most Popular
              </p>
            )}

            <h3 className="text-2xl sm:text-3xl font-bold">
              {plan.name}
            </h3>

            <h2 className="text-4xl sm:text-5xl font-bold mt-6">
              {plan.price}
              <span className="text-base sm:text-lg text-[#d1d1d1]">
                /mo
              </span>
            </h2>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature, i) => (
                <p
                  key={i}
                  className="text-[15px] sm:text-[16px]"
                >
                  ✓ {feature}
                </p>
              ))}
            </div>

            {plan.available ? (
              <button
                onClick={() => {
                  if (!user) {
                    setShowAuthModal(true);
                    return;
                  }

                  navigate("/workspace");
                }}
                className="w-full mt-10 py-3 rounded-xl font-medium transition-all duration-300 bg-violet-600 hover:bg-violet-500"
              >
                Launch Workspace
              </button>
            ) : (
              <div className="relative group mt-10">
                <button
                  disabled
                  className={`w-full py-3 rounded-xl font-medium cursor-not-allowed ${
                    plan.popular
                      ? "bg-white/80 text-black"
                      : "bg-[#222]"
                  }`}
                >
                  Get Started
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-red-500/90 border border-red-400 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none z-50">
                  Not Available In Your Country
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Pricing;