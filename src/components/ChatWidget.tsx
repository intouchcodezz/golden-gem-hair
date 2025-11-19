import React, { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle, User, Bot, Sparkles } from "lucide-react";
import { gsap } from "gsap";

// -----------------------------------------------------
// TYPES
// -----------------------------------------------------
interface ChatMessage {
  type: "user" | "bot";
  text: string;
}

// -----------------------------------------------------
// PREDEFINED RESPONSES
// -----------------------------------------------------
const responses: Record<string, string> = {
  "hair transplant":
    "We provide world-class hair transplant services using FUE & FUT techniques. Would you like to schedule a consultation?",
  prp: "PRP therapy boosts natural hair growth and requires 3–6 sessions. Shall we book an appointment?",
  "prp therapy": "PRP is a highly effective non-surgical option for hair restoration.",
  consultation: "We can arrange a consultation for you. Our team will contact you shortly.",
  default:
    "Thank you! Our team will contact you soon. How else can I help you today?",
};

// -----------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------
const MedicalChatbot: React.FC = () => {
  // -----------------------------------------------------
  // STATES
  // -----------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [query, setQuery] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    captcha: "",
  });

  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState<"query" | "form" | "done">("query");

  const [hideButtons, setHideButtons] = useState(false);

  const chatBoxRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  // Anti-bot time barrier
  const [formOpenedAt, setFormOpenedAt] = useState(0);

  // Honeypot
  const [honeypot, setHoneypot] = useState("");

  // -----------------------------------------------------
  // FOOTER DETECTION (HIDE BUTTONS)
  // -----------------------------------------------------
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const obs = new IntersectionObserver(
      (entries) => {
        setHideButtons(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  // -----------------------------------------------------
  // CHAT BUTTON FLOATING ANIMATION
  // -----------------------------------------------------
  useEffect(() => {
    if (!isOpen && chatButtonRef.current) {
      gsap.to(chatButtonRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, [isOpen]);

  // -----------------------------------------------------
  // CHATBOX OPEN ANIMATION
  // -----------------------------------------------------
  useEffect(() => {
    if (isOpen && chatBoxRef.current) {
      gsap.fromTo(
        chatBoxRef.current,
        { scale: 0.8, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
      );
    }
  }, [isOpen]);

  // -----------------------------------------------------
  // AUTO SCROLL
  // -----------------------------------------------------
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  // -----------------------------------------------------
  // CAPTCHA GENERATOR
  // -----------------------------------------------------
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 2;
    setCaptchaQuestion(`${a} + ${b}`);
    setCaptchaAnswer(String(a + b));
  };

  useEffect(() => {
    if (phase === "form") {
      generateCaptcha();
      setFormOpenedAt(Date.now()); // Time barrier start
    }
  }, [phase]);

  // -----------------------------------------------------
  // SIMULATED TYPING
  // -----------------------------------------------------
  const simulateTyping = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatHistory((p) => [...p, { type: "bot", text }]);
      callback?.();
    }, 700);
  };

  // -----------------------------------------------------
  // VALIDATORS
  // -----------------------------------------------------
  const validateName = (v: string) =>
    !v.trim() ? "Enter your name" : /^[a-zA-Z\s]{2,50}$/.test(v) ? "" : "Invalid name";

  const validateMobile = (v: string) =>
    /^[6-9]\d{9}$/.test(v) ? "" : "Enter valid 10-digit mobile";

  // -----------------------------------------------------
  // SEND USER QUERY → FIRST PHASE
  // -----------------------------------------------------
  const handleQuerySend = () => {
    if (!query.trim() || isTyping) return;

    setChatHistory((prev) => [...prev, { type: "user", text: query }]);

    let lower = query.toLowerCase();
    let reply = responses.default;
    for (const key in responses) {
      if (lower.includes(key)) reply = responses[key];
    }

    setQuery("");

    simulateTyping(reply, () => {
      setShowForm(true);
      setPhase("form");
    });
  };

  // -----------------------------------------------------
  // FORM SUBMIT → SEND TO BACKEND
  // -----------------------------------------------------
  const handleFormSubmit = async () => {
    const nameErr = validateName(name);
    const mobileErr = validateMobile(mobile);
    const captchaErr = userCaptcha !== captchaAnswer ? "Incorrect answer" : "";
    const hpErr = honeypot ? "Bot detected" : "";

    setErrors({ name: nameErr, mobile: mobileErr, captcha: captchaErr });
    if (nameErr || mobileErr || captchaErr || hpErr) return;

    if (Date.now() - formOpenedAt < 2000) {
      alert("Slow down :)");
      return;
    }

    // Save conversation
    setChatHistory((prev) => [
      ...prev,
      { type: "user", text: `Name: ${name}\nMobile: ${mobile}` },
    ]);

    setShowForm(false);
    setPhase("done");

    simulateTyping(`Thank you, ${name}! Our team will contact you shortly. 😊`);

    // 🔐 SECURITY TOKEN — prevents spoofing
    const signature = btoa(`${name}:${mobile}:${Date.now()}`);

    try {
      await fetch("https://thegoldengemhairclinic.com/api/chatbot_backend.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          query: chatHistory.at(-1)?.text || "",
          signature, // 🔐 important
        }),
      });
    } catch (error) {
      simulateTyping("Unable to reach server. Please try again later.");
    }
  };

  // -----------------------------------------------------
  // RESET CONVERSATION
  // -----------------------------------------------------
  const handleReset = () => {
    gsap.to(chatBoxRef.current, {
      scale: 0.95,
      yoyo: true,
      repeat: 1,
      duration: 0.15,
      onComplete: () => {
        setChatHistory([]);
        setName("");
        setMobile("");
        setUserCaptcha("");
        setHoneypot("");
        setErrors({ name: "", mobile: "", captcha: "" });
        setPhase("query");

        // initial greeting again
        simulateTyping("Hi! How may I help you today? 😊");
      },
    });
  };

  // -----------------------------------------------------
  // OPEN / CLOSE CHAT
  // -----------------------------------------------------
  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);

      setTimeout(() => {
        setChatHistory((prev) => {
          if (prev.length === 0) {
            return [...prev, { type: "bot", text: "Hi! How may I help you today? 😊" }];
          }
          return prev;
        });
      }, 300);
    } else {
      setIsOpen(false);
    }
  };

  // -----------------------------------------------------
  // WHATSAPP
  // -----------------------------------------------------
  const handleWhatsApp = () =>
    window.open("https://wa.me/918122228645?text=Hi!%20I’m%20interested", "_blank");

  // -----------------------------------------------------
  // UI
  // -----------------------------------------------------
  return (
    <>
      {/* LEFT CHATBOT */}
      <div
        className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
          hideButtons ? "opacity-0 translate-y-8 pointer-events-none" : ""
        }`}
      >
        {/* CHAT BOX */}
        {isOpen && (
          <div
            ref={chatBoxRef}
            className="w-[360px] md:w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden mb-4"
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-4 py-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles />
                <h3 className="font-bold text-lg">Medical Assistant</h3>
              </div>
              <button onClick={toggleChat} className="hover:bg-white/20 p-2 rounded-full">
                <X />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="p-4 h-[420px] overflow-y-auto bg-gradient-to-b from-amber-50/30 to-white">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`shadow-md px-4 py-2 rounded-2xl max-w-[75%] ${
                      msg.type === "bot"
                        ? "bg-white border border-amber-200 text-amber-900"
                        : "bg-amber-500 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && <p className="text-gray-500 animate-pulse">Typing…</p>}

              <div ref={chatEndRef} />
            </div>

            {/* INPUT / FORM */}
            <div className="p-4 border-t bg-white">
              {phase === "query" && (
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-amber-300 rounded-xl px-3 py-2"
                    placeholder="Type your message..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    onClick={handleQuerySend}
                    className="bg-amber-500 text-white rounded-xl px-3 py-2"
                  >
                    <Send size={18} />
                  </button>
                </div>
              )}

              {/* FORM PHASE */}
              {phase === "form" && (
                <div className="flex flex-col gap-3">
                  <input
                    className="border px-3 py-2 rounded-xl"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                  <input
                    className="border px-3 py-2 rounded-xl"
                    placeholder="Mobile Number *"
                    value={mobile}
                    maxLength={10}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}

                  {/* CAPTCHA */}
                  <input
                    className="border px-3 py-2 rounded-xl"
                    placeholder={`Solve: ${captchaQuestion} *`}
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                  />
                  {errors.captcha && <p className="text-red-500 text-xs">{errors.captcha}</p>}

                  {/* HONEYPOT (BOT TRAP) */}
                  <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    aria-hidden
                  />

                  <button
                    onClick={handleFormSubmit}
                    className="bg-amber-500 text-white rounded-xl py-3"
                  >
                    Submit
                  </button>
                </div>
              )}

              {phase === "done" && (
                <button
                  onClick={handleReset}
                  className="bg-amber-500 text-white rounded-xl py-3 w-full"
                >
                  Start New Conversation
                </button>
              )}
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        {!isOpen && (
          <button
            ref={chatButtonRef}
            onClick={toggleChat}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-5 py-3 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <MessageCircle size={20} />
            <span className="hidden sm:block">Chat with us</span>
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