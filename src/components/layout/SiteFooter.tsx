import Link from "next/link";

import { NewsletterSignup } from "@/components/layout/NewsletterSignup";
import { Wordmark } from "@/components/layout/Wordmark";
import { Container } from "@/components/ui/Container";

const shopLinks = [
  { href: "/shop?collection=best-sellers", label: "Best Sellers" },
  { href: "/shop?collection=lips", label: "Lips" },
  { href: "/shop?collection=blush", label: "Blush" },
  { href: "/shop?collection=sets-gifts", label: "Sets & Gifts" },
];

const helpLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
  { href: "/search", label: "Search" },
  { href: "/cart", label: "Cart Preview" },
];

const socialPlaceholders = ["Instagram", "TikTok", "Pinterest"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-porcelain/85">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,0.72fr))]">
          <div className="space-y-5">
            <Wordmark />
            <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
              Everyday lip essentials made to feel polished, expressive, and giftable.
              Placeholder brand details remain intentionally minimal until verified by the
              store owner.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold uppercase tracking-[0.2em] text-espresso">
                Social placeholders
              </p>
              <div className="flex flex-wrap gap-3">
                {socialPlaceholders.map((item) => (
                  <span
                    className="rounded-full border border-border bg-ivory px-4 py-2"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Shop
            </h2>
            <ul className="space-y-3 text-sm">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link className="text-espresso hover:text-wine" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Help
            </h2>
            <ul className="space-y-3 text-sm">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link className="text-espresso hover:text-wine" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Newsletter
              </p>
              <h2 className="mt-3 font-display text-[2rem] leading-none tracking-[-0.03em] text-espresso">
                Join the Gloss List
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Get first access to new shades, limited sets, and members-only offers.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/80 pt-6 text-xs uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AMARÉ Cosmetics. All rights reserved.</p>
          <p>Payment methods placeholder until Shopify checkout is connected.</p>
        </div>
      </Container>
    </footer>
  );
}
