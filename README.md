# Panagiota Grosdouli — Robotics and AI Research Portfolio

A research-focused academic portfolio website built with Next.js, React, TypeScript and Tailwind CSS.

The site is designed as a central research identity hub for work in robotics, artificial intelligence, autonomous navigation, computer vision, SLAM, VIO, sensor fusion, uncertainty-aware autonomy and safety-critical intelligent systems.

## Research Identity

**Robotics and AI researcher focused on robust autonomy under uncertainty.**

The portfolio connects the following research themes:

- uncertainty-aware autonomy,
- SLAM and sensor fusion,
- visual-inertial odometry,
- risk-aware navigation,
- autonomous driving safety,
- urban delivery robots,
- UAV autonomy,
- semantic perception,
- neuromorphic robotics,
- AI for robotics,
- simulation and reproducibility.

## Purpose

This repository supports a research-facing website for presenting:

- academic background,
- selected GitHub projects,
- research vision and technical interests,
- connected research map,
- project reports with scientific questions and limitations,
- publications and outputs without fabricated claims,
- CV and contact information,
- ongoing work in AI, robotics and intelligent mobility.

## Selected Projects Featured

- [DynNav: Dynamic Navigation Rerouting in Unknown Environments](https://github.com/panagiotagrosdouli/DynNav-Dynamic-Navigation-Rerouting-in-Unknown-Environments)
- [SafeCrossAI](https://github.com/panagiotagrosdouli/SafeCrossAI)
- [SHIELD-VIO](https://github.com/panagiotagrosdouli/SHIELD-VIO)
- [OpenUWOC-AI](https://github.com/panagiotagrosdouli/OpenUWOC-AI)
- [Adaptive Multi-Modal SLAM with Uncertainty-Aware Sensor Fusion](https://github.com/panagiotagrosdouli/Adaptive-Multi-Modal-SLAM-with-Uncertainty-Aware-Sensor-Fusion)

## Website Sections

- Homepage research identity and selected projects
- Research vision page
- Research map connecting projects into one program
- Project explorer and detailed project reports
- Publications and planned outputs page
- Research notes/blog scaffolds
- Interactive demos with synthetic data clearly labeled
- CV and contact pages

## Honesty Policy

The website must not fabricate publications, awards, affiliations, university/lab acceptance, experimental results or benchmarks.

Incomplete or future-facing content should be explicitly marked as:

- `Coming Soon`
- `In Progress`
- `Research Prototype`
- `Planned`

Synthetic demos and placeholder visuals must be clearly labeled and must not be presented as real experiments.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX-ready content structure
- React Icons
- SEO and Open Graph metadata
- Accessible responsive components
- Dark and light mode

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run test
```

## Validation Checklist

Before merging major changes, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Recommended manual checks:

- mobile navigation,
- dark and light mode contrast,
- keyboard navigation,
- internal links,
- placeholder labels,
- project status labels,
- publication honesty wording.

## Deployment Notes

Set `NEXT_PUBLIC_SITE_URL` to the final production URL so canonical URLs and social preview metadata resolve correctly.

## Audit Documentation

See [`docs/PORTFOLIO_AUDIT.md`](docs/PORTFOLIO_AUDIT.md) for the UX, research communication, engineering, SEO, accessibility, performance and content audit.

## Project Goals

- Present selected research and engineering projects clearly.
- Highlight skills in robotics, AI, machine learning and autonomous systems.
- Show a coherent research agenda rather than isolated demos.
- Keep the codebase simple, modular and easy to extend.
- Maintain a professional GitHub-facing summary of academic and technical work.
