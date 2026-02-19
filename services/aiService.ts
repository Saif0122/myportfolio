
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, BlogPost } from '../types';

/**
 * ------------------------------------------------------------------
 * 🔑 API KEY CONFIGURATION
 * ------------------------------------------------------------------
 * You only need to configure the key HERE. It applies to all AI features.
 * 
 * Option 1 (Recommended): Set VITE_API_KEY or REACT_APP_API_KEY in .env
 * Option 2 (Quick Test): Paste your key directly in the quotes below.
 */
const API_KEY = process.env.GEMINI_API_KEY as string;


const SYSTEM_PROMPTS = {
  assistant: `You are Nexus, Saiful Islam's AI portfolio assistant.
  
PERSONA: Professional, witty, and highly technical Senior Engineer.
CONTEXT: Saiful is a MERN Stack Architect specializing in scalable SaaS.
GOAL: Answer questions about Saiful's skills, experience, and contact info.
CONTACT: If asked to hire, link to: https://wa.me/923169751636?text=Hi%20Saiful

Keep answers concise (under 3 sentences) unless asked for details.`,

  project: `You are a Senior System Architect.
TASK: Create a 12-point technical blueprint for the user's project idea.
MODEL: MERN Stack (MongoDB, Express, React, Node.js).
FORMAT: Strictly plain text. Do not use markdown bolding (**) in headers.

REQUIRED OUTPUT FORMAT (Exactly this style):
1. Architectural Pattern: [Content]
2. Frontend Strategy: [Content]
3. Backend Structure: [Content]
4. Database Schema: [Content]
5. Scaling Logic: [Content]
6. Security Protocol: [Content]
7. Caching Layer: [Content]
8. DevOps Pipeline: [Content]
9. Observability: [Content]
10. API Specification: [Content]
11. Performance Benchmarks: [Content]
12. Risk Mitigation: [Content]`,

  blog: (postTitle: string, context: string) => `You are a Technical Editor for the article "${postTitle}".
CONTEXT: ${context}
TASK: Explain the architectural concepts from the article to the user.
TONE: Educational, senior engineering level.
CONSTRAINT: Answer based strictly on the provided context.`
};

/**
 * Unified AI Generator
 */
async function generateAiContent(modelName: string, systemInstruction: string, contents: any) {
  try {
    if (!API_KEY || API_KEY.length < 10) {
      console.error("❌ API Key Missing! Paste it in services/aiService.ts");
      throw new Error("MISSING_KEY");
    }

    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Using gemini-3-flash-preview for all tasks to ensure Free Tier reliability
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', 
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Nexus AI Error:", error);
    if (error.message.includes("MISSING_KEY")) return "⚠️ API Key missing. Please check services/aiService.ts";
    return "Nexus Core offline (Rate Limit or Network Error). Try again in 10s.";
  }
}

export async function getBlogAssistantResponse(messages: ChatMessage[], post: BlogPost): Promise<string> {
  // Simplify context to save tokens
  const context = JSON.stringify({
    architecture: post.technicalSegments.architecturalDecisions,
    tradeoffs: post.technicalSegments.tradeOffs,
    scaling: post.technicalSegments.scalingStrategy
  });
  
  const systemPrompt = SYSTEM_PROMPTS.blog(post.title, context);
  const formattedMessages = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  return await generateAiContent('gemini-3-flash-preview', systemPrompt, formattedMessages);
}

export async function getProjectConsultation(idea: string): Promise<string> {
  const contents = [{ 
    role: 'user', 
    parts: [{ text: `Create a MERN stack engineering blueprint for: ${idea}` }] 
  }];

  return await generateAiContent('gemini-3-flash-preview', SYSTEM_PROMPTS.project, contents);
}

export async function getAIChatResponse(messages: ChatMessage[]): Promise<string> {
  const formattedMessages = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  return await generateAiContent('gemini-3-flash-preview', SYSTEM_PROMPTS.assistant, formattedMessages);
}
