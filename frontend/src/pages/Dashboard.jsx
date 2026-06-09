import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

import { BarChart3 } from "lucide-react";

import { useSidebar } from "../context/SidebarContext";

function Dashboard() {
  const { collapsed } = useSidebar();

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Sidebar />

      <main
        className={`transition-all duration-500 ml-0 ${
          collapsed
            ? "lg:ml-[90px]"
            : "lg:ml-[260px]"
        }`}
      >
        <Navbar />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 py-10"
        >
          <div className="text-center w-full max-w-5xl">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-violet-500 flex items-center justify-center mb-6 sm:mb-8 shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              <BarChart3
                size={32}
                className="sm:w-10 sm:h-10 text-violet-400"
              />
            </div>

            <p className="text-violet-500 font-medium mb-4 tracking-widest text-sm sm:text-base">
              FounderOS Dashboard
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Coming Soon
            </h1>

            <p className="text-[#888] text-base sm:text-lg max-w-2xl mx-auto leading-7 sm:leading-8 px-2">
              We're building a powerful analytics
              dashboard for founders. Soon you'll
              be able to monitor startup growth,
              AI activity, workspace performance,
              business insights, and much more —
              all from one intelligent command
              center.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-[#111] border border-[#222]">
              <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse"></div>

              <span className="text-[#d1d1d1] text-sm sm:text-base">
                Under Active Development
              </span>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#111] border border-[#222] rounded-2xl p-4 sm:p-5">
                <h3 className="font-semibold mb-2">
                  Startup Analytics
                </h3>

                <p className="text-sm text-[#777]">
                  Track growth, engagement,
                  revenue, and performance
                  metrics.
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] rounded-2xl p-4 sm:p-5">
                <h3 className="font-semibold mb-2">
                  AI Insights
                </h3>

                <p className="text-sm text-[#777]">
                  Receive intelligent
                  recommendations and business
                  suggestions.
                </p>
              </div>

              <div className="bg-[#111] border border-[#222] rounded-2xl p-4 sm:p-5">
                <h3 className="font-semibold mb-2">
                  Workspace Reports
                </h3>

                <p className="text-sm text-[#777]">
                  Monitor projects, tasks,
                  chats, and founder
                  productivity.
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