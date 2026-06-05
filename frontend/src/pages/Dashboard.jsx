import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

import { BarChart3 } from "lucide-react";

import { useSidebar } from "../context/SidebarContext";

function Dashboard() {
  const { collapsed } = useSidebar();

  return (
    <div className="bg-black min-h-screen text-white">
      <Sidebar />

      <main
        className={`transition-all duration-500 ${
          collapsed
            ? "ml-[90px]"
            : "ml-[260px]"
        }`}
      >
        <Navbar />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-[calc(100vh-80px)] flex items-center justify-center px-6"
        >
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-violet-500 flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              <BarChart3
                size={40}
                className="text-violet-400"
              />
            </div>

            <p className="text-violet-500 font-medium mb-4 tracking-widest">
              FounderOS Dashboard
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Coming Soon
            </h1>

            <p className="text-[#888] text-lg max-w-2xl mx-auto leading-8">
              We're building a powerful analytics
              dashboard for founders. Soon you'll
              be able to monitor startup growth,
              AI activity, workspace performance,
              business insights, and much more —
              all from one intelligent command
              center.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#111] border border-[#222]">
              <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse"></div>

              <span className="text-[#d1d1d1]">
                Under Active Development
              </span>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#111] border border-[#222] rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  Startup Analytics
                </h3>

                <p className="text-sm text-[#777]">
                  Track growth, engagement,
                  revenue, and performance metrics.
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  AI Insights
                </h3>

                <p className="text-sm text-[#777]">
                  Receive intelligent
                  recommendations and business
                  suggestions.
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] rounded-2xl p-5">
                <h3 className="font-semibold mb-2">
                  Workspace Reports
                </h3>

                <p className="text-sm text-[#777]">
                  Monitor projects, tasks, chats,
                  and founder productivity.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default Dashboard;