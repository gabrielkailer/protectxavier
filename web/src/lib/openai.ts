import OpenAI from "openai";

/**
 * Centralized OpenAI client instance.
 * Used by the article generation cron job.
 */
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});
