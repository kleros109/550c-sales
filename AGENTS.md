# Repository Guidelines

## Project Structure & Module Organization
The repository currently exposes a single React component in `sales_dashboard.tsx`, which renders the PS 550 C sales dashboard with all data embedded as static arrays. Keep the file colocated with your application’s React entry point (e.g., `src/pages/` in Next.js or `src/` in a Vite app) so that tree-shaking can remove unused helpers. When adding new charts, prefer extracting them into sibling modules such as `sales_dashboard/RevenueMix.tsx` to keep the top-level file under 300 lines.

## Build, Test, and Development Commands
This repo assumes you mount the component inside a modern React toolchain. A typical setup is to scaffold a Vite harness one directory up: `npm create vite@latest demo -- --template react-ts`. From that workspace run `npm install` to install React, Recharts, and Tailwind (if you adopt the existing utility classes), then `npm run dev` for an interactive preview, `npm run build` for a production bundle, and `npm run preview` to sanity-check the optimized output.

## Coding Style & Naming Conventions
Follow the existing two-space indentation and single-quote imports. Use TypeScript’s `const` for immutable datasets and camelCase for variables (`monthlyGrowth`, `downloadCSV`). Components should stay functional with hooks, and memoize derived data with `useMemo` if recomputation becomes heavy. Run `npm run lint` (ESLint with the React/TypeScript presets) in your harness before opening a PR; add Prettier if you notice formatting drift.

## Testing Guidelines
Automated coverage is not yet present; start with React Testing Library to verify that key charts render with the expected labels and tooltips. Name spec files `*.test.tsx` and colocate them with the component (`sales_dashboard.test.tsx`). Execute the suite via `npm test -- --watch` while iterating and ensure high-level CSV export scenarios are mocked so tests stay deterministic.

## Commit & Pull Request Guidelines
There is no published Git history, so default to Conventional Commits (`feat: add patio revenue drilldown`). Each PR should describe data additions, include before/after screenshots of the dashboard states, call out any CSV schema changes, and link to the corresponding tracking ticket. Request review whenever you change business logic or reporting numbers, and keep PRs focused so stakeholders can verify the figures quickly.

## Data Refresh & Configuration
Update embedded metrics from the point-of-sale export before each reporting cycle. Document the export source and timestamp in your PR description, and adjust helper constants (e.g., business-day counts) near the top of `sales_dashboard.tsx` to match the new period.
