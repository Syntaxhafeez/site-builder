import OpenAI from "openai";

// 👇 force runtime constructor (bypass TS construct typing)
const openai = new (OpenAI as any)({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.AI_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.FRONTEND_URL || "https://site-builder-fawn.vercel.app",
    "X-Title": "AI Website Builder"
  }
});

export default openai;
