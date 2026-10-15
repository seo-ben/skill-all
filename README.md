# ⚡ Skill-All — The Universal AI Agent Skills Monorepo

> **A curated, unified monorepo bringing together the world's most powerful AI Agent Skills, runtimes, enterprise document engines, and design systems.**

Compatible with **Claude Code**, **Cursor**, **Antigravity**, **OpenCode**, **Codex**, **GitHub Copilot**, and **75+ AI agents**.

---

## 📦 What's Inside

| Module | Origin / Standard | Description | Key Assets |
| :--- | :--- | :--- | :--- |
| **[`aas-core-skills/`](./aas-core-skills)** | AAS Core (48k+ ⭐) | Mega-catalog of 2,690+ community and enterprise skills. | Complete `skills_index.json`, catalog, verification scripts, multi-agent plugins |
| **[`anthropic-skills/`](./anthropic-skills)** | Anthropic Official | Official reference standard for `SKILL.md` and production document engines. | Document creators & editors (`docx`, `pdf`, `pptx`, `xlsx`), official specifications |
| **[`awesome-agent-skills/`](./awesome-agent-skills)** | Awesome Agent Skills | Ready-to-run automation recipes and workflow playbooks. | `mcp-builder`, `webapp-testing`, `canvas-design`, `artifacts-builder`, `file-organizer` |
| **[`ui-ux-pro-max/`](./ui-ux-pro-max)** | Antigravity Engine | Elite UI/UX design intelligence and frontend architecture guidelines. | Component systems, design tokens, color harmonies, micro-animations, CLI |
| **[`bencium-marketplace/`](./bencium-marketplace)** | Bencium.io | 17 elite UX, design, and architecture skills preventing generic AI aesthetics. | `bencium-impact-designer`, `bencium-innovative-ux-designer`, `design-audit`, `typography` |
| **[`ui-ux-pro-max-skill/`](./ui-ux-pro-max-skill)** | NextLevelBuilder | Canonical repository for UI/UX Pro Max design intelligence engine. | 79 UI styles, 192 color palettes, 74 font pairings, 119 UX guidelines, CLI |
| **[`ultra-3d-web-experience/`](./ultra-3d-web-experience)** | Master Agent Engine | Award-winning interactive 3D websites with bidirectional scroll & cursor physics. | 6 industry presets (FinTech, Sneakers, Agency, Beauty, Tech, Fashion), Three.js + GSAP rig |
| **[`vercel-skills-cli/`](./vercel-skills-cli)** | Vercel Labs | Cross-agent skill loader and distribution CLI. | Universal `npx skills` engine, TypeScript CLI runtime, agent connectors |

---

## 🚀 Quick Start

### 1. Generating Award-Winning 3D Websites
Scaffold any of the 6 luxury 3D websites in 1 second:
```bash
# Scaffold a Mobile FinTech & Neobank 3D Showcase
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset fintech --out ./my-fintech

# Scaffold a Sneaker Configurator
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset sneakers --out ./my-sneakers
```
Available presets: `fintech`, `sneakers`, `agency`, `hair-beauty`, `tech`, `fashion`.

### 2. Using the Universal CLI (Vercel Labs Engine)
```bash
cd vercel-skills-cli
pnpm install
pnpm build
```

Install skills into any agent:
```bash
npx skills add vercel-labs/agent-skills
```

### 3. Exploring 2,690+ Skills Catalog
Browse the complete catalog in [`aas-core-skills/CATALOG.md`](./aas-core-skills/CATALOG.md) or query the local index:
```bash
cat aas-core-skills/skills_index.json
```

### 4. Using Production Document Engines (Anthropic)
Access the battle-tested document generation skills:
* **Word Documents**: [`anthropic-skills/skills/docx`](./anthropic-skills/skills/docx)
* **PDFs**: [`anthropic-skills/skills/pdf`](./anthropic-skills/skills/pdf)
* **PowerPoint Presentations**: [`anthropic-skills/skills/pptx`](./anthropic-skills/skills/pptx)
* **Spreadsheets**: [`anthropic-skills/skills/xlsx`](./anthropic-skills/skills/xlsx)

### 5. Injecting Modern UI/UX Guidelines
To empower your agent with senior frontend & UI design capabilities, point your agent to:
* [`ui-ux-pro-max/`](./ui-ux-pro-max)

---

## 🛠️ Supported AI Coding Agents

- [x] **Antigravity**
- [x] **Claude Code**
- [x] **Cursor**
- [x] **OpenCode**
- [x] **Codex CLI**
- [x] **GitHub Copilot**
- [x] **Windsurf**
- [x] **Aider**

---

## 📄 License & Attribution

This monorepo aggregates open-source and source-available projects under their respective licenses:
* `aas-core-skills`: MIT License
* `anthropic-skills`: Apache 2.0 / Source-available document engines
* `awesome-agent-skills`: Apache 2.0
* `ui-ux-pro-max`: MIT License
* `vercel-skills-cli`: MIT License
