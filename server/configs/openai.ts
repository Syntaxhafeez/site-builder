import OpenAI from "openai";

const OpenAIClient = OpenAI as unknown as typeof OpenAI;

const openai = new OpenAIClient({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.AI_API_KEY!,
  defaultHeaders: {
    "HTTP-Referer": process.env.FRONTEND_URL || "https://site-builder-fawn.vercel.app",
    "X-Title": "AI Website Builder"
  }
});

export default openai;