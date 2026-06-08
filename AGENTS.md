# AGENTS.md — AMARÉ Cosmetics Storefront

## Project role
You are working as a senior product designer and senior frontend engineer on a custom headless Shopify storefront for **AMARÉ Cosmetics**.

The storefront must feel like a bold, editorial beauty brand rather than a generic Shopify theme. The working visual direction is **AMARÉ Afterglow**: warm, feminine, polished, premium, expressive, and conversion-focused.

## Locked technology
- Next.js App Router
- TypeScript with strict type checking
- Tailwind CSS
- Motion for React, imported from `motion/react`, only where animation adds value
- Lucide React for interface icons
- Shopify Storefront API for products, collections, cart, contextual pricing, and checkout
- Shopify remains the source of truth for commerce data
- Vercel-ready deployment

## Development mode
Until Shopify credentials are available, build against strongly typed mock data stored separately from UI components. Components must be designed so mock repositories can later be swapped for Shopify repositories without rewriting page layouts.

Never expose a Shopify private token in browser-side code. Private Storefront API credentials belong in server-only environment variables and server-side modules.

## Brand direction
### Positioning
AMARÉ creates approachable beauty essentials that make everyday lip looks feel polished, expressive, and effortless.

### Core line
**Soft shine. Strong presence.**

### Supporting copy
Everyday lip essentials made for the moments you want to feel polished, confident, and completely yourself.

### Palette
- Warm Ivory: `#F8F3ED`
- Porcelain: `#FFFDFC`
- Petal Blush: `#E9BBB7`
- Dusty Rose: `#C98284`
- AMARÉ Wine: `#672936`
- Deep Berry: `#441722`
- Espresso: `#241819`
- Champagne: `#C2A06B`
- Border: `#E7DDD6`
- Muted text: `#706361`

### Typography
Use locally optimized web fonts through `next/font`.
- Editorial/display: elegant high-contrast serif
- Interface/body: modern, highly legible sans serif

Good starting pairings:
- Cormorant Garamond + Manrope
- Playfair Display + Inter
- DM Serif Display + Manrope

Choose one pairing and use it consistently. Do not mix several decorative fonts.

### Visual characteristics
- Spacious editorial layouts
- Strong typographic hierarchy
- Product-first photography
- Warm neutral surfaces
- Deep wine accents
- Controlled gold details
- Large rounded media frames, but avoid making every component pill-shaped
- Soft texture, shine, glass, and reflection cues
- Intentional asymmetry on desktop
- Clean vertical rhythm on mobile

## UX principles
1. Mobile-first. The shopping experience must feel native and easy on a small screen.
2. Never sacrifice product clarity for visual effects.
3. Each homepage section must have a different commercial purpose.
4. Product availability, selected variant, price, and add-to-cart state must always be clear.
5. Use actual buttons for actions and actual links for navigation.
6. Preserve keyboard navigation, focus visibility, reduced-motion preferences, and meaningful alt text.
7. Keep text contrast accessible.
8. Avoid fake ratings, fake review counts, fake scarcity, or unsupported product claims.
9. Do not invent ingredients, certifications, cruelty-free status, manufacturing locations, or clinical benefits.
10. Any unverified content must be visibly marked as placeholder data in source code.

## Architecture rules
Keep the project organized by feature. Do not build the homepage as one giant component.

```text
src/
├── app/
│   ├── (storefront)/
│   │   ├── page.tsx
│   │   ├── shop/
│   │   ├── collections/[handle]/
│   │   ├── products/[handle]/
│   │   ├── about/
│   │   ├── contact/
│   │   └── search/
│   ├── api/
│   ├── layout.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── commerce/
│   ├── layout/
│   ├── media/
│   └── ui/
├── features/
│   ├── home/
│   │   ├── hero/
│   │   ├── category-navigation/
│   │   ├── best-sellers/
│   │   ├── keychain-campaign/
│   │   ├── lip-routine/
│   │   ├── shade-story/
│   │   ├── shop-the-look/
│   │   ├── brand-story/
│   │   └── newsletter/
│   ├── cart/
│   ├── collections/
│   ├── product/
│   ├── search/
│   └── wishlist/
├── lib/
│   ├── commerce/
│   │   ├── types.ts
│   │   ├── repository.ts
│   │   ├── mock/
│   │   └── shopify/
│   ├── seo/
│   ├── analytics/
│   ├── utils/
│   └── constants/
├── providers/
├── styles/
└── types/
```

Each homepage section folder may contain its component, small subcomponents, data adapters, and types. Shared primitives belong in `components/ui`, not inside page sections.

## Component quality rules
- Prefer server components by default.
- Add `"use client"` only when interaction or browser APIs require it.
- Keep props strongly typed.
- Do not use `any`.
- Do not hardcode repeated product cards directly in JSX; map typed data.
- Use `next/image` for raster images.
- Use semantic HTML.
- Do not hide layout errors with arbitrary fixed heights.
- Avoid excessive absolute positioning.
- Build reusable `Container`, `SectionHeader`, `Button`, `IconButton`, `Badge`, `ProductCard`, `Price`, `ResponsiveImage`, and `Drawer` primitives.
- Components should have visible hover, focus, loading, empty, error, disabled, and sold-out states where relevant.

## Animation rules
- Use Motion sparingly for hero entrances, drawers, product-card image changes, marquee/ticker behavior, and scroll reveals.
- Respect `prefers-reduced-motion`.
- Prefer opacity and transform animations.
- Avoid long page-blocking animations, custom cursors, heavy WebGL, and gratuitous parallax.
- Never animate checkout-critical information in a way that makes it harder to read.

## Homepage order
1. Announcement bar
2. Header and navigation
3. Editorial hero
4. Shop by mood or finish
5. Best sellers
6. Keychain Lip Oil campaign
7. Three-step routine: Prep, Define, Gloss
8. Build Your Lip Combo teaser
9. Shade story
10. Shop the look
11. Brand story
12. Customer content/testimonials placeholder
13. Sets and gifting
14. Newsletter
15. Footer

## Product page requirements
- Breadcrumbs
- Product gallery with thumbnails
- Product title, price, availability, and concise benefit statement
- Visual variant/shade selector
- Quantity control
- Add to cart
- Buy/checkout action only when correctly connected
- Sticky mobile purchase bar
- Accordion or tab content for details, usage, ingredients, shipping, and returns
- Pair-with recommendations
- Product-specific review area
- Structured data
- Clear sold-out and unavailable-variant states

## Commerce repository contract
Create a small repository abstraction so page components depend on project-owned types rather than raw Shopify GraphQL response shapes.

At minimum expose:
- `getProducts()`
- `getProductByHandle(handle)`
- `getCollections()`
- `getCollectionByHandle(handle)`
- `searchProducts(query)`
- `createCart()`
- `getCart(cartId)`
- `addCartLines(cartId, lines)`
- `updateCartLines(cartId, lines)`
- `removeCartLines(cartId, lineIds)`

Mock functions may implement read operations first. Cart operations can be introduced when the cart milestone begins.

## Initial catalog placeholders
Use the current observed product names as provisional mock data only:
- Blush Sets
- Soft Glow Blush
- Keychain Lip Oil
- Liquid Lip Liner Set of 5
- Glass Lip Gloss
- Lip Scrub and Mask Combo
- AMARÉ Ultimate Lip Collection
- Lip Prep & Polish Set
- Soft Glam Lip Set
- AMARÉ Cosmetics Gift Card
- Classic Lip Gloss
- Cream Semi-Smudge-Proof Retractable Lip Liner
- Retractable Lip Gloss
- Lip Balm

Product descriptions, ingredients, shades, inventory, images, and claims must remain clearly marked as pending verification unless sourced from the store owner.

## SEO and metadata
- Provide useful metadata per page.
- Add canonical URLs once the production domain is known.
- Add Organization, WebSite, Product, BreadcrumbList, and ItemList schema where appropriate.
- Generate sitemap and robots configuration before launch.
- Use unique product and collection titles/descriptions.
- Do not publish placeholder content to production.

## Definition of done for every patch
- TypeScript passes.
- Lint passes.
- No console errors.
- Desktop and mobile layouts are checked.
- Interactive elements are keyboard accessible.
- No obvious content overflow.
- No unrelated files are rewritten.
- The visual direction remains consistent with AMARÉ Afterglow.
- Summarize changed files and provide exact testing steps.
