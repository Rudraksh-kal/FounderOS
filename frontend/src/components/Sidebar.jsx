import {
    PanelLeft,
    Plus,
    Settings,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
  } from "lucide-react";
  
  import { Link } from "react-router-dom";
  
  import { useSidebar } from "../context/SidebarContext";
  
  function Sidebar() {
    const { collapsed, setCollapsed } = useSidebar();
  
    const ideas = [
      "AI Analytics Ideas",
      "Startup Roadmap",
      "Investor Pitch Notes",
      "Marketing Strategy",
    ];
  
    return (
      <aside
        className={`fixed left-0 top-0 h-screen bg-[#0d0d0d] border-r border-[#1f1f1f] text-white p-4 flex flex-col justify-between transition-all duration-500 ease-in-out z-50 ${
          collapsed ? "w-[90px]" : "w-[260px]"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="min-w-[24px]">
                <PanelLeft size={24} />
              </div>
  
              <h2
                className={`text-xl font-bold whitespace-nowrap transition-all duration-300 ${
                  collapsed
                    ? "opacity-0 w-0"
                    : "opacity-100 w-auto"
                }`}
              >
                FounderOS
              </h2>
            </div>
  
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-[#171717] p-2 rounded-lg transition-all duration-300"
            >
              {collapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          </div>
  
          <button
            className={`w-full flex items-center bg-violet-600 hover:bg-violet-500 transition-all duration-300 px-4 py-3 rounded-xl mb-8 ${
              collapsed
                ? "justify-center"
                : "justify-start"
            }`}
          >
            <Plus size={20} />
  
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
                collapsed
                  ? "max-w-0 opacity-0"
                  : "max-w-[200px] opacity-100"
              }`}
            >
              New Workspace
            </span>
          </button>
  
          <div className="space-y-2">
  
            <Link
              to="/dashboard"
              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#171717] cursor-pointer transition-all duration-300"
            >
              <div className="min-w-[18px]">
                <MessageSquare size={18} />
              </div>
  
              <p
                className={`text-sm text-[#d1d1d1] whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  collapsed
                    ? "max-w-0 opacity-0"
                    : "max-w-[180px] opacity-100"
                }`}
              >
                Dashboard
              </p>
            </Link>
  
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#171717] cursor-pointer transition-all duration-300"
              >
                <div className="min-w-[18px]">
                  <MessageSquare size={18} />
                </div>
  
                <p
                  className={`text-sm text-[#d1d1d1] whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    collapsed
                      ? "max-w-0 opacity-0"
                      : "max-w-[180px] opacity-100"
                  }`}
                >
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="border-t border-[#1f1f1f] pt-5">
  
          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#171717] cursor-pointer transition-all duration-300"
          >
            <div className="min-w-[18px]">
              <Settings size={18} />
            </div>
  
            <p
              className={`text-sm text-[#d1d1d1] whitespace-nowrap overflow-hidden transition-all duration-300 ${
                collapsed
                  ? "max-w-0 opacity-0"
                  : "max-w-[120px] opacity-100"
              }`}
            >
              Settings
            </p>
          </Link>
  
        </div>
      </aside>
    );
  }
  
  export default Sidebar;