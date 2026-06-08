"use client";

import { useState } from "react";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";

import { Wordmark } from "@/components/layout/Wordmark";
import { Drawer } from "@/components/ui/Drawer";
import { IconButton } from "@/components/ui/IconButton";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  navigationItems: NavigationItem[];
  utilityItems: NavigationItem[];
};

export function MobileNavigation({
  navigationItems,
  utilityItems,
}: Readonly<MobileNavigationProps>) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <IconButton
          aria-label="Open navigation menu"
          className="bg-porcelain/80"
          onClick={() => setOpen(true)}
          size="sm"
          variant="solid"
        >
          <Menu className="h-4 w-4" />
        </IconButton>
        <Wordmark className="text-[1.9rem] tracking-[0.2em]" />
        <div className="flex items-center gap-1.5">
          <IconButton
            aria-label="Search"
            className="bg-porcelain/55"
            href="/search"
            size="sm"
            variant="solid"
          >
            <Search className="h-4 w-4" />
          </IconButton>
          <IconButton
            aria-label="Cart"
            className="bg-porcelain/55"
            href="/cart"
            size="sm"
            variant="solid"
          >
            <ShoppingBag className="h-4 w-4" />
          </IconButton>
        </div>
      </div>

      <Drawer onClose={() => setOpen(false)} open={open} title="AMARÉ">
        <div className="space-y-8">
          <p className="max-w-xs text-sm leading-7 text-muted">
            Everyday lip essentials made for polished shine, easy gifting, and on-the-go beauty moments.
          </p>

          <nav aria-label="Mobile primary navigation">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className="block rounded-[1.2rem] border border-transparent px-4 py-3 font-display text-[1.55rem] tracking-[-0.03em] text-espresso hover:border-border/80 hover:bg-porcelain focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-[1.45rem] border border-border/75 bg-porcelain/75 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Utility
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {utilityItems.map((item) => {
                const Icon =
                  item.label === "Search"
                    ? Search
                    : item.label === "Account"
                      ? UserRound
                      : item.label === "Wishlist"
                        ? Heart
                        : ShoppingBag;

                return (
                  <Link
                    className="flex items-center gap-3 rounded-[1.2rem] border border-border/75 bg-ivory px-4 py-3 text-sm font-medium text-espresso hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20"
                    href={item.href}
                    key={item.label}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
