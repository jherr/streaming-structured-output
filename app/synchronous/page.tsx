"use client";
import { useState } from "react";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/components/recipe-card";

import { Loading } from "@/components/loading";
import { RecipeSchema } from "@/src/recipeSchema";

export default function SyncPage() {
  const [prompt, setPrompt] = useState("chocolate brownies");
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState<z.infer<typeof RecipeSchema>>();

  async function handleSubmit() {
    setPrompt("");
    setIsLoading(true);
    setRecipe(undefined);

    const data = await fetch("/synchronous/api", {
      method: "POST",
      body: JSON.stringify({ prompt: "chocolate brownies" }),
    });

    setIsLoading(false);
    setRecipe(await data.json());
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={prompt}
        disabled={isLoading}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder="What recipe do you want?"
      />
      {isLoading && <Loading />}
      <RecipeCard recipe={recipe} />
    </div>
  );
}
