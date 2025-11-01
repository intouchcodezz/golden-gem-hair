import React, { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle, User, Bot, Sparkles } from "lucide-react";
import { gsap } from "gsap";

interface ChatMessage {
  type: "user" | "bot";
  text: string;
}

const responses: Record<string, string> = {
  "hair transplant":
    "We provide world-class hair transplant services using the latest FUE and FUT techniques. Our experienced surgeons ensure natural-looking results with minimal downtime. Would you like to schedule a consultation?",
  prp: "PRP (Platelet-Rich Plasma) therapy is an excellent non-surgical option that helps rejuvenate your hair naturally by stimulating hair follicles. The treatment typically requires 3-6 sessions. Shall we book an appointment for you?",
  "prp therapy":
    "PRP (Platelet-Rich Plasma) therapy is an excellent non-surgical option that helps rejuvenate your hair naturally by stimulating hair follicles. The treatment typically requires 3-6 sessions. Shall we book an appointment for you?",
  consultation:
    "We'd be happy to arrange a consultation with our specialists. Our team will contact you within 24 hours to schedule an appointment at your convenience.",
  default:
    "Thank you for your interest! Our team will contact you soon to discuss your requirements in detail. Is there anything else you'd like to know?",
};

const MedicalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ name: string; mobile: string }>({
    name: "",
    mobile: "",
  });
  const [phase, setPhase] = useState<"query" | "form" | "done">("query");

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const messagesRef = useRef<Array<HTMLDivElement | null>>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [hideButtons, setHideButtons] = useState(false);

  useEffect(() => {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setHideButtons(entry.isIntersecting);
      });
    },
    { threshold: 0.1 } // triggers when 10% of footer is visible
  );

  observer.observe(footer);

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    if (chatButtonRef.current && !isOpen) {
      gsap.to(chatButtonRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatBoxRef.current && isOpen) {
      gsap.fromTo(
        chatBoxRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
      setTimeout(() => nameInputRef.current?.focus(), 600);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesRef.current.length > 0) {
      const lastMessage = messagesRef.current[messagesRef.current.length - 1];
      if (lastMessage) {
        gsap.fromTo(
          lastMessage,
          {
            opacity: 0,
            x: chatHistory[chatHistory.length - 1]?.type === "user" ? 50 : -50,
            scale: 0.8,
          },
          { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    }
  }, [chatHistory]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const simulateTyping = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory((prev) => [...prev, { type: "bot", text }]);
      if (callback) callback();
    }, 800);
  };

  const validateName = (nameValue: string) => {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameValue.trim()) return "Please enter your name.";
    if (!nameRegex.test(nameValue.trim()))
      return "Please enter a valid name (letters only, 2-50 characters).";
    return "";
  };

  const validateMobile = (mobileValue: string) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    const cleanedMobile = mobileValue.replace(/\s+/g, "");
    if (!cleanedMobile) return "Please enter your mobile number.";
    if (!mobileRegex.test(cleanedMobile))
      return "Please enter a valid 10-digit mobile number.";
    return "";
  };

  const handleQuerySend = () => {
    if (!query.trim() || isTyping) return;

    setChatHistory((prev) => [...prev, { type: "user", text: query }]);
    const queryLower = query.toLowerCase();
    let response = responses.default;

    for (const [key, value] of Object.entries(responses)) {
      if (key !== "default" && queryLower.includes(key)) {
        response = value;
        break;
      }
    }

    setQuery("");
    simulateTyping(response, () => {
      setShowForm(true);
      setPhase("form");
    });
  };

  const handleFormSubmit = async () => {
    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);
    setErrors({ name: nameError, mobile: mobileError });
    if (nameError || mobileError) return;

    setChatHistory((prev) => [
      ...prev,
      { type: "user", text: `Name: ${name}\nMobile: ${mobile}` },
    ]);
    setShowForm(false);
    setPhase("done");

    simulateTyping(`Thank you, ${name}! Our team will contact you shortly. 😊`);

    try {
      const response = await fetch("https://thegoldengemhairclinic.com/backend/chatbot_backend.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          query: chatHistory[chatHistory.length - 1]?.text || "",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        simulateTyping("Oops! Something went wrong while saving your details.");
        console.error(result.message);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      simulateTyping("Unable to connect to server. Please try again later.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (phase === "query") handleQuerySend();
      else if (phase === "form") handleFormSubmit();
    }
  };

  const handleReset = () => {
    if (chatBoxRef.current) {
      gsap.to(chatBoxRef.current, {
        scale: 0.95,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          setChatHistory([]);
          setShowForm(false);
          setName("");
          setMobile("");
          setQuery("");
          setErrors({ name: "", mobile: "" });
          setPhase("query");
        },
      });
    }
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else if (chatBoxRef.current) {
      gsap.to(chatBoxRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918122228645?text=Hi!%20I'm%20interested%20in%20your%20services`, "_blank");
  };

  return (
    <>
      {/* Chatbot - Left Side */}
      <div
        className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
          hideButtons ? "opacity-0 pointer-events-none translate-y-8" : "opacity-100 translate-y-0"
        }`}
      >
        {isOpen && (
          <div
            ref={chatBoxRef}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] backdrop-blur-xl bg-white/95 shadow-2xl rounded-3xl border border-amber-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 px-4 md:px-6 py-4 md:py-5 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
              <div className="flex items-center gap-2 md:gap-3 relative z-10">
                <div className="bg-white/20 backdrop-blur-sm p-2 md:p-2.5 rounded-2xl shadow-lg">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-white tracking-tight">
                    Medical Assistant
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-xs md:text-sm text-white/90 font-medium">Online now</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:rotate-90 relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="p-4 md:p-5 flex-1 flex flex-col gap-3 md:gap-4 h-[400px] md:h-[480px] overflow-y-auto bg-gradient-to-b from-amber-50/30 to-white">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  ref={(el) => (messagesRef.current[idx] = el)}
                  className={`flex gap-2 md:gap-3 ${
                    msg.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-2xl flex items-center justify-center shadow-md ${
                      msg.type === "bot"
                        ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white"
                        : "bg-gradient-to-br from-yellow-400 to-amber-500 text-amber-900"
                    }`}
                  >
                    {msg.type === "bot" ? <Bot size={18} /> : <User size={18} />}
                  </div>
                  <div
                    className={`${
                      msg.type === "bot"
                        ? "bg-white border border-amber-200 shadow-sm text-amber-900"
                        : "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg"
                    } px-3 md:px-5 py-2.5 md:py-3.5 rounded-3xl max-w-[75%] whitespace-pre-line leading-relaxed text-sm md:text-base font-medium ${
                      msg.type === "user" ? "rounded-br-md" : "rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 md:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-md">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white border border-amber-200 px-3 md:px-5 py-2.5 md:py-3.5 rounded-3xl rounded-bl-md shadow-sm">
                    <div className="flex gap-1.5">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-2 h-2 md:w-2.5 md:h-2.5 bg-amber-500 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input / Form */}
            <div className="p-4 md:p-5 border-t border-amber-200 bg-white/80 backdrop-blur-xl">
              {phase === "query" ? (
                <div className="flex gap-2 md:gap-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border border-amber-300 bg-white rounded-2xl px-3 md:px-5 py-2.5 md:py-3.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 font-medium placeholder:text-amber-600/60"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleQuerySend}
                    disabled={isTyping || !query.trim()}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 md:px-5 py-2.5 md:py-3.5 rounded-2xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center hover:scale-105 active:scale-95"
                  >
                    <Send size={18} />
                  </button>
                </div>
              ) : phase === "form" && showForm ? (
                <div className="flex flex-col gap-3">
                  <input
                    ref={nameInputRef}
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    onKeyDown={handleKeyPress}
                    className="w-full border border-amber-300 bg-white rounded-2xl px-3 md:px-5 py-2.5 md:py-3.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 font-medium placeholder:text-amber-600/60"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      setErrors((prev) => ({ ...prev, mobile: "" }));
                    }}
                    onKeyDown={handleKeyPress}
                    maxLength={10}
                    className="w-full border border-amber-300 bg-white rounded-2xl px-3 md:px-5 py-2.5 md:py-3.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 font-medium placeholder:text-amber-600/60"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs">{errors.mobile}</p>
                  )}
                  <button
                    onClick={handleFormSubmit}
                    disabled={isTyping}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 md:py-4 text-sm md:text-base rounded-2xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Submit
                  </button>
                </div>
              ) : phase === "done" ? (
                <button
                  onClick={handleReset}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 md:py-4 text-sm md:text-base rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start New Conversation
                </button>
              ) : null}
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        {!isOpen && (
          <button
            ref={chatButtonRef}
            onClick={toggleChat}
            className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:shadow-2xl rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-xl transition-all duration-300 font-bold text-white text-sm md:text-base hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center gap-2 md:gap-3 relative z-10">
              <MessageCircle size={20} className="animate-pulse" />
              <span className="hidden sm:inline">Chat with us</span>
              <span className="sm:hidden">Chat</span>
            </div>
          </button>
        )}
      </div>

      {/* WhatsApp Button - Right Side */}
      <button
        onClick={handleWhatsApp}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg animate-bounce-slow hover:animate-none transition-all duration-500 flex items-center justify-center z-50 hover:scale-110 active:scale-95 
        ${hideButtons ? "opacity-0 pointer-events-none translate-y-6" : "opacity-100 translate-y-0"}`}
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </>
  );
};

export default MedicalChatbot;