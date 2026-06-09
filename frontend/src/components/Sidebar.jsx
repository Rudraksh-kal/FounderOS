import { useState } from "react";

import {
  Plus,
  Settings,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Trash2,
  Pencil,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useSidebar } from "../context/SidebarContext";
import { useChat } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const {
    collapsed,
    setCollapsed,
    mobileOpen,
    setMobileOpen,
  } = useSidebar();

  const navigate = useNavigate();

  const {
    chats,
    setCurrentChatId,
    deleteChat,
    renameChat,
  } = useChat();

  const { user, setShowAuthModal } =
    useAuth();

  const [openMenu, setOpenMenu] =
    useState(null);

  const [editingChat, setEditingChat] =
    useState(null);

  const [newTitle, setNewTitle] =
    useState("");

  return (
    <>
      {mobileOpen && (
        <div
          onClick={() =>
            setMobileOpen(false)
          }
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
        />
      )}

      <aside
        className={`fixed top-0 h-screen bg-[#0d0d0d] border-r border-[#1f1f1f] text-white p-4 flex flex-col justify-between transition-all duration-500 ease-in-out z-50

        ${
          mobileOpen
            ? "left-0"
            : "-left-[280px]"
        }

        lg:left-0

        ${
          collapsed
            ? "w-[110px]"
            : "w-[260px]"
        }`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className={`flex items-center pl-1 ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
              }`}
            >
              <div className="w-10 h-10 rounded-full border-[3px] border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.4)]"></div>

              {!collapsed && (
                <h2 className="text-xl font-bold">
                  FounderOS
                </h2>
              )}
            </Link>

            <button
              onClick={() =>
                setCollapsed(!collapsed)
              }
              className="hidden lg:block hover:bg-[#171717] p-2 rounded-lg transition-all"
            >
              {collapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          </div>

          {/* New Workspace */}
          <Link
            to={user ? "/workspace" : "#"}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                setShowAuthModal(true);
                return;
              }

              setCurrentChatId(null);
              setMobileOpen(false);
              navigate("/workspace");
            }}
            className={`w-full flex items-center bg-violet-600 hover:bg-violet-500 transition-all p-3 rounded-xl mb-6 ${
              collapsed
                ? "justify-center"
                : "gap-3"
            }`}
          >
            <Plus size={20} />

            {!collapsed && (
              <span>
                New Workspace
              </span>
            )}
          </Link>

          {/* Dashboard */}
          <Link
            to={user ? "/dashboard" : "#"}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                setShowAuthModal(true);
                return;
              }

              setMobileOpen(false);
            }}
            className={`w-full flex items-center p-3 rounded-xl hover:bg-[#171717] transition-all ${
              collapsed
                ? "justify-center"
                : "gap-3"
            }`}
          >
            <MessageSquare size={18} />

            {!collapsed && (
              <span className="text-sm text-[#d1d1d1]">
                Dashboard
              </span>
            )}
          </Link>

          {/* Chat History */}
          {!collapsed && (
            <div className="border-t border-[#1f1f1f] mt-6 pt-4">
              <p className="text-xs text-[#666] uppercase tracking-wider px-3 mb-3">
                Recent Workspaces
              </p>

              <div className="space-y-1">
                {chats.length === 0 ? (
                  <p className="text-sm text-[#666] px-3">
                    No workspaces yet
                  </p>
                ) : (
                  chats.map((chat) => (
                    <div
                      key={chat._id}
                      className="relative group"
                    >
                      <button
                        onClick={() => {
                          if (!user) {
                            setShowAuthModal(true);
                            return;
                          }

                          setCurrentChatId(
                            chat._id
                          );

                          setMobileOpen(false);

                          navigate(
                            "/workspace"
                          );
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#171717] text-left"
                      >
                        <MessageSquare
                          size={14}
                          className="text-[#777]"
                        />

                        {editingChat ===
                        chat._id ? (
                          <input
                            autoFocus
                            value={newTitle}
                            onChange={(e) =>
                              setNewTitle(
                                e.target.value
                              )
                            }
                            onBlur={() => {
                              if (
                                newTitle.trim()
                              ) {
                                renameChat(
                                  chat._id,
                                  newTitle
                                );
                              }

                              setEditingChat(
                                null
                              );
                            }}
                            onKeyDown={(e) => {
                              if (
                                e.key ===
                                "Enter"
                              ) {
                                if (
                                  newTitle.trim()
                                ) {
                                  renameChat(
                                    chat._id,
                                    newTitle
                                  );
                                }

                                setEditingChat(
                                  null
                                );
                              }
                            }}
                            className="bg-[#222] text-sm px-2 py-1 rounded w-full outline-none"
                          />
                        ) : (
                          <span className="text-sm text-[#d1d1d1] truncate flex-1">
                            {chat.title}
                          </span>
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();

                          setOpenMenu(
                            openMenu ===
                              chat._id
                              ? null
                              : chat._id
                          );
                        }}
                        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 p-1 hover:bg-[#222] rounded"
                      >
                        <MoreHorizontal
                          size={15}
                        />
                      </button>

                      {openMenu ===
                        chat._id && (
                        <div className="absolute right-2 top-10 bg-[#151515] border border-[#2a2a2a] rounded-xl overflow-hidden z-50">
                          <button
                            onClick={() => {
                              setEditingChat(
                                chat._id
                              );

                              setNewTitle(
                                chat.title
                              );

                              setOpenMenu(
                                null
                              );
                            }}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-[#1d1d1d] w-full text-sm"
                          >
                            <Pencil
                              size={14}
                            />
                            Rename
                          </button>

                          <button
                            onClick={() => {
                              deleteChat(
                                chat._id
                              );

                              setOpenMenu(
                                null
                              );
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-[#1d1d1d] w-full text-sm"
                          >
                            <Trash2
                              size={14}
                            />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="border-t border-[#1f1f1f] pt-5">
          <Link
            to={user ? "/settings" : "#"}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                setShowAuthModal(true);
                return;
              }

              setMobileOpen(false);
            }}
            className={`w-full flex items-center p-3 rounded-xl hover:bg-[#171717] ${
              collapsed
                ? "justify-center"
                : "gap-3"
            }`}
          >
            <Settings size={18} />

            {!collapsed && (
              <span className="text-sm text-[#d1d1d1]">
                Settings
              </span>
            )}
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;