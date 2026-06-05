function LogoutModal({
    isOpen,
    onClose,
    onConfirm,
  }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-6">
        <div className="relative w-full max-w-md rounded-3xl border border-[#242424] bg-[#0f0f0f] p-8 shadow-[0_0_80px_rgba(124,58,237,0.2)]">
  
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-red-500 opacity-10 blur-[120px] pointer-events-none"></div>
  
          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20 text-red-400 text-2xl font-bold">
              !
            </div>
  
            <h2 className="text-3xl font-bold text-white">
              Logout?
            </h2>
  
            <p className="mt-4 text-[#9a9a9a] leading-6">
              Are you sure you want to logout from FounderOS?
            </p>
  
            <div className="mt-8 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl border border-[#2a2a2a] text-white hover:bg-[#161616] transition-all duration-300"
              >
                Cancel
              </button>
  
              <button
                onClick={onConfirm}
                className="flex-1 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LogoutModal;