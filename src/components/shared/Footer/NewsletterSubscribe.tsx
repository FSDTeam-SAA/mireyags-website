"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type NewsletterResponse = {
  success: boolean;
  message?: string;
};

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["newsletter"],
    mutationFn: async (payload: { email: string }): Promise<NewsletterResponse> => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      return res.json();
    },

    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Something went wrong!");
        return;
      }

      toast.success(data?.message || "Newsletter subscribed successfully");
      setEmail("");
    },

    onError: () => {
      toast.error("Unable to subscribe. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    mutate({ email: trimmedEmail });
  };

  return (
    <div className="pt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <Input
            type="email"
            placeholder="Enter your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isPending}
            className="h-10 border-y border-l border-white/40 rounded-l-[8px] bg-white text-black focus:outline-none ring-0 placeholder:text-black/50"
          />

          <Button
            type="submit"
            disabled={isPending}
            className="h-10 bg-white text-black font-bold leading-[120%] rounded-r-[8px] hover:bg-white/80"
          >
            {isPending ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </form>
    </div>
  );
}
