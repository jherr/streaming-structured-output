import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";

import { RecipeSchema } from "@/src/recipeSchema";

const modelName = "gpt-4o-2024-08-06";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamObject({
    model: openai(modelName, { structuredOutputs: true }),
    schema: RecipeSchema,
    prompt: `Recipe for ${prompt || "chocolate brownies"}`,
  });

  return result.toTextStreamResponse();
}
