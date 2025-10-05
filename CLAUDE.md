# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14** sales dashboard for PS 550 C (Public Square San Diego) that displays restaurant sales metrics, trends, and analytics. The dashboard uses **React 18**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** components, and **Recharts** for data visualization.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Charts**: Recharts library
- **Icons**: Lucide React

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Run production build
npm run lint     # Run ESLint with Next.js config
```

## Project Structure

```
/app
  page.tsx              # Home page that renders Dashboard component
  layout.tsx            # Root layout with metadata
  globals.css           # Tailwind config + CSS variables for theming
  sales_dashboard.tsx   # Main dashboard component (706 lines)

/components/ui          # shadcn/ui components
  card.tsx              # Card component wrapper
  tabs.tsx              # Tabs component for navigation

/lib
  utils.ts              # cn() utility for className merging (clsx + tailwind-merge)
```

## Architecture & Data Flow

### Data Model
All sales data is **embedded as static arrays** directly in `app/sales_dashboard.tsx`. Each month's data includes:
- Financial metrics (net sales, gross sales, discounts, tips, tax)
- Order metrics (total guests, orders, payments)
- Averages (per guest, per payment, per order)
- Payment methods (credit/debit, cash)
- Channel breakdown (dine-in, online ordering)
- Revenue breakdown (patio revenue, online ordering revenue)

### Component Structure
The main `Dashboard` component (`sales_dashboard.tsx`) is a single 706-line file that:
1. Defines static data arrays for monthly sales, hourly trends, and day-of-week patterns
2. Uses `useState` for tab navigation and CSV export functionality
3. Renders multiple chart types: LineChart, BarChart, AreaChart, ComposedChart
4. Displays KPI cards with icons from lucide-react
5. Provides CSV export functionality for all data views

**Important**: As noted in AGENTS.md, when this file exceeds 300 lines, extract charts into sibling modules like `sales_dashboard/RevenueMix.tsx`.

### Styling Approach
- **CSS Variables**: Theme colors defined in `globals.css` using HSL values
- **Dark Mode**: Configured via `darkMode: ["class"]` in Tailwind config (not yet implemented in UI)
- **Path Alias**: `@/*` maps to root directory (configured in tsconfig.json)
- **Utility Function**: `cn()` from `lib/utils.ts` for conditional className merging

### Chart Configuration
All charts use Recharts with:
- `ResponsiveContainer` for responsive sizing
- Custom tooltips with formatted values
- Color schemes: blue (#3b82f6), green (#10b981), purple (#8b5cf6), etc.
- Grid lines and legends configured per chart type

## Data Refresh Process

From AGENTS.md:
1. Update embedded metrics from point-of-sale export before each reporting cycle
2. Document the export source and timestamp in PR description
3. Adjust helper constants (e.g., business-day counts) near the top of `sales_dashboard.tsx` to match the new period
4. Each PR should include before/after screenshots of dashboard states and call out CSV schema changes

## Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for imports
- **TypeScript**: Use `const` for immutable datasets, camelCase for variables
- **Components**: Functional components with hooks
- **Optimization**: Use `useMemo` for expensive derived data computations
- **Convention**: Conventional Commits format (e.g., `feat: add patio revenue drilldown`)

## TypeScript Configuration

- Target: `esnext`
- Strict mode: enabled
- Module resolution: node
- JSX: preserve (Next.js handles transformation)
- Path alias: `@/*` resolves to project root
