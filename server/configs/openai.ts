export const runtime = "nodejs";

import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.AI_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://site-builder-fawn.vercel.app",
    "X-Title": "AI Website Builder"
  }
});

export default openai;