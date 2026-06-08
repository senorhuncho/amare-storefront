"use client";

import { useEffect, useRef, useState } from "react";

import { Heart, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";

type ProductCardActionsProps = {
  available: boolean;
};

export function ProductCardActions({
  available,
}: Readonly<ProductCardActionsProps>) {
  const [wishlisted, setWishlisted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showTemporaryMessage = (nextMessage: string) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    setMessage(nextMessage);
    timeoutRef.current = window.setTimeout(() => setMessage(null), 1800);
  };

  const handleWishlistToggle = () => {
    setWishlisted((currentValue) => {
      const nextValue = !currentValue;

      showTemporaryMessage(
        nextValue
          ? "Saved in preview mode. Persistent wishlist arrives later."
          : "Removed from preview wishlist.",
      );

      return nextValue;
    });
  };

  const handleQuickAdd = () => {
    if (!available) {
      showTemporaryMessage("This item is marked sold out in the mock catalog.");
      return;
    }

    showTemporaryMessage("Preview only. Cart connection arrives in Milestone 5.");
  };

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2.5">
        <Button disabled={!available} fullWidth onClick={handleQuickAdd} size="sm">
          <ShoppingBag className="h-4 w-4" />
          {available ? "Quick Add" : "Sold Out"}
        </Button>
        <IconButton
          aria-label={wishlisted ? "Remove from wishlist preview" : "Save to wishlist preview"}
          className={cn(
            "shrink-0 bg-ivory",
            wishlisted && "border-border bg-blush/50 text-wine hover:bg-blush",
          )}
          onClick={handleWishlistToggle}
          size="sm"
          variant="solid"
        >
          <Heart className={cn("h-4 w-4", wishlisted && "fill-current")} />
        </IconButton>
      </div>
      <p aria-live="polite" className="min-h-10 text-[0.74rem] leading-5 text-muted">
        {message}
      </p>
    </div>
  );
}
