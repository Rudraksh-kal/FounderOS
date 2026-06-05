import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();

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
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "Advanced AI Tools",
        "Automation Workflows",
        "Unlimited Team Members",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
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
      className="bg-black text-white px-6 sm:px-10 lg:px-20 py-24"
    >
      <div className="text-center">
        <p className="text-violet-500 font-medium mb-4">
          PRICING
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          Simple pricing for startups.
        </h2>

        <p className="text-[#b3b3b3] mt-6 max-w-2xl mx-auto leading-7">
          Choose a plan that fits your startup stage and scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
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
            className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "bg-violet-600 border-violet-500 scale-105 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
                : "bg-[#111] border-[#2a2a2a]"
            }`}
          >
            {plan.popular && (
              <p className="mb-5 inline-block px-4 py-1 rounded-full bg-white text-black text-sm font-medium">
                Most Popular
              </p>
            )}

            <h3 className="text-3xl font-bold">
              {plan.name}
            </h3>

            <h2 className="text-5xl font-bold mt-6">
              {plan.price}
              <span className="text-lg text-[#d1d1d1]">
                /mo
              </span>
            </h2>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature, i) => (
                <p key={i} className="text-[16px]">
                  ✓ {feature}
                </p>
              ))}
            </div>

            <button
              onClick={() => navigate("/workspace")}
              className={`w-full mt-10 py-3 rounded-xl font-medium transition-all duration-300 ${
                plan.popular
                  ? "bg-white text-black hover:bg-[#e5e5e5]"
                  : "bg-violet-600 hover:bg-violet-500"
              }`}
            >
              {plan.name === "Free"
                ? "Launch Workspace"
                : plan.name === "Enterprise"
                ? "Get Started"
                : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Pricing;