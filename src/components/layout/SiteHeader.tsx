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
    <header className="sticky top-0 z-40 border-b border-border/65 bg-ivory/95 backdrop-blur-sm">
      <Container className="py-3 lg:py-4">
        <MobileNavigation
          navigationItems={[...navigationItems]}
          utilityItems={mobileUtilityItems}
        />

        <div className="hidden items-center justify-between gap-8 lg:flex">
          <Wordmark className="shrink-0" />

          <nav aria-label="Primary navigation" className="min-w-0 flex-1">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 xl:gap-x-5">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={cn(
                      "rounded-full px-3 py-2 text-[0.95rem] font-medium tracking-[0.02em] text-espresso/88 hover:bg-porcelain/70 hover:text-wine",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/15",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            {utilityItems.map((item) => (
              <IconButton
                aria-label={item.label}
                className="bg-porcelain/75"
                href={item.href}
                key={item.label}
                size="sm"
                variant="solid"
              >
                <item.icon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
