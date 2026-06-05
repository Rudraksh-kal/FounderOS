/* eslint-disable react-refresh/only-export-components */

import {
    createContext,
    useContext,
    useState,
  } from "react";
  
  const ChatContext = createContext();
  
  export function ChatProvider({ children }) {
    const [chats, setChats] = useState([]);
  
    const [currentChatId, setCurrentChatId] =
      useState(null);
  
    const createChat = (firstMessage) => {
      const chat = {
        id: Date.now(),
        title:
          firstMessage.length > 30
            ? firstMessage.slice(0, 30) + "..."
            : firstMessage,
        messages: [],
      };
  
      setChats((prev) => [chat, ...prev]);
  
      setCurrentChatId(chat.id);
  
      return chat.id;
    };
  
    const addMessage = (
      chatId,
      sender,
      text
    ) => {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    sender,
                    text,
                  },
                ],
              }
            : chat
        )
      );
    };
  
    const deleteChat = (chatId) => {
      setChats((prev) =>
        prev.filter(
          (chat) => chat.id !== chatId
        )
      );
  
      if (currentChatId === chatId) {
        setCurrentChatId(null);
      }
    };
  
    const renameChat = (
      chatId,
      newTitle
    ) => {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                title: newTitle,
              }
            : chat
        )
      );
    };
  
    const currentChat =
      chats.find(
        (chat) => chat.id === currentChatId
      ) || null;
  
    return (
      <ChatContext.Provider
        value={{
          chats,
          currentChat,
          currentChatId,
          setCurrentChatId,
          createChat,
          addMessage,
          deleteChat,
          renameChat,
        }}
      >
        {children}
      </ChatContext.Provider>
    );
  }
  
  export function useChat() {
    return useContext(ChatContext);
  }