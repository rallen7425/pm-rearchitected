import { NextRequest, NextResponse } from "next/server";
import { searchGlossary, type GlossaryDomain } from "@/lib/glossary";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  if (!q) {
    return NextResponse.json({ error: "Missing required query param: q" }, { status: 400 });
  }

  const category = searchParams.get("category") ?? undefined;
  const maxPriorityParam = searchParams.get("maxPriority");
  const maxPriority = maxPriorityParam ? Number(maxPriorityParam) : undefined;
  const domain = (searchParams.get("domain") as GlossaryDomain | null) ?? "ai";

  try {
    const results = await searchGlossary(q, { category, maxPriority, domain });
    return NextResponse.json({ results });
  } catch (error) {
    console.error("Glossary search failed:", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
