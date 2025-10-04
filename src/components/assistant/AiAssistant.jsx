import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TextArea from "rc-textarea";
import { Loader2, Send, Stethoscope, X } from "lucide-react";

const GEMINI_MODEL = "gemini-2.5-flash-lite";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const MAX_HISTORY_MESSAGES = 12;

const CONTEXT_CONFIG = [
  {
    id: "dashboard",
    match: (path) => path === "/patient/dashboard",
    heading: "AI Health Companion",
    greeting: "How are you feeling today? I can help analyze your symptoms.",
    responseIntro: "Here are a few ways I can support you right now:",
    suggestions: [
      "Describe when your symptoms started, their intensity, and what makes them better or worse.",
      "Share any vital signs or recent lifestyle changes that might be relevant.",
      "Ask me for quick self-care tips while you wait to talk to your doctor.",
    ],
    quickPrompts: ["I have a headache", "Log my blood pressure"],
  },
  {
    id: "book",
    match: (path) => path === "/patient/book",
    heading: "Find the right doctor",
    greeting: "Need help choosing a doctor? Tell me your symptoms and I’ll suggest the right specialist.",
    responseIntro: "Here’s what we can do together:",
    suggestions: [
      "Share your main concern so I can recommend the ideal specialist.",
      "Let me know preferred days and times, and I’ll help narrow the list.",
      "Ask about telehealth vs in-person options to fit your schedule.",
    ],
    quickPrompts: ["Who should I see for chest pain?", "Find a virtual consult"],
  },
  {
    id: "appointments",
    match: (path) => path === "/patient/appointments",
    heading: "Stay on schedule",
    greeting: "Do you want me to remind you about your upcoming appointments or suggest best times to book?",
    responseIntro: "Let's make sure your schedule works for you:",
    suggestions: [
      "Ask me to summarize your upcoming visits and prepare reminders.",
      "Share your availability so I can propose open slots.",
      "Tell me if you need follow-up questions for your care team.",
    ],
    quickPrompts: ["When is my next appointment?", "Suggest a follow-up time"],
  },
  {
    id: "prescriptions",
    match: (path) => path === "/patient/prescriptions",
    heading: "Understand your prescriptions",
    greeting: "Confused about your medicine? Paste your prescription and I’ll explain it in simple words.",
    responseIntro: "Here’s how I can help clarify things:",
    suggestions: [
      "Share the medication name and dosage so I can explain what it's for.",
      "Ask about common side effects or what to do if you miss a dose.",
      "Let me know if you need tips for remembering to take your meds.",
    ],
    quickPrompts: ["Explain Atorvastatin", "What if I miss a dose?"],
  },
];

const DEFAULT_CONTEXT = {
  id: "general",
  heading: "AI Health Companion",
  greeting: "How can I support your health journey today?",
  responseIntro: "Here’s how I can lend a hand:",
  suggestions: [
    "Describe how you're feeling and I'll share next steps.",
    "Ask me to summarize information or translate medical terms.",
    "Let me know if you want tips to prepare for your next consult.",
  ],
  quickPrompts: ["I feel dizzy", "Help me prepare for a visit"],
};

const getContextForPath = (path) => {
  const context = CONTEXT_CONFIG.find((entry) => entry.match(path));
  if (context) {
    return context;
  }
  if (path.startsWith("/patient/")) {
    return DEFAULT_CONTEXT;
  }
  return null;
};

const createMessage = (role, content) => ({
  id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  role,
  content,
});

const buildSystemInstruction = (context) => {
  const suggestionList = context.suggestions.map((line) => `• ${line}`).join("\n");
  return [
    "You are AI Health Companion, a virtual telemedicine assistant helping patients interpret information and make informed decisions.",
    "Respond with empathy, clarity, and within 180 words. Never provide diagnoses or direct medical orders. Encourage urgent care or emergency services for concerning symptoms.",
    `Current page focus: ${context.heading}.`,
    `Primary patient need: ${context.greeting}`,
    "Key talking points to emphasise:",
    suggestionList,
    "Offer 1-3 actionable suggestions, explain reasoning in simple language, and end with a gentle follow-up question when appropriate.",
  ].join("\n\n");
};

const trimHistory = (history) => history.slice(-MAX_HISTORY_MESSAGES);

const buildGeminiPayload = (history, context) => ({
  systemInstruction: {
    role: "system",
    parts: [{ text: buildSystemInstruction(context) }],
  },
  contents: trimHistory(history).map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  })),
  generationConfig: {
    temperature: 0.6,
    topP: 0.9,
    maxOutputTokens: 512,
  },
});

const extractGeminiText = (payload) => {
  const parts = payload?.candidates?.[0]?.content?.parts ?? [];
  return parts
    .map((part) => part.text)
    .filter(Boolean)
    .join("\n")
    .trim();
};

const AiAssistant = ({ currentPath }) => {
  const context = useMemo(() => getContextForPath(currentPath), [currentPath]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState("");

  const previousContextRef = useRef(context?.id ?? null);
  const scrollAnchorRef = useRef(null);
  const ongoingRequestRef = useRef(null);

  useEffect(() => () => {
    if (ongoingRequestRef.current) {
      ongoingRequestRef.current.abort();
    }
  }, []);

  useEffect(() => {
    if (!context) {
      return;
    }

    if (!messages.length && isOpen) {
      setMessages([createMessage("assistant", context.greeting)]);
      previousContextRef.current = context.id;
      return;
    }

    if (!isOpen) {
      previousContextRef.current = context.id;
      return;
    }

    if (previousContextRef.current !== context.id) {
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          `I’ve switched to ${context.heading.toLowerCase()}. ${context.greeting}`,
        ),
      ]);
      previousContextRef.current = context.id;
    }
  }, [context, isOpen, messages.length]);

  useEffect(() => {
    if (scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (error && isTyping) {
      setError("");
    }
  }, [error, isTyping]);

  if (!context) {
    return null;
  }

  const sendMessage = useCallback(
    async (rawInput) => {
      const trimmed = rawInput.trim();
      if (!trimmed) {
        return;
      }

      const userMessage = createMessage("user", trimmed);
      const history = [...messages, userMessage];

      setMessages(history);
      setInputValue("");
      setError("");

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        setMessages((prev) => [
          ...prev,
          createMessage(
            "assistant",
            "I'm not connected to the AI service yet. Ask an administrator to add a Gemini API key before trying again.",
          ),
        ]);
        return;
      }

      if (ongoingRequestRef.current) {
        ongoingRequestRef.current.abort();
      }

      const controller = new AbortController();
      ongoingRequestRef.current = controller;
      setIsTyping(true);

      try {
        const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildGeminiPayload(history, context)),
          signal: controller.signal,
        });

        if (!response.ok) {
          const details = await response.text();
          throw new Error(details || `Request failed with status ${response.status}`);
        }

        const data = await response.json();
        const replyText = extractGeminiText(data);
        const safeReply = replyText
          || "I couldn't generate a full response just now. Let's try again in a moment.";

        setMessages((prev) => [
          ...prev,
          createMessage("assistant", safeReply),
        ]);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        console.error("Gemini request failed", err);
        setError("I ran into an issue reaching Gemini. Please try again shortly.");
        setMessages((prev) => [
          ...prev,
          createMessage(
            "assistant",
            "I'm having trouble connecting to Gemini right now. Please check your network or API key configuration and try again soon.",
          ),
        ]);
      } finally {
        setIsTyping(false);
        ongoingRequestRef.current = null;
      }
    },
    [context, messages],
  );

  const handleToggle = () => {
    setIsOpen((prev) => {
      const nextState = !prev;
      if (!prev && !messages.length) {
        setMessages([createMessage("assistant", context.greeting)]);
        previousContextRef.current = context.id;
      }
      return nextState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickPrompt = (prompt) => {
    sendMessage(prompt);
  };

  const renderMessage = (message) => {
    const isAssistant = message.role === "assistant";
    return (
      <div
        key={message.id}
        className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}
      >
        <div
          className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
            isAssistant ? "bg-sky-50 text-slate-700" : "bg-sky-600 text-white"
          }`}
        >
          {message.content.split("\n").map((line, index) => (
            <p key={`${message.id}-${index}`} className="whitespace-pre-line">
              {line}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-sky-200">
          <header className="flex items-start justify-between gap-3 border-b border-slate-200 bg-sky-600/90 px-4 py-3 text-white">
            <div className="space-y-1">
              <div>
                <p className="text-xs uppercase tracking-wide text-sky-100">AI Assistant</p>
                <h2 className="text-base font-semibold">{context.heading}</h2>
                <p className="mt-1 text-xs text-sky-100/90">{context.greeting}</p>
              </div>
              {isTyping && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white/90">
                  <Loader2 className="h-3 w-3 animate-spin" aria-hidden="true" />
                  Generating response…
                </span>
              )}
            </div>
            <button
              type="button"
              className="rounded-full p-1 text-white/70 transition hover:bg-white/20 hover:text-white"
              onClick={handleToggle}
              aria-label="Close AI assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="flex max-h-96 flex-col gap-3 overflow-y-auto bg-slate-50 px-4 py-4">
            {messages.map(renderMessage)}
            {isTyping && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-3 py-2 text-xs font-medium text-sky-700 shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  The assistant is thinking…
                </div>
              </div>
            )}
            <span ref={scrollAnchorRef} aria-hidden="true" />
          </div>

          {error && (
            <div className="mx-4 mb-2 rounded-2xl border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-600">
              {error}
            </div>
          )}

          {context.quickPrompts?.length > 0 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {context.quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                  onClick={() => handleQuickPrompt(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3">
            <label className="sr-only" htmlFor="ai-assistant-input">
              Ask the AI assistant
            </label>
            <div className="flex items-end gap-2">
              <TextArea
                id="ai-assistant-input"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask anything..."
                autoSize={{ minRows: 2, maxRows: 5 }}
                onPressEnter={(event) => {
                  if (!event.shiftKey) {
                    event.preventDefault();
                    sendMessage(event.target.value);
                  }
                }}
                className="flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 disabled:bg-slate-300"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={handleToggle}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-500 text-white shadow-xl shadow-sky-200 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
        aria-label="Open AI health assistant"
      >
        <Stethoscope className="h-6 w-6" />
      </button>
    </div>
  );
};

export default AiAssistant;
