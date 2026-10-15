# ⚡ Skill-All — The Universal AI Agent Skills & 3D Spatial Monorepo

<div align="center">

[![AI Agents](https://img.shields.io/badge/AI%20Agents-75%2B%20Supported-0052FF?style=for-the-badge&logo=openai&logoColor=white)](https://github.com/seo-ben/skill-all)
[![Standard](https://img.shields.io/badge/Specification-Agent%20Skills%20v2.0-10B981?style=for-the-badge)](https://github.com/seo-ben/skill-all)
[![3D Engine](https://img.shields.io/badge/3D%20Engine-Three.js%20%2B%20GSAP%20Spatial-000000?style=for-the-badge&logo=three.js&logoColor=white)](./ultra-3d-web-experience)
[![License](https://img.shields.io/badge/License-MIT%20%2F%20Apache%202.0-6366F1?style=for-the-badge)](LICENSE)

**Le monorepo d'intelligence agentique universel : 2 700+ skills de production, moteurs documentaires d'entreprise, design d'impact sans « AI Slop », et générateur de sites 3D spatiaux de niveau Awwwards.**

[🌟 Explorer les Presets 3D](#-les-6-presets-industriels-3d) • [🧠 Comment Utiliser le Cerveau](#-comment-utiliser-ce-cerveau-dintelligence-agentique) • [🚀 Démarrage Rapide](#-démarrage-rapide-cli) • [📦 Modules du Monorepo](#-architecture-du-monorepo)

</div>

---

## 🎯 Vision & Proposition de Valeur

La plupart des agents IA génèrent du code frontend fade, générique et répétitif (« AI Slop ») : des cartes carrées enfermées dans des bordures grises, des formulaires desktop inadaptés au mobile, des zéros barrés de codeur (`0̸`) sur des devises et des animations simplistes à sens unique.

**Skill-All brise ce plafond de verre** en combinant deux forces complémentaires :
1. **Le Cerveau d'Intelligence Design (`.agents/skills/`)** : Des règles de raisonnement autonomes qui forcent l'IA à **analyser la concurrence du top 1% mondial** (Cash App, Linear, Apple, Stripe, Dipa Inhouse), à refuser les anti-patterns médiocres et à appliquer des **pods architecturaux ovales** et des profondeurs multi-planaires $Z$.
2. **Le Moteur d'Exécution 3D Spatial (`ultra-3d-web-experience/`)** : Des templates de sites web 3D Three.js + GSAP ScrollTrigger 100% bidirectionnels, avec gestion inertielle du curseur, reflets spéculaires et micro-éléments vivants (laser QR, sonar radar).

---

## 💎 Les 6 Presets Industriels 3D

Chaque preset est un site web de niveau **Awwwards / Site of the Day**, clé en main, prêt pour la production avec tous ses assets :

| Preset | Industrie & Cible | Caractéristiques 3D & Mouvement Spatial | Template Source |
| :--- | :--- | :--- | :--- |
| **`fintech`** | **Mobile FinTech & Neobanques** | Toile `#ffffff` épurée, pods en stade ovale (`130px / 85px`), séparation $Z$, balayage laser QR temps réel, ondes radar sonar, entrées aérodynamiques en piqué. | [`templates/fintech-mobile-spatial/`](./ultra-3d-web-experience/templates/fintech-mobile-spatial/index.html) |
| **`sneakers`** | **Sneakers & Mode Sportswear** | Visualiseur orbital 360°, **vue éclatée bidirectionnelle au scroll** (séparation semelle, amorti, tige), sélecteur de coloris et lueur dynamique. | [`templates/sneaker-configurator/`](./ultra-3d-web-experience/templates/sneaker-configurator/index.html) |
| **`agency`** | **Agences Créatives & Studios** | Nœud torique en cristal chromatique en lévitation, cage icosaèdre filaire, typographie cinétique, curseur magnétique. | [`templates/agency-creative/`](./ultra-3d-web-experience/templates/agency-creative/index.html) |
| **`tech`** | **Deep Tech, IA & Quantum** | Anneaux gyroscopiques concentriques déployés au scroll, paquets de données neuronaux, grille cybernétique infinie, HUD télémétrique. | [`templates/tech-futuristic/`](./ultra-3d-web-experience/templates/tech-futuristic/index.html) |
| **`hair-beauty`** | **Cosmétique & Luxe Beauté** | Flacon compte-gouttes en verre dépoli, pipette animée avec physique de goutte de sérum, rubans de soie 3D ondulants. | [`templates/beauty-hair-flow/`](./ultra-3d-web-experience/templates/beauty-hair-flow/index.html) |
| **`fashion`** | **Haute Couture & Lookbook** | Simulation de drapé de tissu paramétrique 3D avec vagues de bruit vertex, mise en page éditoriale de luxe sombre. | [`templates/fashion-lookbook/`](./ultra-3d-web-experience/templates/fashion-lookbook/index.html) |

---

## 🚀 Démarrage Rapide (CLI)

Générez n'importe quel site 3D en 1 seconde avec tous ses assets et configurations :

```bash
# 1. Cloner le monorepo
git clone https://github.com/seo-ben/skill-all.git
cd skill-all

# 2. Lister tous les presets disponibles
node ultra-3d-web-experience/scripts/scaffold-3d.js --list

# 3. Générer le site de votre choix (ex: FinTech mobile)
node ultra-3d-web-experience/scripts/scaffold-3d.js --preset fintech --out ./mon-site-fintech

# 4. Lancer et admirer dans votre navigateur
cd ./mon-site-fintech
npx serve .
```

---

## 🧠 Comment Utiliser ce "Cerveau" d'Intelligence Agentique

Ce monorepo est nativement compris par **plus de 75 agents IA de code**. N'importe quel développeur ou équipe peut utiliser ce cerveau de 3 manières :

### Mode 1 : Intégration Native dans les Agents IA (Le plus puissant)
Le répertoire [`.agents/skills/`](./.agents/skills) respecte le standard universel des **Agent Skills**.

#### Installation :
* **Par Projet** : Copiez le dossier `.agents/skills/` à la racine de votre projet :
  ```bash
  cp -r skill-all/.agents/skills ./mon-projet/.agents/skills
  ```
* **Globalement pour votre machine** : Copiez les compétences dans le dossier racine de votre agent :
  * **Google Antigravity / Gemini IDE** : `~/.gemini/config/skills/`
  * **Claude Code** : `~/.claude/skills/`
  * **Cursor** : `.cursorrules` ou `.agents/skills/`

#### Ce qui s'active automatiquement :
Dès que vous demandez à votre IA :
> *« Crée la landing page d'une application mobile fintech de transfert d'argent »*

L'IA ne produit plus de page basique. **Elle exécute automatiquement les protocoles gravés dans le skill** :
1. **Benchmark Concurrentiel Autonome** : L'IA analyse les 1% leaders mondiaux (Cash App, Linear, Apple, Dipa Inhouse) sans attendre que vous lui dictiez chaque détail.
2. **Refus Absolu des Clichés Amateurs** :
   * Pas de boîtes/cartes carrées englobant des sections entières (toile libre `#ffffff`).
   * Pas de formulaires desktop lourds pour présenter une application mobile.
   * Pas de badges pillules au-dessus des titres (`<h2>`).
   * Pas de police de code à zéros barrés (`0̸`) sur les montants monétaires (`tabular-nums` obligatoire).
   * Liens de navbar ultra-courts en un seul mot (`Transfert`, `Paiements`, `Cash`, `Monde`) avec tiroir mobile dès $\le 1024\text{px}$.
3. **Pods Architecturaux & Profondeur $Z$** :
   * Encadrement en **stades ovales continus** (`border-radius: 130px / 85px`) ou dômes cintrés avec reflets spéculaires de verre.
   * Séparation multi-planaire : orbites à $Z: -35\text{px}$, mockups matériels à $Z: +25\text{px}$, badges tactiles flottants à $Z: +75\text{px}$ à $+95\text{px}$.
4. **Scrollytelling 3D Vectoriel $(X, Y, Z)$** :
   * Entrées en piqué aérodynamique avec démasquage textuel progressif (`clipPath`).
   * Faisceau laser scanner QR en direct et ondes radar sonar pulsantes.
   * Rétroaction physique bidirectionnelle 100% fluide au scroll (haut et bas) via GSAP ScrollTrigger.

---

### Mode 2 : Distribution Universelle via Vercel Skills (`npx skills`)
Le monorepo intègre [`vercel-skills-cli/`](./vercel-skills-cli). Vous pouvez injecter une compétence directement dans votre projet sans même cloner tout le dépôt :

```bash
# Installer le moteur 3D spatial
npx skills add seo-ben/skill-all --skill ultra-3d-web-experience

# Installer le designer d'impact UI/UX
npx skills add seo-ben/skill-all --skill bencium-controlled-ux-designer
```

---

## 📦 Architecture du Monorepo

| Dossier | Description & Rôle | Origine / Référence |
| :--- | :--- | :--- |
| **[`.agents/skills/`](./.agents/skills)** | **Le Cerveau d'Intelligence** : Règles comportementales, anti-slop, tokens de pods architecturaux, spécifications de mouvement 3D. | Standard Agent Skills v2.0 |
| **[`ultra-3d-web-experience/`](./ultra-3d-web-experience)** | **Moteur 3D Spatial & CLI** : Les 6 templates interactifs complets, assets haute définition et le script de génération. | Moteur 3D Master |
| **[`bencium-marketplace/`](./bencium-marketplace)** | **17 compétences de design & d'architecture** d'élite (Bencium.io) prévenant les esthétiques génériques. | [Bencium.io](https://bencium.io) |
| **[`ui-ux-pro-max/`](./ui-ux-pro-max)** | **Intelligence de Design Systèmes** : 79 styles UI, 192 palettes harmonisées, 74 pairings de polices, 119 règles UX. | NextLevelBuilder / AGY |
| **[`anthropic-skills/`](./anthropic-skills)** | **Moteurs de Documents d'Entreprise** : Génération et édition déterministe de Word (`docx`), PDF, PowerPoint (`pptx`), Excel (`xlsx`). | Anthropic Official |
| **[`aas-core-skills/`](./aas-core-skills)** | **Méga-catalogue communautaire** : Plus de 2 690 compétences agentiques indexées et prêtes à l'emploi. | AAS Core (48k+ ⭐) |
| **[`awesome-agent-skills/`](./awesome-agent-skills)** | **Playbooks d'automatisation** : Recettes pour MCP, tests d'applications web, organisation de fichiers. | Agentic Workflows |
| **[`vercel-skills-cli/`](./vercel-skills-cli)** | **Gestionnaire de paquets universel** pour installer des skills cross-agents en ligne de commande. | Vercel Labs |

---

## 🛠️ Agents IA Compatibles

Ce monorepo et ses skills sont rigoureusement testés et validés sur :

- [x] **Google Antigravity & Gemini IDE**
- [x] **Claude Code & Claude Cowork**
- [x] **Cursor IDE**
- [x] **Windsurf (Codeium)**
- [x] **OpenAI Codex CLI**
- [x] **GitHub Copilot**
- [x] **OpenCode**
- [x] **Aider & Continue.dev**

---

## 📄 Licence & Crédits

Ce projet unifié assemble des briques open-source et des créations originales sous licences respectives :
* `ultra-3d-web-experience` & `.agents/skills` : Licence MIT.
* `aas-core-skills` : Licence MIT.
* `anthropic-skills` : Licence Apache 2.0.
* `ui-ux-pro-max` : Licence MIT.
* `vercel-skills-cli` : Licence MIT.

---

<div align="center">
  <sub>Forgé avec passion pour l'excellence du web design et l'autonomie des agents IA.</sub>
</div>
