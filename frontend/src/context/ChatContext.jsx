/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { auth } from "../firebase";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  const getToken = async () => {
    const user = auth.currentUser;
    if (!user) return null;
    return await user.getIdToken();
  };

  const loadChats = async () => {
    try {
      const token = await getToken();
      if (!token) return;

      const res = await fetch("http://localhost:4000/api/chats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setChats(data.chats || []);

        // restore last opened chat
        const last = localStorage.getItem("lastChatId");
        if (last) {
          setCurrentChatId(last);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) loadChats();
      else {
        setChats([]);
        setCurrentChatId(null);
        localStorage.removeItem("lastChatId");
      }
    });

    return () => unsub();
  }, []);

  // ---------------- CREATE CHAT ----------------
  const createChat = async (title) => {
    const token = await getToken();
    if (!token) return null;

    const res = await fetch("http://localhost:4000/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();

    if (!data.success) return null;

    setChats((prev) => [data.chat, ...prev]);

    setCurrentChatId(data.chat._id);
    localStorage.setItem("lastChatId", data.chat._id);

    return data.chat._id;
  };

  // ---------------- ADD MESSAGE ----------------
  const addMessage = async (chatId, sender, text) => {
    const token = await getToken();
    if (!token) return;

    await fetch(`http://localhost:4000/api/chats/${chatId}/message`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ sender, text }),
    });

    setChats((prev) =>
      prev.map((chat) =>
        chat._id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, { sender, text }],
            }
          : chat
      )
    );
  };

  // ---------------- UPDATE TITLE ----------------
  const updateChatTitle = async (chatId, title) => {
    const token = await getToken();
    if (!token) return;

    await fetch(`http://localhost:4000/api/chats/${chatId}/title`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    setChats((prev) =>
      prev.map((chat) =>
        chat._id === chatId
          ? { ...chat, title }
          : chat
      )
    );
  };

  // ---------------- SWITCH CHAT ----------------
  const switchChat = (chatId) => {
    setCurrentChatId(chatId);
    localStorage.setItem("lastChatId", chatId);
  };

  // ---------------- DELETE CHAT ----------------
  const deleteChat = async (chatId) => {
    const token = await getToken();
    if (!token) return;

    await fetch(`http://localhost:4000/api/chats/${chatId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setChats((prev) => prev.filter((c) => c._id !== chatId));

    if (currentChatId === chatId) {
      setCurrentChatId(null);
      localStorage.removeItem("lastChatId");
    }
  };

  const currentChat =
    chats.find((c) => c._id === currentChatId) || null;

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChat,
        currentChatId,
        setCurrentChatId: switchChat,
        createChat,
        addMessage,
        updateChatTitle,
        deleteChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}