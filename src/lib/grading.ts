import { getAnthropicClient } from "./anthropic";

export type GradeVerdict = "Correct" | "Partial" | "Incorrect";

const VALID_VERDICTS: GradeVerdict[] = ["Correct", "Partial", "Incorrect"];

export async function gradeOpenEndedAnswer(
  term: string,
  correctDefinition: string,
  userAnswer: string
): Promise<GradeVerdict> {
  const prompt = `You are grading a short quiz answer about an AI/product-management glossary term.

Term: "${term}"
Correct definition: "${correctDefinition}"
User's answer: "${userAnswer}"

Judge whether the user's answer correctly captures the meaning of the term compared to the correct definition. Respond with ONLY valid JSON, no other text:
{"verdict":"Correct"|"Partial"|"Incorrect"}

- "Correct": the answer is essentially right, even if phrased differently or less formally.
- "Partial": on the right track but incomplete, imprecise, or missing a key part of the meaning.
- "Incorrect": wrong, off-topic, or the user didn't actually attempt a real answer.`;

  const message = await getAnthropicClient().messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 50,
    temperature: 0,
    messages: [{ role: "user", content: prompt }],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";
  const match = text.match(/\{[\s\S]*\}/);
  const verdict = match ? (JSON.parse(match[0]).verdict as string) : "";

  return VALID_VERDICTS.includes(verdict as GradeVerdict) ? (verdict as GradeVerdict) : "Partial";
}
