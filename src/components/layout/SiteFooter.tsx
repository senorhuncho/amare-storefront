import Link from "next/link";

import { Wordmark } from "@/components/layout/Wordmark";
import { Container } from "@/components/ui/Container";

const shopLinks = [
  { href: "/shop?collection=best-sellers", label: "Best Sellers" },
  { href: "/shop?collection=lips", label: "Lips" },
  { href: "/shop?collection=blush", label: "Blush" },
  { href: "/shop?category=sets-and-gifts", label: "Sets & Gifts" },
];

const helpLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/search", label: "Search" },
  { href: "/cart", label: "Cart Preview" },
];

const aboutLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/shop?builder=lip-combo", label: "Build Your Lip Combo" },
  { href: "#newsletter", label: "The Gloss List" },
];

const socialLabels = ["Instagram", "TikTok", "Pinterest"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/65 bg-ivory/88">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_0.72fr_0.72fr_0.72fr_0.72fr] lg:gap-10">
          <div className="space-y-6">
            <Wordmark />
            <p className="max-w-md text-sm leading-8 text-muted sm:text-base">
              Everyday lip essentials made to feel polished, expressive, and giftable. This concept storefront remains provisional until final brand assets and connected store data are supplied.
            </p>
            <Link
              className="inline-flex text-sm font-semibold text-espresso hover:text-wine"
              href="#newsletter"
            >
              Join the Gloss List
            </Link>
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

          <div className="space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              About
            </h2>
            <ul className="space-y-3 text-sm">
              {aboutLinks.map((item) => (
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
              Social
            </h2>
            <ul className="space-y-3 text-sm text-espresso">
              {socialLabels.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} AMARÉ Cosmetics. All rights reserved.</p>
          <p>Payment methods placeholder until Shopify checkout is connected.</p>
        </div>
      </Container>
    </footer>
  );
}
