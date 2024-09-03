import { z } from "zod";

export const RecipeSchema = z.object({
  name: z.string().describe("Name of the recipe"),
  ingredients: z
    .array(
      z.object({
        quantity: z.string().describe("quantity of the ingredient"),
        ingredient: z.string().describe("ingredient name"),
      })
    )
    .describe("list of engredients"),
  steps: z
    .array(z.string().describe("markdown content to describe the recipe step"))
    .describe("steps of the recipe"),
});
