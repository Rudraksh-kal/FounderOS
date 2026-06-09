import { motion } from "framer-motion";
import { BarChart3, Zap, Users } from "lucide-react";

function Features() {
  const features = [
    {
      title: "AI Analytics",
      desc: "Track startup growth, revenue, and customer insights with AI-powered analytics.",
      icon: <BarChart3 size={28} />,
    },
    {
      title: "Smart Automation",
      desc: "Automate repetitive startup workflows and save hours every week.",
      icon: <Zap size={28} />,
    },
    {
      title: "Team Workspace",
      desc: "Collaborate with your team using tasks, notes, and integrated AI tools.",
      icon: <Users size={28} />,
    },
  ];

  return (
    <section
      id="features"
      className="bg-black text-white px-5 sm:px-10 lg:px-20 py-20 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-violet-500 font-medium mb-4">
          FEATURES
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold">
          Everything your startup needs.
        </h2>

        <p className="text-[#b3b3b3] mt-6 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
          FounderOS combines AI tools,
          analytics, automation, and
          collaboration into one modern
          platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-6 sm:p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-6 sm:mb-7">
              {feature.icon}
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-[#b3b3b3] leading-7 text-sm sm:text-base">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;