"use client";

import { createPokemon } from "@/app/server-actions/createPokemon";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { useToast } from "../ui/use-toast";

export default function AddPokemon() {
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  return (
    <Button
      onClick={async () => {
        try {
          await createPokemon();
        } catch (e: any) {
          toast({
            title: "Something went wrong!!!",
            description: "Please Try again",
            variant: "destructive",
          });
        }
      }}
    >
      Add Pokemon
    </Button>
  );
}
