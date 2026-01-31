

# Property Detail Pages (PDP) & Collection Pages (CLP) Premium Upgrade

## Overview

This plan transforms the Lingam Estate platform from a region-focused advisory site into an investment-grade asset presentation platform with individual property listings. The upgrade introduces Property Detail Pages (PDP) and Property Collection Pages (CLP) designed for HNI/NRI investors, emphasizing trust, verification, transparency, and premium presentation.

---

## Architecture Approach

### New Routes and Pages

```text
/properties                    -> PropertiesIndex.tsx (Collection Page - CLP)
/properties/:slug             -> PropertyDetail.tsx (Property Detail Page - PDP)
```

### Data Layer

A new `src/data/properties.ts` file will contain structured property data with:
- Property metadata (ID, slug, title, region, area, price range indicator)
- Location coordinates for map integration
- Verification status
- Buyer interest progress
- Best use cases
- Connectivity data with distance/time to major cities
- Gallery images with SEO alt text
- Bilingual content (English + Tamil)

---

## Component Architecture

### Property Detail Page (PDP) Components

```text
src/
  components/
    property/
      index.ts
      PropertyGallery.tsx         - Premium image slider with thumbnails
      PropertyTabs.tsx            - Tab/Accordion container
      OverviewSection.tsx         - Executive summary with refined copy
      UseCasesSection.tsx         - Best use cases (Residential/Agri/Industrial)
      ConnectivitySection.tsx     - Proximity to Chennai/Bengaluru/Salem
      PropertyMap.tsx             - Interactive map with connectivity lines
      BuyerProgressIndicator.tsx  - Visual progress tracker (Listed -> Sold)
      VerificationBadge.tsx       - Verification status indicator
      PropertyCTA.tsx             - Request conversation call-to-action
```

### Collection Page (CLP) Components

```text
src/
  components/
    property/
      PropertyCard.tsx            - Premium property listing card
      PropertyFilters.tsx         - Region/Use-case/Status filters
      PropertyGrid.tsx            - Responsive property grid layout
```

---

## Section Details

### 1. Overview Section

**Content Structure:**
- Executive-style headline summarizing investment merit
- 3-4 paragraphs of refined, authoritative prose
- Key metrics displayed elegantly (area, region, classification)
- Focus on long-term value, strategic location, and investment thesis

**Design:**
- Generous whitespace, serif headings
- Subtle Red Damask (#db7137) accent dividers
- No bullet-point lists; flowing professional narrative

### 2. Best Use Cases Section

**Categories:**
- Residential (Villa / Farmhouse / Plotted Development)
- Agriculture (High-value farming / Organic / Horticulture)
- Industrial (Factory / Warehouse / Manufacturing)
- Mixed-Use (Future appreciation / Hold strategy)

**Design:**
- Elegant icon set (using Lucide icons)
- Each use case as a refined card with description
- Subtle hover animations

### 3. Connectivity & Market Access Section

**Content:**
- Distance and travel time to Salem, Chennai, Bengaluru
- National Highway connectivity details
- Logistics and trade corridor relevance
- Railway/airport proximity where applicable

**Design:**
- Visual distance indicators (progress bars or radial layout)
- City name with estimated travel time
- Business-owner focused language

### 4. Interactive Map Section

**Implementation:**
- Embed using Mapbox GL JS or Leaflet (via CDN, no heavy dependencies)
- Pin exact property location with custom marker
- Visual polylines connecting to Chennai, Bengaluru, Salem
- Custom styling to match brand (muted tones, Red Damask accents)
- Include schema.org GeoCoordinates for SEO

**Features:**
- Zoom controls
- Full-screen toggle
- Satellite/map view toggle

### 5. Property Gallery

**Implementation:**
- Full-width hero image with aspect ratio 16:9
- Thumbnail strip below for navigation
- Framer Motion transitions between images
- Lightbox view for detailed inspection
- SEO-optimized alt text for each image

**Image Categories:**
- Land views / aerial perspectives
- Surrounding roads and access points
- Nearby landmarks
- Regional lifestyle cues (temples, farms, streets)

### 6. Buyer Interest Progress Indicator

**Stages:**
1. Listed (neutral)
2. X buyers showed interest (neutral)
3. Token advance received (neutral)
4. Sold (muted completion state)

**Design:**
- Collapsible/expandable UI (Accordion or Toggle)
- Horizontal progress bar with stage markers
- Neutral tones for all states (no urgency colors)
- Discrete placement (not prominent, builds trust without pressure)

### 7. Verification Status System

**States:**
| Status | Color | Icon |
|--------|-------|------|
| Not Verified (verify on demand) | Stone/Gray | Shield outline |
| Verification in Progress | Warm Gray | Shield + clock |
| 100% Verified | Red Damask (#db7137) | Shield + checkmark |

**Design:**
- Badge component with icon + text
- Tooltip on hover explaining what verification includes
- Placed near property title for visibility

---

## Collection Page (CLP) Structure

### Hero Section
- Headline: "Investment-Grade Land Assets"
- Subtitle: Brief explanation of the curated collection
- Filter controls (Region, Use Case, Verification Status)

### Property Grid
- 2-column on tablet, 3-column on desktop
- Each card shows:
  - Hero image
  - Property title
  - Region badge
  - Area (in acres)
  - Verification status badge
  - Brief tagline
  - Hover animation (subtle scale)

### Empty/Loading States
- Skeleton loaders matching card dimensions
- "No properties match your filters" message with reset option

---

## i18n Integration

New translation keys in `en.json` and `ta.json`:

```json
{
  "property": {
    "overview": "Overview",
    "useCases": "Best Use Cases",
    "connectivity": "Connectivity & Market Access",
    "map": "Location",
    "gallery": "Gallery",
    "progress": "Buyer Interest",
    "verification": {
      "notVerified": "Verify on Demand",
      "inProgress": "Verification in Progress",
      "verified": "100% Verified"
    },
    "progressStages": {
      "listed": "Listed",
      "interest": "Buyers Showed Interest",
      "token": "Token Advance Received",
      "sold": "Sold"
    },
    "useCaseTypes": {
      "residential": "Residential",
      "agriculture": "Agriculture",
      "industrial": "Industrial",
      "mixedUse": "Mixed-Use"
    },
    "distanceTo": "Distance to {{city}}",
    "travelTime": "~{{time}} by road",
    "cta": "Request Property Details",
    "backToCollection": "View All Properties"
  },
  "properties": {
    "caption": "Properties",
    "title": "Investment-Grade Land Assets",
    "subtitle": "A curated portfolio of verified land opportunities in Tamil Nadu's emerging growth corridors.",
    "filterByRegion": "Filter by Region",
    "filterByUseCase": "Filter by Use Case",
    "filterByStatus": "Verification Status",
    "noResults": "No properties match your criteria",
    "resetFilters": "Reset Filters"
  }
}
```

---

## SEO & GEO Optimization

### Structured Data (JSON-LD)

Each PDP will include schema.org Product + Place markup:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "5.2 Acre Agricultural Land near Thiruvannamalai",
  "description": "...",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "...",
    "highPrice": "..."
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.2253",
    "longitude": "79.0747"
  }
}
```

### Meta Tags
- Dynamic title: `{Property Title} | Lingam Estate`
- Description: First 155 chars of overview
- Canonical URLs
- OpenGraph image from gallery

### Heading Structure
- H1: Property title
- H2: Section headers (Overview, Connectivity, etc.)
- H3: Subsection headers

---

## UI Component Selection

The implementation will use the **Tabs** component (not Accordions) for the main PDP sections because:
- Tabs align better with premium, minimal aesthetics
- Content is substantial enough to warrant dedicated views
- Reduces vertical scrolling on desktop
- Mobile will stack tabs vertically

The **Buyer Progress Indicator** will use a **Collapsible** component to keep it discrete.

---

## File Structure Summary

```text
src/
  data/
    properties.ts              # Property data store
  pages/
    PropertiesIndex.tsx        # CLP
    PropertyDetail.tsx         # PDP
  components/
    property/
      index.ts
      PropertyGallery.tsx
      PropertyTabs.tsx
      OverviewSection.tsx
      UseCasesSection.tsx
      ConnectivitySection.tsx
      PropertyMap.tsx
      BuyerProgressIndicator.tsx
      VerificationBadge.tsx
      PropertyCTA.tsx
      PropertyCard.tsx
      PropertyFilters.tsx
      PropertyGrid.tsx
```

---

## Navigation Update

Add "Properties" to the main navigation in `Header.tsx`:

```typescript
const navLinks = [
  { labelKey: "nav.properties", href: "/properties" },  // NEW
  { labelKey: "nav.regions", href: "/regions" },
  { labelKey: "nav.insights", href: "/insights" },
  { labelKey: "nav.about", href: "/about" },
];
```

---

## Technical Considerations

### Map Integration
- Use Leaflet with OpenStreetMap tiles (free, no API key required)
- Custom styling via Leaflet plugins
- Lazy-load map component for performance
- Fallback static image for slow connections

### Image Optimization
- Use descriptive alt text: "Aerial view of 5-acre agricultural land near Arunachala Hill, Thiruvannamalai"
- Lazy loading with blur placeholder
- WebP format where supported
- Multiple sizes for responsive display

### Performance
- Code-split property components
- Lazy load map and gallery components
- Preload critical images
- Minimize JavaScript bundle impact

---

## Implementation Phases

### Phase 1: Foundation
- Create data layer (`properties.ts`)
- Add routes to `App.tsx`
- Create basic PDP and CLP page shells
- Add navigation link

### Phase 2: Core Components
- Build `PropertyGallery` with slider
- Build `PropertyTabs` container
- Build section components (Overview, UseCases, Connectivity)
- Build `VerificationBadge`

### Phase 3: Trust Features
- Build `BuyerProgressIndicator`
- Build `PropertyMap` with connectivity visualization
- Add structured data for SEO

### Phase 4: Collection Page
- Build `PropertyCard`
- Build `PropertyFilters`
- Build `PropertyGrid`
- Complete CLP page

### Phase 5: i18n & Polish
- Add all translation keys
- Connect all components to `useTranslation`
- Final styling polish and animations
- Cross-browser testing

---

## Sample Property Data Structure

```typescript
interface Property {
  id: string;
  slug: string;
  title: {
    en: string;
    ta: string;
  };
  region: "thiruvannamalai" | "kallakurichi" | "villupuram" | "sankarapuram";
  area: {
    value: number;
    unit: "acres" | "cents";
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  verification: "not_verified" | "in_progress" | "verified";
  buyerProgress: {
    stage: "listed" | "interest" | "token" | "sold";
    interestedBuyers?: number;
  };
  overview: {
    en: string;
    ta: string;
  };
  useCases: Array<"residential" | "agriculture" | "industrial" | "mixed_use">;
  connectivity: {
    chennai: { distance: string; time: string };
    bengaluru: { distance: string; time: string };
    salem: { distance: string; time: string };
  };
  images: Array<{
    src: string;
    alt: { en: string; ta: string };
    category: "land" | "road" | "landmark" | "lifestyle";
  }>;
  createdAt: string;
  updatedAt: string;
}
```

This architecture ensures a scalable, premium, and trust-first property presentation system aligned with the Lingam Estate brand positioning.

