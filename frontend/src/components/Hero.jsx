import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Hero() {
  const navigate = useNavigate();

  const {
    user,
    setShowAuthModal,
  } = useAuth();

  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 gap-16 py-20 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-5 py-2.5 border border-[#2f2f2f] rounded-full bg-[#161616] text-[#b3b3b3] text-sm mb-8">
          AI Powered Startup Workspace
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-[520px] leading-tight bg-gradient-to-r from-white to-violet-600 bg-clip-text text-transparent font-bold">
          Run your startup smarter with AI.
        </h1>

        <p className="mt-5 text-[#b3b3b3] max-w-[500px] leading-7 text-[17px]">
          FounderOS brings AI agents, analytics, tasks, and startup tools into
          one intelligent workspace.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-8">
          <button
            onClick={() => {
              if (!user) {
                setShowAuthModal(true);
                return;
              }

              navigate("/workspace");
            }}
            className="px-7 py-3.5 rounded-xl bg-violet-600 text-white text-base hover:bg-violet-500 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Start Free
          </button>

          <button className="px-7 py-3.5 rounded-xl border border-[#333] bg-transparent text-white text-base hover:border-violet-500 hover:bg-[#111] hover:scale-105 transition-all duration-300 cursor-pointer">
            Watch Demo
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[540px] h-[320px] bg-[#1a1a1a] rounded-[20px] border border-[#2a2a2a] flex justify-center items-center shadow-[0_0_60px_rgba(124,58,237,0.35)] hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
      >
        <div className="absolute w-[250px] h-[250px] bg-violet-600 rounded-full blur-[120px] opacity-25 -top-20 -right-20"></div>

        <div className="w-[90%] relative z-10">
          <div className="bg-[#111] p-4 rounded-xl mb-4 border border-[#2f2f2f] text-white">
            AI Revenue Analytics
          </div>

          <div className="flex gap-4">
            <div className="flex-1 h-[100px] bg-[#111] rounded-xl border border-[#2f2f2f] p-5">
              <p className="text-[#888] text-sm">
                Monthly Growth
              </p>

              <h2 className="mt-2.5 text-white text-3xl font-semibold">
                +28%
              </h2>
            </div>

            <div className="flex-1 h-[100px] bg-[#111] rounded-xl border border-[#2f2f2f] p-5">
              <p className="text-[#888] text-sm">
                AI Tasks
              </p>

              <h2 className="mt-2.5 text-white text-3xl font-semibold">
                124
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;