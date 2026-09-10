"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SUGGESTED_PROMPTS = [
  "Tell me about your career.",
  "What's your take on Agile in the AI era?",
  "Why did you leave UKG?",
  "What are you looking for next?",
];

const DISCLAIMER =
  "This is an AI representation of Rick, built from his own words, not Rick himself. For anything time-sensitive or personal, reach out to him directly.";

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

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  // ─── Entry state: the interaction box, centered ──────────────────────
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-[32px]">
          What would you like to know?
        </h2>
        <p className="mt-2 max-w-xl text-base text-muted-foreground">
          Ask about Rick&apos;s career, his approach to product management, or what he&apos;s looking
          for next.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-2xl rounded-2xl border border-border bg-card p-4 shadow-card transition-all focus-within:border-primary/40 focus-within:shadow-card-hover sm:p-5"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            placeholder="Ask something..."
            className="w-full resize-none border-0 bg-transparent p-0 text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 sm:text-base"
          />
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-50"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              className="inline-flex items-center rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-card transition-all hover:border-primary/30 hover:bg-secondary sm:text-[13px]"
            >
              {prompt}
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground">{DISCLAIMER}</p>
      </div>
    );
  }

  // ─── Conversation state: streaming chat ─────────────────────────────
  return (
    <div className="flex max-h-[70vh] min-h-[420px] flex-col rounded-2xl border border-border bg-card shadow-card">
      <div className="border-b border-border px-4 py-3 sm:px-5">
        <p className="text-xs leading-relaxed text-muted-foreground">{DISCLAIMER}</p>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-5">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={
                message.role === "user"
                  ? "max-w-[85%] rounded-lg bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground"
                  : "max-w-[85%] whitespace-pre-wrap rounded-lg bg-secondary px-4 py-2.5 text-sm leading-relaxed text-secondary-foreground"
              }
            >
              {message.role === "assistant" && message.content === "" && status === "streaming" ? (
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:0.15s]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:0.3s]" />
                </span>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-end gap-2 border-t border-border p-3 sm:p-4"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Ask a follow-up..."
          disabled={status === "streaming"}
          className="max-h-32 flex-1 resize-none rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "streaming" || !input.trim()}
          aria-label="Send"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-50"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
