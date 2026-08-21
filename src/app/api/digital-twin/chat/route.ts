import { NextRequest } from "next/server";
import { getAnthropicClient } from "@/lib/anthropic";
import { buildDigitalTwinSystemPrompt } from "@/lib/digital-twin";
import { checkRateLimit } from "@/lib/rate-limit";

const MAX_TOKENS = 600;
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

type ChatMessage = { role: "user" | "assistant"; content: string };

function getClientKey(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function parseMessages(body: unknown): ChatMessage[] | null {
  if (!body || typeof body !== "object" || !Array.isArray((body as { messages?: unknown }).messages)) {
    return null;
  }
  const messages = (body as { messages: unknown[] }).messages;
  if (messages.length === 0 || messages.length > MAX_MESSAGES) return null;

  const parsed: ChatMessage[] = [];
  for (const m of messages) {
    if (
      !m ||
      typeof m !== "object" ||
      ((m as { role?: unknown }).role !== "user" && (m as { role?: unknown }).role !== "assistant") ||
      typeof (m as { content?: unknown }).content !== "string"
    ) {
      return null;
    }
    const content = (m as { content: string }).content.trim();
    if (!content || content.length > MAX_MESSAGE_LENGTH) return null;
    parsed.push({ role: (m as { role: "user" | "assistant" }).role, content });
  }
  return parsed;
}

export async function POST(request: NextRequest) {
  const clientKey = getClientKey(request);
  const rateLimit = checkRateLimit(clientKey);
  if (!rateLimit.allowed) {
    return new Response(JSON.stringify({ error: "Too many requests. Please try again shortly." }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(rateLimit.retryAfterSeconds ?? 60),
      },
    });
  }

  const body = await request.json().catch(() => null);
  const messages = parseMessages(body);
  if (!messages) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const anthropicStream = getAnthropicClient().messages.stream({
          model: "claude-sonnet-5",
          max_tokens: MAX_TOKENS,
          system: buildDigitalTwinSystemPrompt(),
          messages,
        });

        for await (const event of anthropicStream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (error) {
        console.error("Digital Twin chat stream failed:", error);
        controller.enqueue(encoder.encode("\n\n[Something went wrong. Please try again.]"));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
