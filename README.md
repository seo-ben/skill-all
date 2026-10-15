# Skill-All

> A curated collection of modular AI agent skills for interface design, typography, spatial 3D web experiences, and kinetic motion.

---

<!-- Demo Preview / GIF Placeholder -->
<!-- Replace with actual recording/screencast when ready -->
<!-- <p align="center"><img src="docs/assets/preview.gif" alt="Skill-All Interface Demo" width="100%" /></p> -->

---

## Overview

Skill-All provides production-ready instruction sets (skills) designed for AI coding agents. Rather than producing generic, boilerplate interfaces with arbitrary styling, agents equipped with these skills follow structured design systems, typographic scales, accessible WebGL fallbacks, and reversible GSAP scroll choreographies.

The repository contains:
* **6 original, specialized skills** in interface design, motion, typography, and 3D web development.
* **1 embedded design system engine** (`ui-ux-pro-max`).
* **Third-party reference ecosystems** maintained in `third-party/` with individual source notices.

---

## Original Skills

All original skills reside in [`.agents/skills/`](./.agents/skills/):

| Skill | Purpose | Key Guidelines |
| :--- | :--- | :--- |
| **[`3d-web-experience`](./.agents/skills/3d-web-experience/)** | 3D spatial web experiences with Three.js & GSAP | Real vectorial geometry, 6 production templates, `try/catch` WebGL fallback, `prefers-reduced-motion` compliance. |
| **[`design-direction`](./.agents/skills/design-direction/)** | Distinctive, production-grade interface design | Balances enterprise product rigor with visual impact; curated palettes, spatial spacing, elevation tokens. |
| **[`innovative-design`](./.agents/skills/innovative-design/)** | Experimental, typography-led visual languages | 10 pure typography directions (A through J) derived directly from subject matter, without SaaS clichés. |
| **[`motion-gsap`](./.agents/skills/motion-gsap/)** | 60 fps web animations and ScrollTrigger | Scrubbed timelines, kinetic reveals, micro-interactions, complete reduced-motion branches. |
| **[`design-audit`](./.agents/skills/design-audit/)** | Systematic visual and interface audits | Evaluates visual hierarchy, spacing tokens, typographic contrast, and accessibility compliance. |
| **[`typography`](./.agents/skills/typography/)** | Professional typographic systems for screens | Modular type scales, font pairing tables, micro-copy formatting, optical alignment. |

---

## Choosing Between `design-direction` and `innovative-design`

These two skills represent distinct approaches to visual identity and must not be loaded simultaneously:

* **Use [`design-direction`](./.agents/skills/design-direction/)** when building functional web or mobile products (SaaS, fintech, e-commerce, dashboards) where user expectations, component libraries, and transactional rigor must align with an elevated visual direction.
* **Use [`innovative-design`](./.agents/skills/innovative-design/)** when working on creative explorations, editorial launches, or distinctive brand statements where you want an uncompromising, typography-led direction with zero influence from contemporary web design templates.

If both seem applicable, select the one that matches the primary goal: product utility (`design-direction`) or creative originality (`innovative-design`).

---

## 3D Web Experience Generator

The `3d-web-experience` skill includes 6 complete, runnable templates and an integrated scaffolding CLI:

### Available Templates
1. **`fintech`** (`fintech-mobile-spatial`): Mobile financial app showcase with architectural stage pods and CSS 3D scrollytelling.
2. **`sneakers`** (`sneaker-configurator`): 3D sneaker showcase with continuous orbit, angle HUD switcher, and scroll choreography.
3. **`agency`** (`agency-creative`): Studio agency portfolio with kinetic floating crystal and fluid typography.
4. **`tech`** (`tech-futuristic`): Deep tech quantum core with expanding gyroscopic rings and telemetry HUD.
5. **`hair-beauty`** (`beauty-hair-flow`): Luxury cosmetics showcase with fluid dropper physics and 3D ribbons.
6. **`fashion`** (`fashion-lookbook`): High-fashion editorial lookbook with parametric 3D cloth drape simulation.

### Scaffolding a New 3D Project

From the repository root, run the generator:

```bash
# List all available presets
node .agents/skills/3d-web-experience/scripts/scaffold-3d.js --list

# Scaffold a project using a preset
node .agents/skills/3d-web-experience/scripts/scaffold-3d.js --preset fintech --out ./my-fintech-site

# Preview locally
cd ./my-fintech-site
npx serve .
# Or: python3 -m http.server 3000
```

---

## Third-Party Resources

Third-party dependencies and reference repositories are kept under [`third-party/`](./third-party/) and preserved without modifications to their original code:

* **`third-party/bencium-marketplace`** (MIT License, bencium.io)
* **`third-party/aas-core-skills`** (MIT / CC BY 4.0, sickn33)
* **`third-party/anthropic-skills`** (Mixed licenses: Apache 2.0 and proprietary source-available for document skills, Anthropic PBC)
* **`third-party/awesome-agent-skills`** (Apache 2.0 declared, skillcreatorai)
* **`third-party/vercel-skills-cli`** (MIT License, Vercel Inc.)
* **`.agents/skills/ui-ux-pro-max`** (MIT License, Next Level Builder): integrated design system and style evaluation engine.

For complete license texts, provenance details, and notes regarding Anthropic document skills, consult [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) and each directory's `SOURCE.md`.

---

## Installation

### Manual Installation
Copy the desired skills from `.agents/skills/` into your target environment:

```bash
# Install into a specific project (standard workspace location)
mkdir -p ./my-project/.agents/skills
cp -r .agents/skills/3d-web-experience ./my-project/.agents/skills/
cp -r .agents/skills/design-direction ./my-project/.agents/skills/

# Or install globally for Claude Code / compatible tools
mkdir -p ~/.claude/skills
cp -r .agents/skills/3d-web-experience ~/.claude/skills/
```

### Using the Skills CLI
If you use the `skills` CLI from Vercel Labs:

```bash
# Install a skill from a local path
npx skills add ./.agents/skills/3d-web-experience

# Or install directly from GitHub
npx skills add https://github.com/seo-ben/skill-all --skill 3d-web-experience
```

---

## License

* Original repository content is licensed under the [MIT License](./LICENSE) © 2026 TAB TECH.
* Third-party components retain their upstream licenses as documented in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
