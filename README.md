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
| **[`vercel-skills-cli/`](./vercel-skills-cli)** | Vercel Labs | Cross-agent skill loader and distribution CLI. | Universal `npx skills` engine, TypeScript CLI runtime, agent connectors |

---

## 🚀 Quick Start

### 1. Using the Universal CLI (Vercel Labs Engine)
```bash
cd vercel-skills-cli
pnpm install
pnpm build
```

Install skills into any agent:
```bash
npx skills add vercel-labs/agent-skills
```

### 2. Exploring 2,690+ Skills Catalog
Browse the complete catalog in [`aas-core-skills/CATALOG.md`](./aas-core-skills/CATALOG.md) or query the local index:
```bash
cat aas-core-skills/skills_index.json
```

### 3. Using Production Document Engines (Anthropic)
Access the battle-tested document generation skills:
* **Word Documents**: [`anthropic-skills/skills/docx`](./anthropic-skills/skills/docx)
* **PDFs**: [`anthropic-skills/skills/pdf`](./anthropic-skills/skills/pdf)
* **PowerPoint Presentations**: [`anthropic-skills/skills/pptx`](./anthropic-skills/skills/pptx)
* **Spreadsheets**: [`anthropic-skills/skills/xlsx`](./anthropic-skills/skills/xlsx)

### 4. Injecting Modern UI/UX Guidelines
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
