import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { systemInstruction, contents } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });

    const stream = await ai.models.generateContentStream({
      model: "gemini-2.0-flash", // faster
      contents,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    // 🔥 VERY IMPORTANT HEADERS
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of stream) {
      if (chunk.text) {
        res.write(chunk.text);
      }
    }

    res.end(); // 🔥 CRITICAL
  } catch (error) {
    console.error("Streaming Error:", error);
    res.status(500).end("AI service failed");
  }
}
