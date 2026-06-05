import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

import {
  BarChart3,
  Brain,
  Activity,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

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
          className="px-6 sm:px-10 lg:px-20 py-12"
        >
          <div className="mb-12">
            <p className="text-violet-500 font-medium mb-3">
              DASHBOARD
            </p>

            <h1 className="text-5xl font-bold">
              Welcome back, Founder.
            </h1>

            <p className="text-[#888] mt-5 max-w-2xl leading-7">
              Monitor startup growth, AI activity, and workspace performance from one intelligent dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <DashboardCard
              title="Revenue"
              value="$48K"
              icon={<BarChart3 size={32} />}
            />

            <DashboardCard
              title="AI Agents"
              value="12"
              icon={<Brain size={32} />}
            />

            <DashboardCard
              title="Tasks"
              value="124"
              icon={<Activity size={32} />}
            />

            <DashboardCard
              title="Completed"
              value="89%"
              icon={<CheckCircle2 size={32} />}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">
            <div className="xl:col-span-2 bg-[#111] border border-[#222] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[#888] text-sm">
                    Startup Growth
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    +28% this month
                  </h2>
                </div>

                <div className="text-violet-400">
                  <BarChart3 size={34} />
                </div>
              </div>

              <div className="flex items-end gap-4 h-[280px]">
                <div className="flex-1 bg-violet-600 rounded-t-3xl h-[30%]"></div>
                <div className="flex-1 bg-violet-600 rounded-t-3xl h-[55%]"></div>
                <div className="flex-1 bg-violet-600 rounded-t-3xl h-[45%]"></div>
                <div className="flex-1 bg-violet-600 rounded-t-3xl h-[80%]"></div>
                <div className="flex-1 bg-violet-600 rounded-t-3xl h-[65%]"></div>
                <div className="flex-1 bg-violet-600 rounded-t-3xl h-[95%]"></div>
              </div>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  AI Tasks
                </h2>

                <Brain
                  className="text-violet-400"
                  size={30}
                />
              </div>

              <div className="space-y-5">
                <div className="bg-[#181818] rounded-2xl p-5 border border-[#222]">
                  <p className="font-medium">
                    Investor Pitch Draft
                  </p>

                  <p className="text-[#888] text-sm mt-2">
                    AI generated startup pitch deck
                  </p>
                </div>

                <div className="bg-[#181818] rounded-2xl p-5 border border-[#222]">
                  <p className="font-medium">
                    Market Analysis
                  </p>

                  <p className="text-[#888] text-sm mt-2">
                    AI analyzed competitor trends
                  </p>
                </div>

                <div className="bg-[#181818] rounded-2xl p-5 border border-[#222]">
                  <p className="font-medium">
                    Growth Suggestions
                  </p>

                  <p className="text-[#888] text-sm mt-2">
                    Personalized startup recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default Dashboard;