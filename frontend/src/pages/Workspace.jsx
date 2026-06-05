import {
  useState,
  useRef,
  useEffect,
} from "react";

import ReactMarkdown from "react-markdown";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { useSidebar } from "../context/SidebarContext";
import { useChat } from "../context/ChatContext";

import { auth } from "../firebase";

import {
  Send,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

function Workspace() {
  const { collapsed } = useSidebar();

  const {
    currentChat,
    currentChatId,
    createChat,
    addMessage,
  } = useChat();

  const [input, setInput] = useState("");
  const [loading, setLoading] =
    useState(false);

  const messagesEndRef = useRef(null);

  const messages =
    currentChat?.messages || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    let chatId = currentChatId;

    if (!chatId) {
      chatId = createChat(input);
    }

    const userInput = input;

    addMessage(
      chatId,
      "user",
      userInput
    );

    setInput("");
    setLoading(true);

    try {
      const token =
        await auth.currentUser.getIdToken();

      const response = await fetch(
        "http://localhost:4000/api/ai/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            idea: userInput,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to get response"
        );
      }

      addMessage(
        chatId,
        "ai",
        data.analysis.analysis
      );
    } catch (error) {
      addMessage(
        chatId,
        "ai",
        error.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = async (
    text
  ) => {
    let chatId = currentChatId;

    if (!chatId) {
      chatId = createChat(text);
    }

    addMessage(chatId, "user", text);

    setLoading(true);

    try {
      const token =
        await auth.currentUser.getIdToken();

      const response = await fetch(
        "http://localhost:4000/api/ai/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            idea: text,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to get response"
        );
      }

      addMessage(
        chatId,
        "ai",
        data.analysis.analysis
      );
    } catch (error) {
      addMessage(
        chatId,
        "ai",
        error.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Sidebar />

      <main
        className={`transition-all duration-500 ${
          collapsed
            ? "ml-[110px]"
            : "ml-[260px]"
        }`}
      >
        <Navbar />

        <div className="h-[calc(100vh-80px)] flex flex-col">
          <div className="flex-1 overflow-y-auto px-6">
            {messages.length === 0 ? (
              <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-center">
                  Welcome Founder
                </h1>

                <p className="text-[#888] mt-5 text-center max-w-xl">
                  What can I help you build
                  today?
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-12 w-full">
                  <button
                    onClick={() =>
                      handleSuggestion(
                        "Validate my startup idea and identify risks."
                      )
                    }
                    className="bg-[#111] border border-[#222] rounded-2xl p-5 hover:border-violet-500 transition-all duration-300 text-left"
                  >
                    <Lightbulb
                      size={22}
                      className="text-violet-400 mb-3"
                    />

                    <h3 className="font-semibold mb-2">
                      Startup Idea
                    </h3>

                    <p className="text-sm text-[#888]">
                      Validate my startup
                      idea and identify
                      risks.
                    </p>
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion(
                        "Create a pitch deck outline for investors."
                      )
                    }
                    className="bg-[#111] border border-[#222] rounded-2xl p-5 hover:border-violet-500 transition-all duration-300 text-left"
                  >
                    <Rocket
                      size={22}
                      className="text-violet-400 mb-3"
                    />

                    <h3 className="font-semibold mb-2">
                      Investor Pitch
                    </h3>

                    <p className="text-sm text-[#888]">
                      Create a pitch deck
                      outline for investors.
                    </p>
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion(
                        "Analyze competitors and market opportunities."
                      )
                    }
                    className="bg-[#111] border border-[#222] rounded-2xl p-5 hover:border-violet-500 transition-all duration-300 text-left"
                  >
                    <TrendingUp
                      size={22}
                      className="text-violet-400 mb-3"
                    />

                    <h3 className="font-semibold mb-2">
                      Market Research
                    </h3>

                    <p className="text-sm text-[#888]">
                      Analyze competitors and
                      market opportunities.
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto py-8">
                <div className="space-y-6">
                  {messages.map(
                    (message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender ===
                          "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] px-5 py-4 rounded-3xl whitespace-pre-wrap ${
                            message.sender ===
                            "user"
                              ? "bg-violet-600"
                              : "bg-[#111] border border-[#222]"
                          }`}
                        >
                          {message.sender ===
                          "ai" ? (
                            <div className="prose prose-invert max-w-none">
                              <ReactMarkdown>
                                {
                                  message.text
                                }
                              </ReactMarkdown>
                            </div>
                          ) : (
                            message.text
                          )}
                        </div>
                      </div>
                    )
                  )}

                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-[#111] border border-[#222] px-5 py-4 rounded-3xl animate-pulse">
                        FounderOS is
                        thinking...
                      </div>
                    </div>
                  )}

                  <div
                    ref={messagesEndRef}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="px-6 pb-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#111] border border-[#222] rounded-3xl p-3 flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) =>
                    setInput(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter"
                    ) {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask FounderOS anything..."
                  className="flex-1 bg-transparent outline-none px-3 text-white placeholder:text-[#666]"
                />

                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="bg-violet-600 hover:bg-violet-500 transition-all duration-300 p-3 rounded-2xl disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>

              <p className="text-center text-xs text-[#555] mt-3">
                FounderOS can make
                mistakes. Verify important
                information.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Workspace;