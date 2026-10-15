# Reference 3D Templates & Scaffolding Catalog

This reference documents the 6 production-ready 3D template architectures included directly inside this skill.

---

## 1. Catalog of Templates

| Preset Key | Template Name | Path | Core Features |
| :--- | :--- | :--- | :--- |
| **`fintech`** | Mobile FinTech & Neobank 3D Spatial | `templates/fintech-mobile-spatial/` | Clean stage pods, multi-planar Z-space, live QR laser scanner, sonar ripple rings, 3D banked scrollytelling. |
| **`sneakers`** | Luxury 3D Footwear Configurator | `templates/sneaker-configurator/` | 360° orbital shoe viewer, bidirectional exploded view on scroll, live colorway switcher, telemetry HUD. |
| **`agency`** | Creative & Design Studio Showcase | `templates/agency-creative/` | Editorial typography, high-contrast grid layouts, portfolio case studies, and responsive metrics. |
| **`tech`** | Deep Tech & AI Quantum Core | `templates/tech-futuristic/` | Concentric procedural gyroscope rings, cyber grid, particle fields, telemetry HUD. |
| **`hair-beauty`** | Luxury Cosmetics 3D Flow | `templates/beauty-hair-flow/` | Translucent glass dropper with fluid physics, 3D silk ribbons, warm editorial palette. |
| **`fashion`** | Haute Couture 3D Lookbook | `templates/fashion-lookbook/` | Parametric 3D cloth drape simulation, vertex wave dynamics, dark luxury layout. |

---

## 2. CLI Scaffolding Tool

The skill includes a standalone generator: `scripts/scaffold-3d.js`.

### Listing Available Presets
```bash
node scripts/scaffold-3d.js --list
```

### Scaffolding a Preset into a Destination Directory
```bash
node scripts/scaffold-3d.js --preset sneakers --out ./my-new-project
node scripts/scaffold-3d.js --preset fintech --out ./my-fintech-app
```

The script copies the template's `index.html`, all local `assets/` (photography, textures), and generates a minimal `package.json` with an `npx serve` command.

---

## 3. Preset Verification Status

| Preset Key | Template Name | HTTP Status | Erreurs console | Syntaxe JS | Images locales | Statut prouvé |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`agency`** | Creative & Design Studio Showcase | 200 | non testé (navigateur indisponible) | Validée (`node -c`) | 2/2 présentes | Fichiers locaux & syntaxe valides |
| **`hair-beauty`** | Cosmetics 3D Flow | 200 | non testé (navigateur indisponible) | Validée (`node -c`) | Aucune image requise | Fichiers locaux & syntaxe valides |
| **`fashion`** | Fashion 3D Lookbook | 200 | non testé (navigateur indisponible) | Validée (`node -c`) | Aucune image requise | Fichiers locaux & syntaxe valides |
| **`fintech`** | Mobile FinTech Spatial | 200 | non testé (navigateur indisponible) | Validée (`node -c`) | 10/10 présentes | Fichiers locaux & syntaxe valides |
| **`sneakers`** | Footwear 3D Configurator | 200 | non testé (navigateur indisponible) | Validée (`node -c`) | 4/4 présentes | Fichiers locaux & syntaxe valides |
| **`tech`** | Tech & Particle Core | 200 | non testé (navigateur indisponible) | Validée (`node -c`) | Aucune image requise | Fichiers locaux & syntaxe valides |

> **Limitations et périmètre des tests :**
> - **Erreurs console** : Non testé (aucun navigateur disponible dans l'environnement de sandbox pour capturer les logs runtime ou le contexte WebGL).
> - **Dépendances CDN** : Les dépendances distantes (Three.js r128, GSAP 3.12.2) n'ont pas pu être vérifiées sans accès réseau.
> - **Éléments prouvés uniquement** : Réponse serveur HTTP 200 en local, syntaxe JavaScript valide vérifiée par l'interpréteur (`node -c`), et intégrité physique des assets locaux référencés.

