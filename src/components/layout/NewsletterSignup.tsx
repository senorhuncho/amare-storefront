"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";

export function NewsletterSignup() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Coming soon. Newsletter signup will be connected after service setup.");
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="min-h-12 flex-1 rounded-full border border-border bg-porcelain px-5 text-sm text-espresso placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20"
          id="newsletter-email"
          name="email"
          placeholder="Email address"
          type="email"
        />
        <Button className="sm:min-w-40" type="submit">
          Join the Gloss List
        </Button>
      </div>
      <p aria-live="polite" className="text-sm text-muted">
        {message ?? "Coming soon until a newsletter service is connected."}
      </p>
    </form>
  );
}
