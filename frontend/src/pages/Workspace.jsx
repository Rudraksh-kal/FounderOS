import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSidebar } from "../context/SidebarContext";

function Workspace() {
  const { collapsed } = useSidebar();

  return (
    <div className="bg-black min-h-screen text-white">
      <Sidebar />

      <main
        className={`transition-all duration-500 ${
          collapsed ? "ml-[90px]" : "ml-[260px]"
        }`}
      >
        <Navbar />

        <div className="h-[calc(100vh-80px)] flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl font-bold text-center">
              FounderOS AI
            </h1>

            <p className="text-[#888] mt-5 text-center max-w-xl">
              What can I help you build today?
            </p>
          </div>

          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Ask FounderOS..."
                className="w-full bg-[#111] border border-[#222] rounded-2xl px-6 py-5 outline-none focus:border-violet-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Workspace;