# AMARÉ Cosmetics — Master Website Build Brief

## 1. Project objective
Create a custom, editorial, high-converting ecommerce storefront for AMARÉ Cosmetics that feels original and recognizably branded rather than template-based.

The first build will use typed mock commerce data. After client approval and Shopify access, the same UI will be connected to Shopify products, collections, cart, customer accounts, and hosted checkout.

## 2. Recommended product strategy
### Hero product
**Keychain Lip Oil** should become the most recognizable campaign product because it combines cosmetics, portability, gifting, and fashion-accessory appeal.

### Repeat-purchase foundation
- Classic Lip Gloss
- Glass Lip Gloss
- Retractable Lip Gloss
- Lip Balm
- Lip Liners

### Routine and upsell products
- Lip Scrub and Mask Combo
- Lip Prep & Polish Set
- Soft Glam Lip Set
- AMARÉ Ultimate Lip Collection

### Expansion category
- Soft Glow Blush
- Blush Sets

## 3. Brand direction: AMARÉ Afterglow
### Brand feeling
- Feminine, not childish
- Premium, not inaccessible
- Bold, not noisy
- Soft, not weak
- Editorial, but still easy to shop
- Social-first, but not trend-dependent

### Primary line
**Soft shine. Strong presence.**

### Hero supporting copy
Everyday lip essentials made for the moments you want to feel polished, confident, and completely yourself.

### Alternate campaign lines
- Your gloss goes everywhere.
- Prep. Define. Gloss.
- Wear the shine.
- Find your lip mood.
- The finishing touch that changes everything.

## 4. Working audience assumption
This needs confirmation from the client, but the first concept will be designed for mobile-first beauty shoppers who value affordable products, polished presentation, giftable sets, lip combinations, and social-media-friendly products.

Do not hardcode demographic claims into public copy until the client confirms the actual audience and markets served.

## 5. Visual system
### Color tokens
| Token | Value | Use |
|---|---:|---|
| Warm Ivory | `#F8F3ED` | Main warm background |
| Porcelain | `#FFFDFC` | Cards and clean sections |
| Petal Blush | `#E9BBB7` | Soft campaign accent |
| Dusty Rose | `#C98284` | Secondary accent |
| AMARÉ Wine | `#672936` | Primary brand/action color |
| Deep Berry | `#441722` | Dark campaign panels |
| Espresso | `#241819` | Main dark text/background |
| Champagne | `#C2A06B` | Limited premium detail |
| Border | `#E7DDD6` | Dividers and controls |
| Muted text | `#706361` | Secondary copy |

### Typography
Recommended starting pair:
- Display: Cormorant Garamond
- Body/UI: Manrope

The display font should be used for major campaign headlines, not every label. Interface text must remain clean and highly readable.

### Photography direction
The final site needs:
- Product pack shots on neutral backgrounds
- Product texture and swatch photographs
- Close-up lip application
- Products held by models
- Diverse skin tones
- Keychain Lip Oil attached to bags, keys, pouches, and clutches
- Complete lip-combination looks
- Clean vertical video for selected campaign sections

## 6. Information architecture
### Primary navigation
- New
- Best Sellers
- Lips
  - Lip Gloss
  - Lip Oils & Balms
  - Lip Liners
  - Lip Care
- Blush
- Sets & Gifts
- Build Your Lip Combo
- Our Story

### Utility actions
- Search
- Account
- Wishlist
- Cart

### Supporting pages
- About AMARÉ
- Contact
- FAQ
- Shipping
- Returns
- Privacy
- Terms
- Order Tracking
- Shade Guide

## 7. Homepage specification
### 7.1 Announcement bar
One focused message at a time, such as free shipping threshold, launch offer, or new drop. Avoid a distracting multi-message ticker during the first build.

### 7.2 Header
Desktop:
- Brand mark left or centered depending on final logo proportions
- Clear category navigation
- Search, account, wishlist, cart actions

Mobile:
- Menu
- Centered logo
- Search and cart
- Full-screen or large drawer navigation

### 7.3 Editorial hero
Desktop concept:
- 60/40 or asymmetrical split
- Strong product/lip campaign image
- Large display headline
- Two deliberate calls to action
- Optional floating product detail or shade label

Mobile concept:
- Full-width visual
- Compact copy block
- Primary CTA visible without excessive scrolling

Suggested actions:
- Shop Best Sellers
- Build Your Lip Combo

### 7.4 Shop by mood or finish
Use emotional discovery rather than only technical categories:
- Glass Shine
- Soft Nude
- High Pigment
- Lip Care
- Everyday Sets

### 7.5 Best sellers
Four to six products with:
- Product image
- Product name
- Price
- Shade indication where available
- Quick add
- Wishlist
- Hover/secondary image on desktop
- Sold-out and unavailable states

### 7.6 Keychain Lip Oil campaign
Headline: **Your gloss goes everywhere.**

This section should feel like a small product campaign, not another grid card. Include lifestyle media, product benefit, price, and direct purchase action.

### 7.7 Three-step routine
Headline: **Prep. Define. Gloss.**

Steps:
1. Prep with scrub, mask, or balm
2. Define with liner
3. Finish with gloss or oil

Allow shoppers to add the complete routine once Shopify variants are connected.

### 7.8 Build Your Lip Combo teaser
First-release version:
- Choose a lip mood
- Select a liner family
- Select a finish
- Show recommended products

Full configurator can follow after the core storefront is stable.

### 7.9 Shade story
Swipeable cards with shade, undertone, finish, pairing, and model image. Data must come from verified Shopify metafields later.

### 7.10 Shop the look
Initial looks:
- Everyday Nude
- Soft Glam
- Berry Night
- Glass Lip
- Red Statement

### 7.11 Brand story
Use a concise founder or origin story. Do not publish generic invented history. This section remains a visual placeholder until the client supplies accurate brand information.

### 7.12 Customer content
Only use real customer media and legitimate product-specific reviews. The prototype may show clearly labeled visual placeholders.

### 7.13 Sets and gifting
Feature sets, bundles, and gift card as a deliberate gifting destination.

### 7.14 Newsletter
Headline: **Join the Gloss List**

Supporting copy: Get first access to new shades, limited sets, and members-only offers.

## 8. Collection page requirements
- Collection title and short editorial intro
- Product count
- Sort
- Filter drawer on mobile
- Inline filters or sidebar on larger screens
- Filter by product type, finish, color family, availability, and price when data exists
- Responsive grid
- Empty state
- Pagination or load-more strategy

## 9. Product page requirements
- Product gallery and video support
- Product title
- Price and compare-at price
- Inventory state
- Benefit-led summary
- Visual shade/variant selector
- Quantity
- Add to cart
- Sticky mobile purchase bar
- Details, how to use, ingredients, shipping, returns
- Related lip pairing
- Product-specific reviews
- Product schema

## 10. Cart experience
- Slide-over cart drawer for fast feedback
- Dedicated cart page as fallback
- Variant and quantity controls
- Remove action
- Free-shipping progress only when threshold is confirmed
- Subtotal
- Clear note that tax and shipping may be calculated at checkout
- Redirect to Shopify `checkoutUrl`

## 11. Shopify integration approach
Shopify remains responsible for:
- Products and variants
- Collections
- Inventory
- Pricing and discounts
- Orders
- Checkout and payments
- Customer commerce records
- Shipping configuration

The custom Next.js storefront is responsible for:
- Brand presentation
- Product discovery
- Product and collection pages
- Search UI
- Cart interface
- Editorial content
- SEO presentation
- Analytics integration

Required client access later:
- Shopify staff or collaborator access with appropriate permissions
- Headless sales channel/storefront API credentials
- Confirmed product catalog and variants
- Brand logo files
- Product media
- Accurate product descriptions
- Ingredients and usage instructions
- Shipping and return rules
- Domain decision
- Analytics and marketing accounts

## 12. Technical architecture
- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- Server components by default
- Shopify requests isolated in `src/lib/commerce/shopify`
- Typed project-owned commerce models
- Mock and Shopify repository implementations
- Environment variable validation
- Metadata and structured-data utilities
- Vercel-compatible deployment

## 13. Environment variables planned
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_PRIVATE_TOKEN=
SHOPIFY_STOREFRONT_API_VERSION=
```

Do not add a real private token to Git. The exact variable strategy may be adjusted when client access is available.

## 14. Build roadmap
### Milestone 1 — Foundation and shell
- Initialize Next.js
- Add fonts and design tokens
- Build shared primitives
- Build announcement bar, header, mobile menu, footer
- Add typed mock product data
- Establish page containers and responsive rules

### Milestone 2 — Homepage
- Hero
- Category discovery
- Best sellers
- Keychain campaign
- Lip routine
- Combo teaser
- Shade story
- Shop the look
- Brand story placeholder
- Newsletter

### Milestone 3 — Shop and collections
- Shop page
- Collection pages
- Filters and sorting
- Product cards and states
- Search UI

### Milestone 4 — Product detail
- Gallery
- Variant selection
- Product information
- Sticky mobile action
- Recommendations
- Structured data

### Milestone 5 — Cart and Shopify connection
- Shopify repository
- Product and collection queries
- Cart creation and persistence
- Cart line updates
- Checkout redirect
- Loading and error handling

### Milestone 6 — Content, QA, and launch
- Real product media and copy
- Policy content
- Mobile/tablet/desktop QA
- Accessibility
- Performance
- Analytics
- SEO
- Domain and deployment

## 15. Phase-one exclusions
Do not begin these until the core storefront is stable:
- Complex loyalty program
- Subscription commerce
- Advanced shade-matching AI
- AR try-on
- Marketplace features
- Fully custom checkout
- Heavy 3D/WebGL product experiences

## 16. First implementation target
The first visible patch should create a polished responsive storefront shell and homepage hero using mock media blocks, with no Shopify credentials required.

The homepage hero should already demonstrate the final design quality:
- Warm editorial background
- Strong serif headline
- Deep wine CTA
- Product-focused media composition
- Premium spacing
- Responsive mobile treatment
- Subtle, accessible animation
