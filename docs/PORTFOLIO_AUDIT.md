# Research Portfolio Audit and Implementation Rationale

This document records the audit findings and the reasoning behind the current transformation work. It is intentionally written as repository documentation so future edits can preserve an honest academic research identity.

## UX audit

The site already has a modern portfolio foundation, but the main user journey needs to prioritize research identity over generic developer presentation. The strongest path is:

1. homepage communicates the central research identity,
2. research page explains the scientific program,
3. research map shows how projects connect,
4. project pages provide detailed technical reports,
5. publications page stays honest about verified outputs.

Expected benefit: visitors understand the portfolio as a coherent robotics and AI research trajectory rather than a list of unrelated repositories.

## Research communication audit

The correct framing is robust autonomy under uncertainty. The site should repeatedly connect SLAM, VIO, sensor fusion, risk-aware navigation, semantic perception, UAV autonomy, intelligent transportation and reproducibility.

Rules preserved during implementation:

- do not fabricate publications,
- do not fabricate awards,
- do not fabricate affiliations,
- do not imply acceptance by a university or laboratory,
- mark incomplete outputs as Coming Soon, In Progress, Planned or Research Prototype.

Expected benefit: the portfolio appears scientifically mature while remaining credible.

## Engineering audit

The repository already uses Next.js, TypeScript and Tailwind CSS. The transformation should keep the codebase modular and data-driven rather than hard-coding every page independently.

Priority improvements:

- expand reusable project schema usage,
- expose implemented/prototype/planned status on project pages,
- keep placeholder figures clearly marked,
- add documentation for future contributors,
- preserve strict TypeScript and build validation.

Expected benefit: future projects can be added without redesigning the site.

## SEO audit

The site has metadata foundations, but each major research page should carry a precise title and description. Project pages should produce per-project metadata from project data.

Recommended follow-up:

- create verified Open Graph image assets,
- add canonical production URL through `NEXT_PUBLIC_SITE_URL`,
- add JSON-LD person and project schema if not already present,
- validate generated sitemap and robots.txt after deployment.

## Accessibility audit

The visual style is generally accessible, but future changes should preserve:

- semantic headings,
- keyboard-focus styles,
- visible link states,
- alternative text for real images,
- explicit labels for synthetic or placeholder visuals,
- high contrast in both dark and light modes.

## Performance audit

The site should remain fast by default. The main risk is adding large GIFs, videos or 3D demos without lazy loading.

Recommended follow-up:

- compress project GIFs,
- use Next image optimization for local images,
- lazy-load heavy demos,
- keep Three.js demos isolated to pages that need them,
- avoid excessive animation on the homepage.

## Content audit

Project pages must distinguish what has been implemented from what is planned. Publications must not list planned manuscripts as accepted papers. Placeholder visual material must never be confused with real experiments.

Current implementation direction:

- project reports include scientific question, contribution, status table, experiments, metrics, limitations and roadmap,
- research map provides the narrative glue between projects,
- publications page separates accepted outputs from planned manuscripts,
- research page explains motivation, related projects and future directions for each theme.

## Limitations

This audit is based on repository-level inspection through the connected GitHub integration. It does not replace a local Lighthouse run, full CI execution, accessibility tree inspection or manual mobile-device testing.

## Next validation checklist

- Run `npm install`.
- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run build`.
- Inspect mobile navigation.
- Verify all internal links.
- Replace placeholder visuals only with verified figures, GIFs or demos.
