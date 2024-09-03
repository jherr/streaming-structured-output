import { NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";

import { RecipeSchema } from "@/src/recipeSchema";

const modelName = "gpt-4o-2024-08-06";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const client = new OpenAI();

  const response = await client.chat.completions.create({
    model: modelName,
    messages: [
      {
        role: "user",
        content: `Recipe for ${prompt || "chocolate brownies"}`,
      },
    ],
    response_format: zodResponseFormat(RecipeSchema, "recipeSchema"),
  });

  return NextResponse.json(
    JSON.parse(response.choices[0].message.content || "")
  );
}
