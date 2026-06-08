import Link from "next/link";
import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Wordmark } from "@/components/layout/Wordmark";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/shop?collection=new", label: "New" },
  { href: "/shop?collection=best-sellers", label: "Best Sellers" },
  { href: "/shop?collection=lips", label: "Lips" },
  { href: "/shop?collection=blush", label: "Blush" },
  { href: "/shop?collection=sets-gifts", label: "Sets & Gifts" },
  { href: "/shop?curation=build-your-lip-combo", label: "Build Your Lip Combo" },
  { href: "/about", label: "Our Story" },
] as const;

const utilityItems = [
  { href: "/search", icon: Search, label: "Search" },
  { href: "/account", icon: UserRound, label: "Account" },
  { href: "/wishlist", icon: Heart, label: "Wishlist" },
  { href: "/cart", icon: ShoppingBag, label: "Cart" },
] as const;

const mobileUtilityItems = utilityItems.map(({ href, label }) => ({ href, label }));

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-porcelain/90 backdrop-blur-md">
      <Container className="py-3 lg:py-5">
        <MobileNavigation
          navigationItems={[...navigationItems]}
          utilityItems={mobileUtilityItems}
        />

        <div className="hidden items-center justify-between gap-8 lg:flex">
          <Wordmark className="shrink-0" />

          <nav aria-label="Primary navigation" className="min-w-0 flex-1">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={cn(
                      "text-sm font-medium tracking-[0.02em] text-espresso/88 hover:text-wine",
                      "rounded-full px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/15",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            {utilityItems.map((item) => (
              <IconButton aria-label={item.label} href={item.href} key={item.label} size="sm">
                <item.icon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
