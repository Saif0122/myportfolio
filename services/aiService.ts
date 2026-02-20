import { ChatMessage, BlogPost } from "../types";

/**
 * SYSTEM PROMPTS
 */
const SYSTEM_PROMPTS = {
  assistant: `You are Nexus, Saiful Islam's AI assistant.
Keep answers concise (under 3 sentences) unless asked for details.`,

  project: `You are a Senior System Architect.
Create a 12-point MERN stack blueprint in strict plain text format.`,

  blog: (postTitle: string, context: string) => `You are a Technical Editor for "${postTitle}".
CONTEXT: ${context}
Explain clearly at senior level.`
};

/**
 * STREAMING AI GENERATOR
 */
async function streamAiContent(
  systemInstruction: string,
  contents: any,
  onChunk: (chunk: string) => void
) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      systemInstruction,
      contents,
    }),
  });

  if (!response.body) {
    throw new Error("Streaming not supported");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    onChunk(chunk);
  }
}

/**
 * AI Chat (Streaming)
 */
export async function streamAIChatResponse(
  messages: ChatMessage[],
  onChunk: (chunk: string) => void
) {
  // 🔥 SPEED BOOST: send only last 6 messages
  const trimmed = messages.slice(-6);

  const formattedMessages = trimmed.map(m => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }]
  }));

  await streamAiContent(
    SYSTEM_PROMPTS.assistant,
    formattedMessages,
    onChunk
  );
}
