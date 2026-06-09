import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

import { useSidebar } from "../context/SidebarContext";

function Landing() {
  const { collapsed } = useSidebar();

  return (
    <div
      id="top"
      className="bg-black min-h-screen overflow-x-hidden"
    >
      <Sidebar />

      <main
        className={`transition-all duration-500 ml-0 ${
          collapsed
            ? "lg:ml-[90px]"
            : "lg:ml-[260px]"
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