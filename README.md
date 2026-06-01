# ParkDay

ParkDay is a polished, unofficial Walt Disney World trip companion built with the Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, TanStack Query, and Zustand. It is designed as a premium planning dashboard on desktop and a native-app-like PWA experience on mobile.

> **Unofficial disclaimer:** ParkDay is an independent planning companion. It is not affiliated with, endorsed by, or sponsored by The Walt Disney Company or its subsidiaries. It does not use Disney logos, official artwork, or brand styling. Factual destination, park, attraction, and dining names may appear for trip-planning context.

## Features included

- Home dashboard with trip pulse, live wait highlights, park selector, checklist, and quick actions
- Trip Planner with saved local state, day-by-day rule-based itinerary generation, export, print, and mobile share support
- Live Wait Times with ThemeParks.wiki integration, React Query caching, filters, sort controls, loading skeletons, refresh, and graceful unavailable states
- Routes / Transportation Planner using an editable seeded transportation graph and Dijkstra route calculation
- Dining discovery from manually maintained seed data, with filters, detail sheets, notes, reservation placeholders, and itinerary actions
- Interactive seed-map abstraction with park selector, map/list toggle, pins, bottom-sheet details, geolocation permission flow placeholder, and favorites
- Itinerary Builder with timeline items, drag/drop plus mobile reorder controls, conflict warnings, JSON export, and print view
- Saved hub for favorite attractions/restaurants, saved routes, saved plans, packing checklist, and notes
- Universal command palette with Cmd/Ctrl + K on desktop and mobile search button
- Dark/light mode, defaulting to a rich twilight/navy theme
- PWA manifest and production service worker shell caching
- Accessible semantic HTML, focus states, large touch targets, reduced-motion support, and graceful no-data states

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- TanStack Query
- Zustand with localStorage persistence
- Google Font: Plus Jakarta Sans

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run typecheck
npm run build
npm run start
```

## ThemeParks.wiki integration

The API client lives in `lib/themeparks/client.ts` and defaults to:

```ts
https://api.themeparks.wiki/v1
```

Implemented service functions:

- `fetchDestinations()`
- `findDestinationByName()` / `getDestinationByName()`
- `getParksForDestination()`
- `getParkChildren()` / `getEntityChildren()`
- `getParkLiveData()` / `getEntityLiveData()`
- `getParkSchedule()`
- `getParkScheduleMonth()`
- `mergeChildrenWithLiveData()`
- `normalizeAttractions()`
- `normalizeRestaurants()`
- `normalizeShows()`

React Query hooks live in `hooks/useThemeparks.ts`. Metadata is cached for longer periods; live data is refreshed only while live pages use it, with a conservative polling interval.

You can override the API base with:

```bash
NEXT_PUBLIC_THEMEPARKS_API_BASE=https://api.themeparks.wiki/v1
```

## Seed data

Editable seed JSON lives in `data/seed`:

- `parks.json`
- `resorts.json`
- `transportNodes.json`
- `transportEdges.json`
- `dining.json`
- `packingChecklist.json`
- `planningTemplates.json`
- `mapPins.json`

Seed data is intentionally not treated as live or official. It is meant to provide a clean abstraction for production data later.

## Where to add production data later

### Transportation

Add verified nodes and edges in:

- `data/seed/transportNodes.json`
- `data/seed/transportEdges.json`

Route scoring lives in:

- `lib/transport/graph.ts`
- `lib/transport/dijkstra.ts`

If you gain access to verified live bus/boat/Skyliner/monorail feeds, add a live provider and label routes as live only when the source is active.

### Dining APIs and official links

Dining discovery currently uses `data/seed/dining.json`. Add official reservation/menu links only through a legal, stable data source. Do not scrape Disney pages without explicit permission and compliance review.

### Map coordinates

Map pins currently use percentage-based coordinates in `data/seed/mapPins.json`. Replace or augment them with verified latitude/longitude and add a code-split map implementation in `components/map` using Mapbox, MapLibre, or Leaflet.

### PWA/offline

The service worker in `public/sw.js` caches the app shell in production. For true offline itinerary behavior, add IndexedDB persistence for itinerary snapshots and route packs.

## Legal/design notes

ParkDay is designed to feel premium, warm, and resort-ready without impersonating Disney. Avoid official logos, copyrighted art, character imagery, park-specific trade dress, or confusing phrasing that implies endorsement.
