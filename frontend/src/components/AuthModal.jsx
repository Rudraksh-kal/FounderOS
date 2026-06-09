import { X } from "lucide-react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

function AuthModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    try {
      const provider =
        new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 sm:px-6">
      <div className="relative w-full max-w-md rounded-2xl sm:rounded-3xl border border-[#242424] bg-[#0f0f0f] shadow-[0_0_80px_rgba(124,58,237,0.25)]">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-violet-600 opacity-20 blur-[120px] pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 sm:right-5 top-4 sm:top-5 z-50 text-[#888] hover:text-white transition-all duration-300 cursor-pointer"
        >
          <X size={24} />
        </button>

        <div className="relative z-10 p-5 sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 text-xl sm:text-2xl font-bold">
              F
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-white">
              Welcome to FounderOS
            </h1>

            <p className="mt-4 text-[#9a9a9a] leading-6 text-sm sm:text-base">
              Your AI-powered startup workspace.
              Sign in to continue.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <button
              onClick={handleGoogleLogin}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white py-3 sm:py-3.5 font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#f3f3f3] cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.232 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.053 6.053 29.277 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.053 6.053 29.277 4 24 4c-7.682 0-14.347 4.337-17.694 10.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.177 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.146 35.091 26.676 36 24 36c-5.211 0-9.621-3.329-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.05 12.05 0 0 1-4.084 5.57l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>

              Continue with Google
            </button>
          </div>

          <div className="mt-8 border-t border-[#1f1f1f] pt-6 text-center">
            <p className="text-xs sm:text-sm text-[#777]">
              By continuing, you agree to our
              Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;