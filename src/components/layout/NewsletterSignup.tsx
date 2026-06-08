"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type NewsletterSignupProps = {
  tone?: "light" | "dark";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup({
  tone = "light",
}: Readonly<NewsletterSignupProps>) {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!emailPattern.test(email)) {
      setMessage("Enter a valid email address before joining the Gloss List.");
      return;
    }

    setMessage("The Gloss List opens soon. Email signup will be connected before launch.");
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`newsletter-email-${tone}`}>
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className={cn(
            "min-h-12 flex-1 rounded-full border px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
            tone === "dark"
              ? "border-white/16 bg-porcelain text-espresso placeholder:text-muted"
              : "border-border bg-porcelain text-espresso placeholder:text-muted",
          )}
          id={`newsletter-email-${tone}`}
          name="email"
          placeholder="Email address"
          type="email"
        />
        <Button
          className={cn(
            "sm:min-w-40",
            tone === "dark" && "bg-porcelain text-berry hover:bg-ivory",
          )}
          type="submit"
        >
          Join the Gloss List
        </Button>
      </div>
      <p
        aria-live="polite"
        className={cn("text-sm", tone === "dark" ? "text-white/72" : "text-muted")}
      >
        {message ?? "The Gloss List opens soon. Email signup will be connected before launch."}
      </p>
    </form>
  );
}
