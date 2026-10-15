# ⚡ Ultra 3D Web Experience Engine

> **Award-winning interactive 3D website engine for AI Agents with bidirectional scroll-driven animations, cursor physics, custom GLSL shaders, and luxury industry presets.**

Part of the **[Skill-All](https://github.com/seo-ben/skill-all.git)** universal AI agent skills monorepo.

---

## 🎯 Overview

The **Ultra 3D Web Experience** synthesizes the best capabilities across the monorepo:
1. **Design Tokens & UI Intelligence** from [`ui-ux-pro-max/`](../ui-ux-pro-max)
2. **Deterministic Document & Animation Rigging** from [`anthropic-skills/`](../anthropic-skills)
3. **Real-world Automation Recipes** from [`awesome-agent-skills/`](../awesome-agent-skills)
4. **Universal Agent Distribution** via [`vercel-skills-cli/`](../vercel-skills-cli)
5. **Multi-Agent Bundling** from [`aas-core-skills/`](../aas-core-skills)

It gives AI agents (Antigravity, Claude Code, Cursor, Windsurf, Codex, etc.) the exact formulas and boilerplates to generate **Awwwards-grade 3D websites** on demand.

---

## 💎 The 6 Core Industry Presets

| Preset | Industry / Focus | 3D Features & Motion | Template Path |
| :--- | :--- | :--- | :--- |
| **`fintech`** | Mobile FinTech & Neobanks | Pure `#ffffff` canvas, architectural oval stage pods, multi-planar Z-space, live QR laser scanner sweep, radar sonar pings, banked 3D scrollytelling. | [`templates/fintech-mobile-spatial/`](./templates/fintech-mobile-spatial/index.html) |
| **`sneakers`** | Luxury Footwear & Sneakers | 360° interactive shoe viewer, **bidirectional exploded view on scroll** (sole, cushion, plate, upper separation), live colorway & glow switcher. | [`templates/sneaker-configurator/`](./templates/sneaker-configurator/index.html) |
| **`agency`** | Creative & Design Agencies | Floating chromatic crystal torus knot sculpture, wireframe icosahedron cage, kinetic typography, magnetic cursor dot & circle. | [`templates/agency-creative/`](./templates/agency-creative/index.html) |
| **`hair-beauty`** | Haircare, Beauty & Cosmetics | Frosted glass dropper bottle, animated pipette lifting & fluid serum droplet physics, flowing 3D silk ribbons. | [`templates/beauty-hair-flow/`](./templates/beauty-hair-flow/index.html) |
| **`tech`** | Deep Tech, AI & Quantum Core | Concentric gyroscope rings expanding on scroll, floating neural data packets, infinite cyber grid, live telemetry HUD. | [`templates/tech-futuristic/`](./templates/tech-futuristic/index.html) |
| **`fashion`** | Haute Couture & Fashion Apparel | Parametric 3D draped cloth simulation with vertex noise waves, dark luxury editorial layout, capsule collection switcher. | [`templates/fashion-lookbook/`](./templates/fashion-lookbook/index.html) |

---

## ⚙️ The Architectural Engine

### 1. Bidirectional Scroll Rigging
Every animation is tied to a continuous progress mapping $P \in [0, 1]$ via GSAP ScrollTrigger (`scrub: 1.0` or `1.2`). Scrolling down advances the 3D timeline (rotations, camera dolly, component explosion); scrolling up returns cleanly to the initial state without jitter or drift.

### 2. Damped Cursor Inertia
Mouse coordinates are converted to Normalized Device Coordinates (`-1.0` to `1.0`), then smoothed in the `requestAnimationFrame` render loop:
$$\text{pos} \mathrel{+}= (\text{target} - \text{pos}) \times 0.05$$
This provides realistic physical weight and cinematic parallax tilt without snapping.

### 3. Dynamic Cursor Follow Light
A 3D `PointLight` tracks the cursor in world space, casting realistic highlights and specular reflections across metallic and glass materials.

---

## 🚀 Instant CLI Scaffolding

To generate any of these 6 3D websites in a project directory:

```bash
# List all presets
node ultra-3d-web-experience/scripts/scaffold-3d.js --list

# Scaffold a Mobile FinTech & Neobank 3D Showcase
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset fintech --out ./my-fintech-site

# Scaffold a Sneaker Configurator
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset sneakers --out ./my-sneaker-site

# Scaffold a Creative Agency Portfolio
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset agency --out ./my-agency-site

# Scaffold a Tech Startup Core
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset tech --out ./my-tech-site

# Scaffold a Haircare & Beauty Luxury Showcase
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset hair-beauty --out ./my-beauty-site

# Scaffold a Haute Couture Lookbook
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset fashion --out ./my-fashion-site
```

To run and preview:
```bash
cd my-sneaker-site
npx serve .
```

---

## 🤖 Agent Usage

This skill is pre-registered in:
- `.agents/skills/ultra-3d-web-experience/SKILL.md` (Workspace customization root)
- `ultra-3d-web-experience/SKILL.md` (Monorepo engine)

Any compatible agent will automatically read this skill when prompted for interactive 3D websites, smooth scroll rigging, or luxury WebGL showcases.
