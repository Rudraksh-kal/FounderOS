import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

import { useSidebar } from "../context/SidebarContext";
<div id="top"></div>

function Landing() {
  const { collapsed } = useSidebar();

  return (
    <div className="bg-black min-h-screen">
      <Sidebar />

      <main
        className={`transition-all duration-500 ${
          collapsed
            ? "ml-[90px]"
            : "ml-[260px]"
        }`}
      >
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <DashboardPreview />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}

export default Landing;