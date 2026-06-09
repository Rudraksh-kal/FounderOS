import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSidebar } from "../context/SidebarContext";

import {
  Moon,
  Zap,
  CreditCard,
} from "lucide-react";

function Settings() {
  const { collapsed } = useSidebar();

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Sidebar />

      <main
        className={`transition-all duration-500 ml-0 ${
          collapsed
            ? "lg:ml-[110px]"
            : "lg:ml-[260px]"
        }`}
      >
        <Navbar />

        <div className="px-4 sm:px-8 lg:px-20 py-8 sm:py-12">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Settings
            </h1>

            <p className="text-[#888] mt-4 text-sm sm:text-base">
              Manage your FounderOS experience.
            </p>
          </div>

          {/* Appearance */}
          <div className="bg-[#111] border border-[#222] rounded-3xl p-5 sm:p-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Moon
                className="text-violet-500"
                size={24}
              />

              <h2 className="text-xl sm:text-2xl font-bold">
                Appearance
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <h3 className="font-semibold">
                  Light Mode
                </h3>

                <p className="text-sm text-[#888] mt-1">
                  Global theme switching support is
                  currently under development.
                </p>
              </div>

              <div className="relative group self-start sm:self-auto">
                <button
                  disabled
                  className="w-14 h-8 rounded-full bg-[#333] relative cursor-not-allowed"
                >
                  <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full"></div>
                </button>

                <div className="absolute right-0 top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-red-500 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none z-50">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-[#111] border border-[#222] rounded-3xl p-5 sm:p-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap
                className="text-violet-500"
                size={24}
              />

              <h2 className="text-xl sm:text-2xl font-bold">
                Accessibility
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <h3 className="font-semibold">
                  Reduced Animations
                </h3>

                <p className="text-sm text-[#888] mt-1">
                  Motion preferences and reduced
                  animation settings are coming soon.
                </p>
              </div>

              <div className="relative group self-start sm:self-auto">
                <button
                  disabled
                  className="w-14 h-8 rounded-full bg-[#333] relative cursor-not-allowed"
                >
                  <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full"></div>
                </button>

                <div className="absolute right-0 top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-red-500 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none z-50">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-[#111] border border-[#222] rounded-3xl p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard
                className="text-violet-500"
                size={24}
              />

              <h2 className="text-xl sm:text-2xl font-bold">
                Subscription
              </h2>
            </div>

            <div className="bg-[#181818] rounded-2xl p-5 sm:p-6 border border-[#222]">
              <p className="text-sm text-[#888]">
                Current Plan
              </p>

              <h3 className="text-3xl sm:text-4xl font-bold text-violet-500 mt-2">
                FREE
              </h3>

              <ul className="mt-5 space-y-2 text-[#ccc] text-sm sm:text-base">
                <li>✓ Unlimited Workspaces</li>
                <li>✓ FounderOS Chat Access</li>
                <li>✓ Startup Planning Tools</li>
                <li>✓ Workspace History</li>
              </ul>

              <button
                disabled
                className="mt-6 w-full sm:w-auto px-5 py-3 rounded-xl bg-violet-600/40 cursor-not-allowed"
              >
                Upgrade Coming Soon
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;