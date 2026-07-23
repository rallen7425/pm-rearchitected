import { NextRequest, NextResponse } from "next/server";
import { gradeOpenEndedAnswer } from "@/lib/grading";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const term = body?.term?.trim();
  const correctDefinition = body?.correctDefinition?.trim();
  const userAnswer = body?.userAnswer?.trim();

  if (!term || !correctDefinition || !userAnswer) {
    return NextResponse.json(
      { error: "Missing required fields: term, correctDefinition, userAnswer" },
      { status: 400 }
    );
  }

  try {
    const verdict = await gradeOpenEndedAnswer(term, correctDefinition, userAnswer);
    return NextResponse.json({ verdict });
  } catch (error) {
    console.error("Open-ended grading failed:", error);
    return NextResponse.json({ error: "Grading failed" }, { status: 500 });
  }
}
