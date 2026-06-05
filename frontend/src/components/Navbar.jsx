import { useState } from "react";
import {
  Menu,
  LogOut,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import LogoutModal from "./LogoutModal";

function Navbar() {
  const { user } = useAuth();

  const [showAuthModal, setShowAuthModal] =
    useState(false);

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      setShowDropdown(false);
      setShowLogoutModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-5 text-white">
          <div className="flex items-center gap-12">
            <a
              href="#top"
              className="text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-all duration-300"
            >
              FounderOS
            </a>

            <div className="hidden md:flex items-center gap-8 text-[#b3b3b3] text-[15px]">
              <a
                href="#features"
                className="hover:text-violet-400 transition-all duration-300 cursor-pointer"
              >
                Features
              </a>

              <a
                href="#pricing"
                className="hover:text-violet-400 transition-all duration-300 cursor-pointer"
              >
                Pricing
              </a>

              <a
                href="#dashboard"
                className="hover:text-violet-400 transition-all duration-300 cursor-pointer"
              >
                Dashboard
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 relative">
            {user ? (
              <>
                <button
                  onClick={() =>
                    setShowDropdown(!showDropdown)
                  }
                  className="w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
                >
                  {user.displayName?.charAt(0) ||
                    user.email?.charAt(0)}
                </button>

                {showDropdown && (
                  <div className="absolute top-16 right-0 w-56 bg-[#111] border border-[#222] rounded-2xl p-2 shadow-2xl">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1b1b1b] transition-all duration-300"
                    >
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Link>

                    <Link
                      to="/settings"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1b1b1b] transition-all duration-300"
                    >
                      <Settings size={18} />
                      Settings
                    </Link>

                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        setShowLogoutModal(true);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1b1b1b] transition-all duration-300 text-red-400"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() =>
                  setShowAuthModal(true)
                }
                className="px-5 py-2.5 rounded-xl border border-[#2a2a2a] hover:border-violet-500 hover:bg-[#111] transition-all duration-300"
              >
                Sign In
              </button>
            )}

            <button className="lg:hidden">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() =>
          setShowAuthModal(false)
        }
      />

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() =>
          setShowLogoutModal(false)
        }
        onConfirm={handleLogout}
      />
    </>
  );
}

export default Navbar;