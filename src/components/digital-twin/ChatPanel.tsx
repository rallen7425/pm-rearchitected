"use client";

import { useRef, useState } from "react";
import { Send } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SUGGESTED_PROMPTS = [
  "Tell me about your career.",
  "What's your take on Agile in the AI era?",
  "Why did you leave UKG?",
  "What are you looking for next?",
];

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "streaming" | "error">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    });
  };

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || status === "streaming") return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setStatus("streaming");
    scrollToBottom();

    try {
      const res = await fetch("/api/digital-twin/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: prev[prev.length - 1].content + chunk },
        ]);
        scrollToBottom();
      }

      setStatus("idle");
    } catch {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "assistant", content: "Something went wrong. Please try again in a moment." },
      ]);
      setStatus("error");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="rounded-lg border border-border bg-card shadow-card flex flex-col h-[70vh] max-h-[720px]">
      <div className="border-b border-border px-4 py-3 sm:px-6">
        <p className="text-xs text-muted-foreground leading-relaxed">
          This is an AI representation of Rick, built from his own words, not Rick himself. For
          anything time-sensitive or personal, reach out to him directly.
        </p>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 space-y-4">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center gap-6">
            <p className="text-sm text-muted-foreground max-w-sm">
              Ask about Rick&apos;s career, his approach to product management, or what he&apos;s
              looking for next.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-md">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={
                message.role === "user"
                  ? "max-w-[85%] rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm leading-relaxed"
                  : "max-w-[85%] rounded-lg bg-secondary text-secondary-foreground px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap"
              }
            >
              {message.role === "assistant" && message.content === "" && status === "streaming" ? (
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse [animation-delay:0.15s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse [animation-delay:0.3s]" />
                </span>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border p-3 sm:p-4 flex items-end gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Rick's Digital Twin a question..."
          disabled={status === "streaming"}
          className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "streaming" || !input.trim()}
          aria-label="Send"
          className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
